document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const offset = window.scrollY * speed - 100;
    element.style.backgroundPositionY = `${-offset}px`;
  });
});

document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax2");

  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const offset = window.scrollY * speed - 550;
    element.style.backgroundPositionY = `${-offset}px`;
  });
});

document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax3, .parallax4");

  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const offset = window.scrollY * speed - 400;
    element.style.backgroundPositionY = `${-offset}px`;
  });
});

document.addEventListener("mousemove", onMouseMove);

var cursor = document.querySelector(".cursor");
var links = document.querySelectorAll(
  "a, .fixed-camille, .highlight-project, .homepage, .music, .highlight .l-footer, .l-project-head, .l-contact-head"
);

var onMouseMove = function (event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
};

var onMouseEnter = function () {
  var hoveredElement = document.elementFromPoint(event.clientX, event.clientY);

  if (hoveredElement.closest("a, .fixed-camille, .highlight-project")) {
    cursor.style.background = "#2C2828";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
  } else if (hoveredElement.closest(".homepage, .l-project-head")) {
    cursor.style.background = "#f1a805"; // yellow
  } else if (hoveredElement.closest(".music, .l-contact-head")) {
    cursor.style.background = "#12494d"; // canard
  } else if (hoveredElement.closest(".highlight")) {
    cursor.style.background = "#f0d5a0"; // beige
  } else if (hoveredElement.closest(".l-footer")) {
    cursor.style.background = "#f1a805"; // yellow
  } else {
    cursor.style.background = "#f1a805"; // yellow
  }
};

var onMouseLeave = function () {
  cursor.style.width = "30px";
  cursor.style.height = "30px";
};

document.addEventListener("mousemove", onMouseMove);

links.forEach((link) => {
  link.addEventListener("mouseenter", onMouseEnter);
  link.addEventListener("mouseleave", onMouseLeave);
});

// document
//   .getElementById("backToTop")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });

// const image = document.getElementById("imageCliquee");
// const lightbox = document.getElementById("lightbox");
// const lightboxImage = document.getElementById("lightbox-image");

// image.addEventListener("click", () => {
//   lightboxImage.src = image.src;
//   lightbox.style.display = "flex";
// });

// // Fermer la lightbox en cliquant n’importe où
// lightbox.addEventListener("click", () => {
//   lightbox.style.display = "none";
// });

var projectExpand = document.querySelector(".project-images");

var toggleMenu = function toggleMenu() {
  projectExpand.classList.toggle("is-active");
};

projectExpand.addEventListener("click", toggleMenu);
