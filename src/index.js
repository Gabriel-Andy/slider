import "./slider.scss"
import { bannerLoop2 } from "./slider.js";
import { styleText } from "./slider.js";
import { bannerLoop } from "./app.js";
styleText();
var bannerTimer = 1000;
var activeBanner = setInterval(function(){
    bannerLoop()
}, bannerTimer);

document.getElementById("main-banner").onmouseenter =function(){
  clearInterval(activeBanner);
};
document.getElementById("main-banner").onmouseleave = function(){
  activeBanner = setInterval(function () {
    bannerLoop();
  }, bannerTimer);
};
document.getElementById("imgbtn-next").addEventListener("click",  function() {
  bannerLoop();
});

document.getElementById("imgbtn-prev").addEventListener("click",function(){
  if (bannerStatus === 1) {
    bannerStatus = 2;
  } else if (bannerStatus === 2) {
    bannerStatus = 3;
  } else if (bannerStatus === 3) {
    bannerStatus = 1;
  }
  bannerLoop2();
});
console.log("hey")
console.log("hi gabriel");
console.log("yooooo");

