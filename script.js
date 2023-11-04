"use strict";

const imgEl = document.querySelectorAll("img");

const displayFullView = function (e) {
  e.target.classList.toggle("activate__fullview");
};

imgEl.forEach((img) => img.addEventListener("click", displayFullView));
