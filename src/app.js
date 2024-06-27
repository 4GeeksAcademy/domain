/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
function generate(ending) {
  let domain =
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)];
  return (domain = domain + ending);
}
const elem = document.getElementById("com");
elem.innerHTML = generate(".com");
const elem1 = document.getElementById("net");
elem1.innerHTML = generate(".net");
const elem2 = document.getElementById("org");
elem2.innerHTML = generate(".org");
