//section nav
window.onscroll = function() {myFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//btn contact us
const contactUs = document.getElementById("contactUs");
const btnC = document.getElementById("btn-c");

btnC.onclick = function () {
    contactUs.style.display = "flex";
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    contactUs.style.display = "none";
}

//section about
const learn1 = document.getElementById("learnMore1");
const learn2 = document.getElementById("learnMore2");

const btnT = document.getElementById("btn-t");
const btnS = document.getElementById("btn-s");

btnT.onclick = function () {
    learn1.style.display = "flex";
}

btnS.onclick = function () {
    learn2.style.display = "flex";
}

const span1 = document.getElementsByClassName("close1")[0];
const span2 = document.getElementsByClassName("close2")[0];

span1.onclick = function () {
    learn1.style.display = "none";
}

span2.onclick = function () {
    learn2.style.display = "none";
}

//section projects
