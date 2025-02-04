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

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector("#phone");
  window.intlTelInput(phoneInput, {
    initialCountry: "auto",
    geoIpLookup: callback => {
      fetch("https://ipinfo.io/json?token=YOUR_TOKEN")
        .then(res => res.json())
        .then(data => callback(data.country))
        .catch(() => callback("us"));
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
});
