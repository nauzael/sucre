document.addEventListener('DOMContentLoaded', () => {
  const polaroids = document.querySelectorAll('.polaroid-frame');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.style.transform.replace('translateY(50px)', 'translateY(0)');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  polaroids.forEach(p => {
    p.style.opacity = '0';
    p.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    const currentTransform = window.getComputedStyle(p).transform;
    p.style.transform = `translateY(50px)`;
    observer.observe(p);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
