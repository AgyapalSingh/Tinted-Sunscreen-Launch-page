document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    document.querySelector(".loader-container").style.display = "none";
    document.querySelector(".uniq-TS-launch-page-container-m").style.display =
      "block";
  } else {
    document.querySelector(".loader-container").style.display = "block";
    document.querySelector(".uniq-TS-launch-page-container-m").style.display =
      "none";
  }
};

// Mobile     ===================================================================================================================================================

var tl_TS_Product_M = gsap.timeline();
var tl_TS_Product_M_2 = gsap.timeline();
var tl_TS_Product_M_3 = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

const canvas_1_m = document.querySelector("#uniq-TS-frame_1_m");
const context_1_m = canvas_1_m.getContext("2d");
const frames_1_m = {
  currentIndex_1: 0,
  maxIndex_1: 90,
};

let imagesLoaded_1_m = 0;
const images_1_m = [];
function preloadImages_1_m() {
  for (let i = 0; i < frames_1_m.maxIndex_1; i++) {
    const imageUrl_1_m = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/TintedSunscreen${i
      .toString()
      .padStart(4, "0")}.png?v=1744020408`;
    const img_1_m = new Image();
    img_1_m.src = imageUrl_1_m;
    img_1_m.onload = () => {
      imagesLoaded_1_m++;
      if (imagesLoaded_1_m === frames_1_m.maxIndex_1) {
        loadImage_1_m(frames_1_m.currentIndex_1);
        startAnimation_m();
      }
    };
    images_1_m.push(img_1_m);
  }
}

function loadImage_1_m(index) {
  if (index >= 0 && index < frames_1_m.maxIndex_1) {
    const img_1_m = images_1_m[index];
    if (!img_1_m.complete) {
      img_1_m.onload = () => drawImageOnCanvas_1(img_1_m);
      return;
    }
    drawImageOnCanvas_1(img_1_m);
    frames_1_m.currentIndex_1 = index;
  }
}

function drawImageOnCanvas_1(img_1_m) {
  const isMobile = window.innerWidth <= 768;
  const devicePixelRatio = window.devicePixelRatio || 1;
  const canvasWidth = isMobile ? window.innerWidth : window.innerWidth / 2.5;
  canvas_1_m.width = canvasWidth * devicePixelRatio;
  canvas_1_m.height = canvas_1_m.width;
  canvas_1_m.style.width = `${canvasWidth}px`;
  canvas_1_m.style.height = `${canvasWidth}px`;
  context_1_m.imageSmoothingEnabled = true;
  context_1_m.imageSmoothingQuality = "high";
  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
  tempCanvas.width = img_1_m.width * 2;
  tempCanvas.height = img_1_m.height * 2;
  tempCtx.drawImage(img_1_m, 0, 0, tempCanvas.width, tempCanvas.height);
  const scale = Math.min(
    canvas_1_m.width / tempCanvas.width,
    canvas_1_m.height / tempCanvas.height
  );
  const imageWidth_1 = tempCanvas.width * scale;
  const imageHeight_1 = tempCanvas.height * scale;
  const centerX_1 = (canvas_1_m.width - imageWidth_1) / 2;
  const centerY_1 = (canvas_1_m.height - imageHeight_1) / 2;
  context_1_m.drawImage(
    tempCanvas,
    centerX_1,
    centerY_1,
    imageWidth_1,
    imageHeight_1
  );
}

window.addEventListener("resize", () => {
  loadImage_1_m(frames_1_m.currentIndex_1);
});

function startAnimation_m() {
  gsap.matchMedia().add(
    {
      isMobile: "(max-width: 768px)",
      isDesktop: "(min-width: 769px)",
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;
      tl_TS_Product_M = gsap.timeline({
        scrollTrigger: {
          trigger: "#uniq-TS-frame_1_m",
          start: isMobile ? "top 45%" : "top 20%",
          end: isMobile ? "top -25%" : "top -45%",
          scrub: 1,
        },
      });
      tl_TS_Product_M.to(frames_1_m, {
        currentIndex_1: frames_1_m.maxIndex_1,
        onUpdate: function () {
          loadImage_1_m(Math.round(frames_1_m.currentIndex_1));
        },
      });
    }
  );
}

preloadImages_1_m();

// CANVAS 2 ****************************************************************************************************************************************************************

const canvas_2_m = document.querySelector("#uniq-TS-frame_2_m");
const context_2_m = canvas_2_m.getContext("2d");
const frames_2_m = {
  currentIndex_2: 0,
  maxIndex_2: 50,
};
let imagesLoaded_2_m = 0;
const images_2_m = [];
function preloadImages_2_m() {
  for (var i = 0; i < frames_2_m.maxIndex_2; i++) {
    const imageUrl_2_m = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/ID${i
      .toString()
      .padStart(3, "0")}.png?v=1743755669`;
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
    if (!img_2_m.complete) {
      img_2_m.onload = () => drawImageOnCanvas_2(img_2_m);
      return;
    }
    drawImageOnCanvas_2(img_2_m);
    frames_2_m.currentIndex_2 = index;
  }
}

