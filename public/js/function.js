$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});

$(".testimonial").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".product-review").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoHideDialCode: false,
  // autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  // geoIpLookup: function(callback) {
  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  //     var countryCode = (resp && resp.country) ? resp.country : "";
  //     callback(countryCode);
  //   });
  // },
  // hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  // preferredCountries: ['cn', 'jp'],
  // separateDialCode: true,
  utilsScript: "build/js/utils.js",
});

// QUANTITY
function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}

// SLICK SLIDER (PRODUCT)

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });

// OWL SLIDER

//   $('.product-review').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

// RESPONSIVE

// RESPONSIVE PROFILE SIDEBAR
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// RESPONSIVE MENU SIDEBAR
function openNavMenu() {
  document.getElementById("mySidenavMenu").style.width = "250px";
}

function closeNavMenu() {
  document.getElementById("mySidenavMenu").style.width = "0";
}

// SIDEBAR 2
function openNav2() {
  document.getElementById("mySidenav2").style.width = "100%";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}

// SIDEBAR 3
function openNav3() {
  document.getElementById("mySidenav3").style.width = "100%";
}

function closeNav3() {
  document.getElementById("mySidenav3").style.width = "0";
}
// SIDEBAR 4
function openNav4() {
  document.getElementById("mySidenav4").style.width = "100%";
}

function closeNav4() {
  document.getElementById("mySidenav4").style.width = "0";
}

// SINGLE PRODUCT SLIDER

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
