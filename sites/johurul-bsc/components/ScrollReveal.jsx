"use client";
import { useEffect } from "react";
export default function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const elements = document.querySelectorAll(".reveal, .draw-path");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return () => document.documentElement.classList.remove("js");
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    elements.forEach((el) => obs.observe(el));
    return () => {
      obs.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);
  return null;
}