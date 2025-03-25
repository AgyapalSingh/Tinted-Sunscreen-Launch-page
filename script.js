// Mobile     ===================================================================================================================================================

var tl_TS_Hook_M = gsap.timeline();
var tl_TS_Product_M = gsap.timeline();
var tl_TS_Product_M_2 = gsap.timeline();
var tl_TS_Product_M_3 = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl_TS_Hook_M.to(".title-part-Hook-1", {
  opacity: 0,
  scale: 1.5,
  scrollTrigger: {
    trigger: ".uniq-TS-Hook-m ",
    start: "top 5%",
    end: "top 0%",
    scrub: 1,
  },
});

tl_TS_Hook_M.to(".title-part-Hook-2", {
  opacity: 1,
  scale: 1.5,
  scrollTrigger: {
    trigger: ".uniq-TS-Hook-m ",
    start: "top 0%",
    end: "top -15%",
    scrub: 1,
  },
});

tl_TS_Hook_M.to(".title-part-Hook-2", {
  opacity: 0,
  scale: 1,
  scrollTrigger: {
    trigger: ".uniq-TS-Hook-m ",
    start: "top -15%",
    end: "top -20%",
    scrub: 1,
  },
});

tl_TS_Hook_M.to(".title-part-Hook-3", {
  opacity: 1,
  scale: 1.5,
  scrollTrigger: {
    trigger: ".uniq-TS-Hook-m ",
    start: "top -20%",
    end: "top -35%",
    scrub: 1,
  },
});

tl_TS_Hook_M.to(".title-part-Hook-3", {
  opacity: 0,
  scale: 1,
  scrollTrigger: {
    trigger: ".uniq-TS-Hook-m ",
    start: "top -35%",
    end: "top -40%",
    scrub: 1,
  },
});

tl_TS_Hook_M.to(".title-part-Hook-4", {
  opacity: 1,
  scale: 1.5,
  scrollTrigger: {
    trigger: ".uniq-TS-Hook-m ",
    start: "top -40%",
    end: "top -55%",
    scrub: 1,
  },
});

tl_TS_Hook_M.to(".title-part-Hook-4", {
  opacity: 0,
  scale: 1,
  scrollTrigger: {
    trigger: ".uniq-TS-Hook-m ",
    start: "top -55%",
    end: "top -60%",
    scrub: 1,
  },
});

//  CANVAS 1
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

// CANVAS 2

const canvas_2_m = document.querySelector("#uniq-TS-frame_2_m");
const context_2_m = canvas_2_m.getContext("2d");

const frames_2_m = {
  currentIndex_2: 0,
  maxIndex_2: 65,
};

let imagesLoaded_2_m = 0;
const images_2_m = [];

