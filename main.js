document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-premium, .food-card-minimal');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(p => {
    p.style.opacity = '0';
    p.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    p.style.transform = 'translateY(40px) scale(0.95)';
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
