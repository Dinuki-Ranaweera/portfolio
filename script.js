// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Navbar click
document.querySelectorAll(".navbar li").forEach(item => {
  item.addEventListener("click", () => {
    const section = item.getAttribute("data-section");
    scrollToSection(section);
  });
});

// Scroll animations + active nav
const sections = document.querySelectorAll(".section, .hero");
const navItems = document.querySelectorAll(".navbar li");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.7;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < trigger) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });

  sections.forEach(sec => {
    const id = sec.getAttribute("id");
    const top = sec.offsetTop - 100;

    if (window.scrollY >= top && id) {
      navItems.forEach(li => li.classList.remove("active"));
      document.querySelector(`[data-section="${id}"]`)?.classList.add("active");
    }
  });
});