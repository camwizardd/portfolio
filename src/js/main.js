document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const offset = window.scrollY * speed - 100;
    element.style.backgroundPositionY = `${-offset}px`;
  });
});
