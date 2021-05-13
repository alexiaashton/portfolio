"use strict";

document
  .querySelector(".timeline-units")
  .addEventListener("mouseover", function () {
    document.getElementById("1988").innerHTML = "hahahah";
  });

document
  .querySelector(".timeline-units")
  .addEventListener("mouseout", function () {
    document.getElementById("1988").innerHTML = "1988";
  });