function drawImageOnCanvas_2(img_2_m) {
  const isMobile = window.innerWidth <= 768;
  const devicePixelRatio_2 = window.devicePixelRatio || 1;
  const canvasWidth_2 = isMobile ? window.innerWidth : window.innerWidth / 2.5;
  canvas_2_m.width = canvasWidth_2 * devicePixelRatio_2;
  canvas_2_m.height = canvas_2_m.width;
  canvas_2_m.style.width = `${canvasWidth_2}px`;
  canvas_2_m.style.height = `${canvasWidth_2}px`;
  context_2_m.imageSmoothingEnabled = true;
  context_2_m.imageSmoothingQuality = "high";
  const tempCanvas_2 = document.createElement("canvas");
  const tempCtx_2 = tempCanvas_2.getContext("2d");
  tempCanvas_2.width = img_2_m.width * 2;
  tempCanvas_2.height = img_2_m.height * 2;
  tempCtx_2.drawImage(img_2_m, 0, 0, tempCanvas_2.width, tempCanvas_2.height);
  const scale_2 = Math.min(
    canvas_2_m.width / tempCanvas_2.width,
    canvas_2_m.height / tempCanvas_2.height
  );
  const imageWidth_2 = tempCanvas_2.width * scale_2;
  const imageHeight_2 = tempCanvas_2.height * scale_2;
  const centerX_2 = (canvas_2_m.width - imageWidth_2) / 2;
  const centerY_2 = (canvas_2_m.height - imageHeight_2) / 2;
  context_2_m.drawImage(
    tempCanvas_2,
    centerX_2,
    centerY_2,
    imageWidth_2,
    imageHeight_2
  );
}

window.addEventListener("resize", () => {
  loadImage_2_m(frames_2_m.currentIndex_2);
});
function startAnimation_2_m() {
  gsap.matchMedia().add(
    {
      isMobile: "(max-width: 768px)",
      isDesktop: "(min-width: 769px)",
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;
      tl_TS_Product_M_2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#uniq-TS-frame_2_m",
          start: isMobile ? "top 45%" : "top 30%",
          end: isMobile ? "top 0%" : "top 0%",
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
  );
}

preloadImages_2_m();

if (window.matchMedia("(max-width: 767px)").matches) {
  gsap.to("#uniq-TS-frame_2_m", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".uniq-TS-product-container-m-2",
      start: "top 55%",
      end: "top 50%",
      scrub: 1,
    },
  });
} else {
  gsap.to("#uniq-TS-frame_2_m", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".uniq-TS-product-container-m-2",
      start: "top 40%",
      end: "top 30%",
      scrub: 1,
    },
  });
}

// CANVAS 3  ****************************************************************************************************************************************************************

