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

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".blog-slides");
  const images = document.querySelectorAll(".blog-slides img");
  const prev = document.getElementById("blog-prev");
  const next = document.getElementById("blog-next");

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

document.getElementById('burger').addEventListener('click', function() {
  document.querySelector('.nav-list').classList.add('open');
  document.querySelector('.burger').style.display = 'none';  // Hide burger when menu is open
  document.getElementById('close-menu').style.display = 'block'; // Show close button
});

document.getElementById('close-menu').addEventListener('click', function() {
  document.querySelector('.nav-list').classList.remove('open');
  document.querySelector('.burger').style.display = 'flex';  // Show burger again when menu is closed
  document.getElementById('close-menu').style.display = 'none'; // Hide close button
});

