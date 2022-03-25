/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGen();
  });

  // let randomNumber = Math.random() * 10;
  // console.log("Hello Rigo from the console!" + randomNumber);
};

let excuseGen = () => {
  let one = ["god", "git", "faze", "gantry"];
  let two = ["crane", "send", "collapse", "r"];
  let three = ["me", "the", "rotate", "society"];
  let com = [".com", ".io", ".edu", ".co"];

  let oneIndex = Math.floor(Math.random() * one.length);
  let twoIndex = Math.floor(Math.random() * two.length);
  let threeIndex = Math.floor(Math.random() * three.length);
  let comIndex = Math.floor(Math.random() * com.length);

  return `${one[oneIndex]}${two[twoIndex]}${three[threeIndex]}${com[comIndex]}`;
};
