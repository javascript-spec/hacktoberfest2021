"use strict";

const circles = document.querySelectorAll('[id^="circle-"]');
const values = {
  first: 90,
  second: 75,
  third: 50,
};

window.addEventListener("load", function (e) {
  circles.forEach((element) => {
    const name = element.id.replace("circle-", "");
    let progress = 0;
    const inv = this.setInterval(function (e) {
      if (progress <= values[name]) {
        element.style.strokeDashoffset = 188 - (progress / 100) * 188;
        progress += 5;
      } else {
        this.clearInterval(inv);
      }
    }, 80);
  });
});
