let span = document.querySelector(".scroll-to-up");
let tabs = document.querySelectorAll(".tabs li");
let divs = document.querySelectorAll(".section4 .row div");
let tabsArray = Array.from(tabs);
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  });
});

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
