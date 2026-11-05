import { useEffect, type RefObject } from 'react';

/** Home-only progressive motion. Content remains visible without observers or JS. */
export function useHomeMotion(rootRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    const revealItems = Array.from(root.querySelectorAll<HTMLElement>('.ms-section-heading, .ms-steps article, .ms-plan-card, .ms-origin, .ms-faq, .ms-final'));
    const renderScroll = () => {
      frame = 0;
      const length = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty('--ms-page-progress', String(Math.min(1, Math.max(0, window.scrollY / length))));
      root.style.setProperty('--ms-hero-shift', preference.matches ? '0px' : Math.min(75, window.scrollY * .13) + 'px');
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(renderScroll); };
    const configure = () => {
      observer?.disconnect();
      root.classList.remove('ms-motion-ready');
      if (!preference.matches && 'IntersectionObserver' in window) {
        observer = new IntersectionObserver(entries => entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer?.unobserve(entry.target); }
        }), { threshold: .08, rootMargin: '0px 0px -24px 0px' });
        revealItems.forEach((item, i) => {
          item.classList.add('ms-reveal');
          item.style.setProperty('--ms-reveal-delay', (item.matches('article') ? i % 3 * 65 : 0) + 'ms');
          observer?.observe(item);
        });
        root.classList.add('ms-motion-ready');
      }
      renderScroll();
    };
    configure();
    document.documentElement.classList.add('ms-home-transitions');
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    preference.addEventListener('change', configure);
    const stage = root.querySelector<HTMLElement>('.ms-hero-stage');
    const moveStage = (event: PointerEvent) => {
      if (!stage || preference.matches || event.pointerType !== 'mouse') return;
      const rect = stage.getBoundingClientRect();
      stage.style.setProperty('--ms-tilt-x', ((event.clientY - rect.top) / rect.height * -4 + 2) + 'deg');
      stage.style.setProperty('--ms-tilt-y', ((event.clientX - rect.left) / rect.width * 4 - 2) + 'deg');
    };
    const resetStage = () => { stage?.style.setProperty('--ms-tilt-x', '0deg'); stage?.style.setProperty('--ms-tilt-y', '0deg'); };
    stage?.addEventListener('pointermove', moveStage);
    stage?.addEventListener('pointerleave', resetStage);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      preference.removeEventListener('change', configure);
      stage?.removeEventListener('pointermove', moveStage);
      stage?.removeEventListener('pointerleave', resetStage);
      document.documentElement.classList.remove('ms-home-transitions');
      root.classList.remove('ms-motion-ready');
    };
  }, [rootRef]);
}
