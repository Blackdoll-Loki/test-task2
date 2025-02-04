document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let index = 0;
  const totalSlides = images.length;

  function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateSlider();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
  });
});
