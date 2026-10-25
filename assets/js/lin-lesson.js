(() => {
  const bar = document.querySelector(".lin-progress-track span");
  const output = document.querySelector(".lin-progress-value");
  const links = [...document.querySelectorAll("[data-section-link]")];
  const sections = links.map((link) => document.getElementById(link.dataset.sectionLink)).filter(Boolean);
  if (!bar || !output) return;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 100;
    bar.style.width = `${progress}%`;
    output.value = `${Math.round(progress)}%`;
    output.textContent = `${Math.round(progress)}%`;
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => {
        const active = link.dataset.sectionLink === visible.target.id;
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.1, 0.35, 0.65] });
    sections.forEach((section) => observer.observe(section));
  }
})();
