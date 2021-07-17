// // hover navbar-item

// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function () {
//     if (this.matchMedia("(min-width: 768px)").matches) {
//         $dropdown.hover(
//             function () {
//                 const $this = $(this);
//                 $this.addClass(showClass);
//                 $this.find($dropdownToggle).attr("aria-expanded", "true");
//                 $this.find($dropdownMenu).addClass(showClass);
//             },
//             function () {
//                 const $this = $(this);
//                 $this.removeClass(showClass);
//                 $this.find($dropdownToggle).attr("aria-expanded", "false");
//                 $this.find($dropdownMenu).removeClass(showClass);
//             }
//         );
//     } else {
//         $dropdown.off("mouseenter mouseleave");
//     }
// });

// // owl-carousel
// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     mouseDrag: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 4
//         }
//     }
// })

// // hover owl-carousel

// const $itemCarousel = $(".owl-carousel .item")
// const $itemPanel = $(".tab-content .tab-pane")

// $.each($itemCarousel, function (index, item) {
//     $(item).hover(
//         function () {
//             $.each($itemPanel, function (index, panel) {
//                 if ($(panel).attr('id') === $(item).attr('data-tab')) {
//                     $(panel).addClass('active')
//                 } else {
//                     $(panel).removeClass('active')
//                 }
//             });
//         }
//     )
// });
