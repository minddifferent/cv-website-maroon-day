// Add an event listener to the nav toggle button
document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector(".navigation-menu").classList.toggle("show");
  document.querySelector(".navigation-menu").classList.toggle("slide-in");
});

// scrollup-btn
window.addEventListener("scroll", function () {
  var clientHeight = 400;
  var scrollPosition =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPosition >= clientHeight) {
    document.querySelector(".scroll-up-button").style.display = "block";
  } else {
    document.querySelector(".scroll-up-button").style.display = "none";
  }
});
document
  .querySelector(".scroll-up-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 1,
  perMove: 1,
  // padding: "1rem",
  focus: "center",
});

splide.mount();
