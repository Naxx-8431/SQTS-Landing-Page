const animatedItems = document.querySelectorAll(".fade-up, .fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.25 }
);

animatedItems.forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
