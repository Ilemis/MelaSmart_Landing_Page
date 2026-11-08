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
