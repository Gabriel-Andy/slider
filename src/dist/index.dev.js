"use strict";

require("./slider.scss");

var _slider2 = require("./slider.js");

var _app = require("./app.js");

(0, _slider2.styleText)();
var bannerTimer = 1000;
var activeBanner = setInterval(function () {
  (0, _app.bannerLoop)();
}, bannerTimer);

document.getElementById("main-banner").onmouseenter = function () {
  clearInterval(activeBanner);
};

document.getElementById("main-banner").onmouseleave = function () {
  activeBanner = setInterval(function () {
    (0, _app.bannerLoop)();
  }, bannerTimer);
};

document.getElementById("imgbtn-next").addEventListener("click", function () {
  (0, _app.bannerLoop)();
});
document.getElementById("imgbtn-prev").addEventListener("click", function () {
  if (bannerStatus === 1) {
    bannerStatus = 2;
  } else if (bannerStatus === 2) {
    bannerStatus = 3;
  } else if (bannerStatus === 3) {
    bannerStatus = 1;
  }

  (0, _slider2.bannerLoop2)();
});
console.log("hey");
console.log("hi gabriel");
console.log("yooooo");