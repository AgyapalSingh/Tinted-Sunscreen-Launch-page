// DESKTOP       ===================================================================================================================================================

var tl_TS_title_M = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

// tl_TS_title_M.to(".title-part", {
//   opacity: 1,
//   scrollTrigger: {
//     trigger: ".title-part-1",
//     start: "bottom 60%",
//     end: "bottom 0%",
//     scrub: 1,
//     markers: true
//   },
// });


// document.querySelectorAll(".uniq-TS-title-text-m").forEach((card) => {
//   gsap.to(card, {
//     scale: 0.7,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: card,
//       start: "top 15%",
//       end: "bottom 15%",
//       markers: true,
//       scrub: true,
//     },
//   });
// });