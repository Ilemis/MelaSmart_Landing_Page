import { useEffect, type RefObject } from 'react';

/** Update the homepage reading indicator at most once per animation frame. */
export function useHomeMotion(rootRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const distance = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / distance));
      root.style.setProperty('--ms-page-progress', String(progress));
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [rootRef]);
}

/** Measure the stationary scene, then update only the phone's visual transform. */
export function usePhoneTilt(sceneRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const canTilt = window.matchMedia('(min-width: 701px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const updateTilt = () => {
      frame = 0;
      const bounds = scene.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      scene.setAttribute('data-tilting', 'true');
      const x = Math.max(-1, Math.min(1, (pointerX - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (pointerY - bounds.top) / bounds.height * 2 - 1));
      scene.style.setProperty('--ms-phone-tilt-x', `${-y * 7}deg`);
      scene.style.setProperty('--ms-phone-tilt-y', `${x * 10}deg`);
    };

    const move = (event: PointerEvent) => {
      if (!canTilt.matches || event.pointerType !== 'mouse') return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = requestAnimationFrame(updateTilt);
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      scene.removeAttribute('data-tilting');
      scene.style.removeProperty('--ms-phone-tilt-x');
      scene.style.removeProperty('--ms-phone-tilt-y');
    };

    scene.addEventListener('pointermove', move);
    scene.addEventListener('pointerleave', reset);
    scene.addEventListener('pointercancel', reset);
    canTilt.addEventListener('change', reset);

    return () => {
      reset();
      scene.removeEventListener('pointermove', move);
      scene.removeEventListener('pointerleave', reset);
      scene.removeEventListener('pointercancel', reset);
      canTilt.removeEventListener('change', reset);
    };
  }, [sceneRef]);
}
