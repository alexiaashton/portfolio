"use strict";

$(function () {
  $("#nav-bar").load("nav.html");
});

document
  .querySelector(".timeline-units")
  .addEventListener("mouseover", function () {
    document.getElementById("1988").innerHTML = "hahahah";
  });
