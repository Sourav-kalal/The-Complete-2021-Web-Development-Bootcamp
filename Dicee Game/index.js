let rand1 = Math.random();
let rand2 = Math.random();
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var heading = document.querySelector("h1");
var flag = '<img src="images/flag.png" class="win-flag" alt="flag">';
rand1 = Math.floor(rand1 * 6 + 1);
rand2 = Math.floor(rand2 * 6 + 1);

img1.setAttribute("src", "images/dice" + rand1 + ".png");
img2.setAttribute("src", "images/dice" + rand2 + ".png");

console.log(img1);

if (rand1 > rand2) {
  heading.innerHTML = "Player 1 wins" + flag;
} else if (rand1 < rand2) {
  heading.innerHTML = "Player 2 wins" + flag;
} else {
  heading.innerHTML = "Draw !!!";
}