function preloadImages_2_m() {
  for (var i = 0; i < frames_2_m.maxIndex_2; i++) {
    const imageUrl_2_m = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Calming_Sunscreen_${i
      .toString()
      .padStart(3, "0")}.png?v=1737009142`;
    const img_2_m = new Image();

    img_2_m.src = imageUrl_2_m;
    img_2_m.onload = () => {
      imagesLoaded_2_m++;
      if (imagesLoaded_2_m === frames_2_m.maxIndex_2) {
        loadImage_2_m(frames_2_m.currentIndex_2);
        startAnimation_2_m();
      }
    };
    images_2_m.push(img_2_m);
  }
}

function loadImage_2_m(index) {
  if (index >= 0 && index < frames_2_m.maxIndex_2) {
    const img_2_m = images_2_m[index];
    canvas_2_m.width = 300;
    canvas_2_m.height = 500;
    const scaleX_2_m = canvas_2_m.width / img_2_m.width;
    const scaleY_2_m = canvas_2_m.height / img_2_m.height;
    const scale_2_m = Math.max(scaleX_2_m, scaleY_2_m);
    const newWidth_2_m = img_2_m.width * scale_2_m;
    const newHeight_2_m = img_2_m.height * scale_2_m;
    const offsetX_2_m = (canvas_2_m.width - newWidth_2_m) / 2;
    const offsetY_2_m = (canvas_2_m.height - newHeight_2_m) / 2;
    context_2_m.clearRect(0, 0, canvas_2_m.width, canvas_2_m.height);
    context_2_m.imageSmoothingEnabled = true;
    context_2_m.imageSmoothingQuality = "high";
    context_2_m.drawImage(img_2_m, offsetX_2_m, offsetY_2_m, 300, 500);
    frames_2_m.currentIndex_2 = index;
  }
}

function startAnimation_2_m() {
  tl_TS_Product_M_2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".uniq-TS-product-image-m-2 ",
      start: "top 45%",
      end: "top 10%",
      scrub: 1,
    },
  });
  tl_TS_Product_M_2.to(frames_2_m, {
    currentIndex_2: frames_2_m.maxIndex_2,
    onUpdate: function () {
      loadImage_2_m(Math.floor(frames_2_m.currentIndex_2));
    },
  });
}

preloadImages_2_m();

// CANVAS 3

const canvas_3_m = document.querySelector("#uniq-TS-frame_3_m");
const context_3_m = canvas_3_m.getContext("2d");

const frames_3_m = {
  currentIndex_3: 0,
  maxIndex_3: 65,
};

let imagesLoaded_3_m = 0;
const images_3_m = [];

function preloadImages_3_m() {
  for (var i = 0; i < frames_3_m.maxIndex_3; i++) {
    const imageUrl_3_m = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Calming_Sunscreen_${i
      .toString()
      .padStart(3, "0")}.png?v=1737009142`;
    const img_3_m = new Image();

    img_3_m.src = imageUrl_3_m;
    img_3_m.onload = () => {
      imagesLoaded_3_m++;
      if (imagesLoaded_3_m === frames_3_m.maxIndex_3) {
        loadImage_3_m(frames_3_m.currentIndex_3);
        startAnimation_3_m();
      }
    };
    images_3_m.push(img_3_m);
  }
}

function loadImage_3_m(index) {
  if (index >= 0 && index < frames_3_m.maxIndex_3) {

    const img_3_m = images_3_m[index];
    canvas_3_m.width = window.innerWidth / 1.01;
    canvas_3_m.height = window.innerHeight / 1.1;

    context_3_m.clearRect(0, 0, canvas_3_m.width, canvas_3_m.height);
    context_3_m.imageSmoothingEnabled = true;
    context_3_m.imageSmoothingQuality = "high";

    const canvasWidth = canvas_3_m.width;
    const canvasHeight = canvas_3_m.height;

    const imageWidth = 350;
    const imageHeight = 600;

    // Calculate the position to center the image
    const centerX = (canvasWidth - imageWidth) / 2;
    const centerY = (canvasHeight - imageHeight) / 2;

    // Draw the image centered in the canvas
    context_3_m.drawImage(img_3_m, centerX, centerY, imageWidth, imageHeight);

    // // Set border properties
    // context_3_m.lineWidth = 50; // Border thickness
    // context_3_m.strokeStyle = "#183457"; // Border color

    // Draw border around the image
    // context_3_m.strokeRect(centerX, centerY, imageWidth, imageHeight);

    frames_3_m.currentIndex_3 = index;
  }
}

function startAnimation_3_m() {
  tl_TS_Product_M_3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".uniq-TS-product-image-m-3 ",
      start: "top 25%",
      end: "top 0%",
      scrub: 1,
      // markers: true
    },
  });

  tl_TS_Product_M_3.to(frames_3_m, {
    currentIndex_3: frames_3_m.maxIndex_3,
    onUpdate: function () {
      loadImage_3_m(Math.floor(frames_3_m.currentIndex_3));
    },
  });
}

preloadImages_3_m();
