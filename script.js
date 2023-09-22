///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);


// Mobile Navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Mouse cursor

// const cursor = document.querySelector('.cursor')

// document.addEventListener("mousemove", (e)=>{
//   let x = e.pageX
//   let y = e.pageY

//   cursor.style.top = y + "px"
//   cursor.style.left = x + "px"
//   cursor.style.display = 'block'

//   document.addEventListener("mouseout", ()=>{
//     cursor.style.display = 'none'
//   })
// })

//  Initialize Swiper 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay:2500,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });


// Typed Js

AOS.init();

var typed = new Typed(".auto-type", {
  strings: ["Visualize Your studies!"],
  typeSpeed: 150,
  backspeed: 150,
  loop: true,
});
