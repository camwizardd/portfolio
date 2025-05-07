document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax, .parallax6");

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
  const parallaxElements = document.querySelectorAll(
    ".parallax3, .parallax4, .parallax5"
  );

  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const offset = window.scrollY * speed - 400;
    element.style.backgroundPositionY = `${-offset}px`;
  });
});

document.addEventListener("mousemove", onMouseMove);

var cursor = document.querySelector(".cursor");
var links = document.querySelectorAll(
  "a, .fixed-camille, .highlight-project, .homepage, .music, .l-highlight .l-footer, .l-project-head, .l-contact-head, img, .section-footer, .l-contact-section"
);

var onMouseMove = function (event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
};

var previousColor = null;

var onMouseEnter = function () {
  var hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
  previousColor = cursor.style.background;

  if (hoveredElement.closest("a, .fixed-camille, .highlight-project, img")) {
    cursor.style.background = "#2C2828";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
  } else if (hoveredElement.closest(".homepage, .l-project-head, .l-footer")) {
    cursor.style.background = "#f1a805"; // yellow
  } else if (hoveredElement.closest(".music, .l-contact-head")) {
    cursor.style.background = "#12494d"; // canard
  } else if (hoveredElement.closest(".l-highlight, .l-contact-section")) {
    cursor.style.background = "#f0d5a0"; // beige
  } else {
    cursor.style.background = "#f1a805"; // yellow
  }
};

var onMouseLeave = function () {
  cursor.style.background = previousColor;
  cursor.style.width = "30px";
  cursor.style.height = "30px";
};

document.addEventListener("mousemove", onMouseMove);

links.forEach((link) => {
  link.addEventListener("mouseenter", onMouseEnter);
  link.addEventListener("mouseleave", onMouseLeave);
});

document.querySelectorAll(".projects-filter h2").forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.textContent.toLowerCase();

    document.querySelectorAll(".project-section").forEach((section) => {
      const category = section.getAttribute("data-category");
      if (category === selected || selected === "tout") {
        section.style.display = "";
      } else {
        section.style.display = "none";
      }
    });
  });
});
