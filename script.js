// DESKTOP       ===================================================================================================================================================

var tl_TS_Product_M = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);


const canvas_1_m = document.querySelector("#uniq-TS-frame_1_m");
const context_1_m = canvas_1_m.getContext("2d");

const frames_1_m = {
  currentIndex_1: 0,
  maxIndex_1: 65,
};

let imagesLoaded_1_m = 0;
const images_1_m = [];

function preloadImages_1_m() {
  for (var i = 0; i < frames_1_m.maxIndex_1; i++) {
    const imageUrl_1_m = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Calming_Sunscreen_${i
      .toString()
      .padStart(3, "0")}.png?v=1737009142`;
    const img_1_m = new Image();

    img_1_m.src = imageUrl_1_m;
    img_1_m.onload = () => {
      imagesLoaded_1_m++;
      if (imagesLoaded_1_m === frames_1_m.maxIndex_1) {
        loadImage_m(frames_1_m.currentIndex_1);
        startAnimation_m();
      }
    };
    images_1_m.push(img_1_m);
  }
}

function loadImage_m(index) {
  if (index >= 0 && index < frames_1_m.maxIndex_1) {
    const img_1_m = images_1_m[index];
    canvas_1_m.width = 300;
    canvas_1_m.height = 500;
    const scaleX_1_m = canvas_1_m.width / img_1_m.width;
    const scaleY_1_m = canvas_1_m.height / img_1_m.height;
    const scale_1_m = Math.max(scaleX_1_m, scaleY_1_m);
    const newWidth_1_m = img_1_m.width * scale_1_m;
    const newHeight_1_m = img_1_m.height * scale_1_m;
    const offsetX_1_m = (canvas_1_m.width - newWidth_1_m) / 2;
    const offsetY_1_m = (canvas_1_m.height - newHeight_1_m) / 2;
    context_1_m.clearRect(0, 0, canvas_1_m.width, canvas_1_m.height);
    context_1_m.imageSmoothingEnabled = true;
    context_1_m.imageSmoothingQuality = "high";
    context_1_m.drawImage(img_1_m, offsetX_1_m, offsetY_1_m, 300, 500);
    frames_1_m.currentIndex_1 = index;
  }
}

function startAnimation_m() {
  tl_TS_Product_M = gsap.timeline({
    scrollTrigger: {
      trigger: ".uniq-TS-product-image-m ",
      start: "top 45%",
      end: "top 10%",
      scrub: 1,
    //   markers: true,
    },
  });

  tl_TS_Product_M.to(frames_1_m, {
    currentIndex_1: frames_1_m.maxIndex_1,
    onUpdate: function () {
      loadImage_m(Math.floor(frames_1_m.currentIndex_1));
    },
  });
}

preloadImages_1_m();
