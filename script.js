document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loader-container").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000); // Adjust the timeout as needed
});

// navbar scroll effect
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("nav-scroll", window.scrollY > 0);
});

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector("nav .container ul");

// Open sidebar
openBtn.addEventListener("click", () => {
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
  sidebar.style.left = "0";
  document.body.classList.add("sidebar-open"); // prevent background scroll
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  sidebar.style.left = "-270px";
  document.body.classList.remove("sidebar-open");
});

// Auto-close when clicking a nav link
document.querySelectorAll("nav .container ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.style.left = "-270px";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    document.body.classList.remove("sidebar-open");
  });
});
document.querySelectorAll(".socialLink a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.style.left = "-270px";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    document.body.classList.remove("sidebar-open");
  });
});
