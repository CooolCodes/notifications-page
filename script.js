"use strict";

//Defining elements
const notifications = document.querySelectorAll(".notifi");
const counter = document.querySelector(".unread");
const readAll = document.querySelector(".mark-all");
const redDot = document.querySelectorAll(".dot");

//Defining Variables
let unread = 3;

console.log(unread);

// active notification functionality
notifications.forEach((notifi) => {
  notifi.addEventListener("click", () => {
    // loop over all boxes
    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i] === notifi) {
        notifi.classList.toggle("active");
        redDot[i].classList.toggle("dot");
      }
    }
    if (notifi.classList.contains("active")) {
      unread -= 1;
    } else {
      unread += 1;
      //redDot[k].style.display = "none";
    }
    counter.textContent = unread;
  });
});

readAll.addEventListener("click", () => {
  unread = 0;
  counter.textContent = unread;
  for (let j = 0; j < notifications.length; j++) {
    notifications[j].classList.add("active");
    redDot[j].style.display = "none";
  }
});