const canvas_3_m = document.querySelector("#uniq-TS-frame_3_m");
const context_3_m = canvas_3_m.getContext("2d");
const frames_3_m = {
  currentIndex_3: 0,
  maxIndex_3: 50,
};
let imagesLoaded_3_m = 0;
const images_3_m = new Array(frames_3_m.maxIndex_3).fill(null);
function preloadImages_3_m() {
  for (let i = 0; i < frames_3_m.maxIndex_3; i++) {
    const imageUrl_3_m = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/BB${i
      .toString()
      .padStart(3, "0")}.png?v=1743756831`;
    const img_3_m = new Image();
    img_3_m.src = imageUrl_3_m;
    img_3_m.onload = () => {
      images_3_m[i] = img_3_m;
      imagesLoaded_3_m++;
      if (imagesLoaded_3_m === frames_3_m.maxIndex_3) {
        loadImage_3_m(frames_3_m.currentIndex_3);
        startAnimation_3_m();
      }
    };
    img_3_m.onerror = () => {
      console.error(`Image failed to load: ${imageUrl_3_m}`);
    };
  }
}

function loadImage_3_m(index) {
  if (index >= 0 && index < frames_3_m.maxIndex_3) {
    const img_3_m = images_3_m[index];
    if (!img_3_m || !img_3_m.complete) {
      console.warn(`Image at index ${index} is not ready yet.`);
      return;
    }
    drawImageOnCanvas_3(img_3_m);
    frames_3_m.currentIndex_3 = index;
  }
}
function drawImageOnCanvas_3(img_3_m) {
  const isMobile = window.innerWidth <= 768;
  const devicePixelRatio_3 = window.devicePixelRatio || 1;
  const canvasWidth_3 = isMobile ? window.innerWidth : window.innerWidth / 2.5;
  canvas_3_m.width = canvasWidth_3 * devicePixelRatio_3;
  canvas_3_m.height = canvas_3_m.width;
  canvas_3_m.style.width = `${canvasWidth_3}px`;
  canvas_3_m.style.height = `${canvasWidth_3}px`;
  context_3_m.imageSmoothingEnabled = true;
  context_3_m.imageSmoothingQuality = "high";
  const tempCanvas_3 = document.createElement("canvas");
  const tempCtx_3 = tempCanvas_3.getContext("2d");
  tempCanvas_3.width = img_3_m.width * 2;
  tempCanvas_3.height = img_3_m.height * 2;
  tempCtx_3.drawImage(img_3_m, 0, 0, tempCanvas_3.width, tempCanvas_3.height);
  const scale_3 = Math.min(
    canvas_3_m.width / tempCanvas_3.width,
    canvas_3_m.height / tempCanvas_3.height
  );
  const imageWidth_3 = tempCanvas_3.width * scale_3;
  const imageHeight_3 = tempCanvas_3.height * scale_3;
  const centerX_3 = (canvas_3_m.width - imageWidth_3) / 2;
  const centerY_3 = (canvas_3_m.height - imageHeight_3) / 2;
  context_3_m.drawImage(
    tempCanvas_3,
    centerX_3,
    centerY_3,
    imageWidth_3,
    imageHeight_3
  );
}

window.addEventListener("resize", () => {
  loadImage_3_m(frames_3_m.currentIndex_3);
});

function startAnimation_3_m() {
  gsap.matchMedia().add(
    {
      isMobile: "(max-width: 768px)",
      isDesktop: "(min-width: 769px)",
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;
      tl_TS_Product_M_3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#uniq-TS-frame_3_m",
          start: isMobile ? "top 45%" : "top 30%",
          end: isMobile ? "top 0%" : "top 0%",
          scrub: 1,
        },
      });
      tl_TS_Product_M_3.to(frames_3_m, {
        currentIndex_3: frames_3_m.maxIndex_3,
        onUpdate: function () {
          loadImage_3_m(Math.floor(frames_3_m.currentIndex_3));
        },
      });
    }
  );
}

preloadImages_3_m();

if (window.matchMedia("(max-width: 767px)").matches) {
  gsap.to("#uniq-TS-frame_3_m", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".uniq-TS-product-container-m-3",
      start: "top 55%",
      end: "top 50%",
      scrub: 1,
    },
  });
} else {
  gsap.to("#uniq-TS-frame_3_m", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".uniq-TS-product-container-m-3",
      start: "top 40%",
      end: "top 30%",
      scrub: 1,
    },
  });
}

new Swiper(".product-card-wrapper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Benefits List Ani

gsap.from(".uniq-TS-benefits-list li", {
  y: 10,
  duration: 0.5,
  opacity: 0,
  delay: -1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".uniq-TS-benefits-list",
    start: "top 75%",
    end: "top 55%",
    scrub: 1,
  },
});

// Canvas -  Benefits List Ani

gsap.from(".uniq-TS-canvas-benefits-list li", {
  y: 10,
  duration: 0.5,
  opacity: 0,
  delay: -1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".uniq-TS-product-container-m",
    start: "top -75%",
    end: "top -95%",
    scrub: 1,
  },
});

// Explore
gsap.to(".explore", {
  opacity: 0,
  zIndex: -1,
  scrollTrigger: {
    trigger: ".uniq-TS-title-m",
    start: "top 0%",
    end: "top -20%",
    scrub: 1,
  },
});

// Order-Button

var tl_order = gsap.timeline();

tl_order
  .from(".pre-order", {
    opacity: 0,
    zIndex: -1,
    scrollTrigger: {
      trigger: ".uniq-TS-product-ingredients",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  })
  .to(".pre-order", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".uniq-TS-product-result",
      start: "top 58%",
      end: "top 55%",
      scrub: 1,
      immediateRender: false,
      toggleActions: "play none none reverse",
    },
  });

// Canvas 2 -  Benefits List Ani

gsap.matchMedia().add(
  {
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 769px)",
  },
  (context) => {
    let { isDesktop, isMobile } = context.conditions;
    gsap.from(".uniq-ani2-benefits-list li", {
      y: 10,
      duration: 0.5,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".uniq-ani2-benefits-list",
        start: isDesktop ? "top 70%" : "top 50%",
        end: isDesktop ? "top 50%" : "top 35%",
        scrub: 1,
      },
    });
  }
);

// Canvas 3 -  Benefits List Ani

gsap.matchMedia().add(
  {
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 769px)",
  },
  (context) => {
    let { isDesktop, isMobile } = context.conditions;

    gsap.from(".uniq-ani3-benefits-list li", {
      y: 10,
      duration: 0.5,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".uniq-ani3-benefits-list",
        start: isDesktop ? "top 70%" : "top 50%",
        end: isDesktop ? "top 50%" : "top 35%",
        scrub: 1,
      },
    });
  }
);
