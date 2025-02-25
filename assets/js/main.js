(function ($) {
  "use strict";
  /*====Dom is loaded==== */
  // var $loader = document.querySelector("#preloader-background");

  // window.onload = function () {
  //   setTimeout(function () {
  //     $loader.remove();
  //   });
  // };
  /*=====Header=====*/
  const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu-inner");
const menuArrow = menu.querySelector(".menu-arrow");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// Navbar Menu Toggle Function
function toggleMenu() {
   menu.classList.toggle("is-active");
   overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
   subMenu = children.querySelector(".submenu");
   subMenu.classList.add("is-active");
   subMenu.style.animation = "slideLeft 0.35s ease forwards";
   const menuTitle = children.querySelector("i").parentNode.childNodes[0]
      .textContent;
   menu.querySelector(".menu-title").textContent = menuTitle;
   menu.querySelector(".menu-header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
   subMenu.style.animation = "slideRight 0.35s ease forwards";
   setTimeout(() => {
      subMenu.classList.remove("is-active");
   }, 300);

   menu.querySelector(".menu-title").textContent = "";
   menu.querySelector(".menu-header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
   if (!menu.classList.contains("is-active")) {
      return;
   }
   if (e.target.closest(".menu-dropdown")) {
      const children = e.target.closest(".menu-dropdown");
      showSubMenu(children);
   }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 992) {
      if (menu.classList.contains("is-active")) {
         toggleMenu();
      }
   }
});



// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);


  /*=====AOS animation=====*/
  AOS.init({
    // Global settings:
    duration: 900,
    easing: "ease-in-cubic",
    disable: "mobile",
  });
  AOS.refresh();
  /*=====Trainning Programs=====*/
  var swiperTraining = new Swiper(".mySwiper.training-programs", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      400: {
        slidesPerView: 1,
      },
      880: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 2.5,
      },
      1366: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination.training-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next.training-arrow",
      prevEl: ".swiper-button-prev.training-arrow",
    },
  });
  /*=====Trainning Programs=====*/
  var swiperProducts = new Swiper(".mySwiper.products", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      400: {
        slidesPerView: 1,
      },
      880: {
        slidesPerView: 1.5,
      },
      1025: {
        slidesPerView: 2.25,
      },
      1366: {
        slidesPerView: 3.25,
      },
    },
    pagination: {
      el: ".swiper-pagination.products-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next.products-arrow",
      prevEl: ".swiper-button-prev.products-arrow",
    },
  });
 /*=====portfolio Programs=====*/
var swiperPortfolio = new Swiper(".mySwiper.portfolio", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: false,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    400: {
      slidesPerView: 1.5,
    },
    880: {
      slidesPerView: 2.25,
    },
    1025: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 3.25,
    },
  },
  pagination: {
    el: ".swiper-pagination.portfolio-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next.portfolio-arrow",
    prevEl: ".swiper-button-prev.portfolio-arrow",
  },
});
  /*====Back to top==== */
  var amountScrolled = 200;
  var amountScrolledNav = 25;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("button.back-to-top").addClass("show");
    } else {
      $("button.back-to-top").removeClass("show");
    }
  });

  $("button.back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
})(jQuery);
