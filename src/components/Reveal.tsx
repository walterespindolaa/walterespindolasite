"use client";

import { useEffect } from "react";

// Reveal ao rolar + parallax leve nas fotos (.px-img). Sem biblioteca.
export function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );
      els.forEach((el) => io.observe(el));
    } else {
      els.forEach((el) => el.classList.add("is-in"));
    }

    const imgs = Array.from(document.querySelectorAll<HTMLElement>(".px-img"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      imgs.forEach((img) => {
        const r = (img.parentElement ?? img).getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
        img.style.setProperty("--py", `${(-p * 28).toFixed(1)}px`);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    if (!reduce && imgs.length) {
      tick();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return null;
}
