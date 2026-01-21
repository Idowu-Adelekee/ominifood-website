// NEW CODE
// Selecting Elements
const btnOpenEl = document.querySelector(
  '.icon-mobile-nav[name="menu-outline"]',
);
const btnCloseEl = document.querySelector(
  '.icon-mobile-nav[name="close-outline"]',
);
const headerEl = document.querySelector(".header");
const heroEl = document.querySelector(".section-hero");
const body = document.querySelector("body");

// Smooth Scrolling Animatin
// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     //scroll back to top
//     if(href === '#')
//   });
// });

// // Implementing the Sticky Navigation bar
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      body.classList.add("sticky");
    } else body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);
observer.observe(heroEl);

// Making the Mobile Navigation Works
btnOpenEl.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
});

btnCloseEl.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});

// Making the Mobile Navigation Work

// Setting the Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// FROM STARTER FILE
///////////////////////////////////////////////////////////
// // Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

// /*
// .no-flexbox-gap .main-nav-list li:not(:last-child) {
//   margin-right: 4.8rem;
// }

// .no-flexbox-gap .list-item:not(:last-child) {
//   margin-bottom: 1.6rem;
// }

// .no-flexbox-gap .list-icon:not(:last-child) {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .delivered-faces {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .meal-attribute:not(:last-child) {
//   margin-bottom: 2rem;
// }

// .no-flexbox-gap .meal-icon {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .footer-row div:not(:last-child) {
//   margin-right: 6.4rem;
// }

// .no-flexbox-gap .social-links li:not(:last-child) {
//   margin-right: 2.4rem;
// }

// .no-flexbox-gap .footer-nav li:not(:last-child) {
//   margin-bottom: 2.4rem;
// }

// @media (max-width: 75em) {
//   .no-flexbox-gap .main-nav-list li:not(:last-child) {
//     margin-right: 3.2rem;
//   }
// }

// @media (max-width: 59em) {
//   .no-flexbox-gap .main-nav-list li:not(:last-child) {
//     margin-right: 0;
//     margin-bottom: 4.8rem;
//   }
// }
// */

// Creating date
// const now = new Date();
// console.log(now);

// // Parsing a string
// console.log(new Date("Jan 21 2026 10:12:19"));
// console.log(new Date("24 December 2028"));

// console.log(new Date("Jan 1 1998"));

// // Parsing number
// console.log(new Date(2037, 10, 19, 6, 23, 5));
// console.log(new Date(2037, 10, 33, 6, 23, 5));

// // The Unix time is the number of the miliseconds passed since January first 1970

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const day3TimeStamp = 3 * 24 * 60 * 60 * 1000;

// console.log(new Date(day3TimeStamp));

// Working with dates
const future = new Date();
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

// const todayStamp = new Date(future.getTime());
// console.log(todayStamp);

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);
