"use strict"

const pContainer = document.querySelector("section");
const resultButton = document.querySelector("section + div");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
const maxClicks = 25;

let pList = [];

function getRandomNumber() {
  return Math.floor(Math.random() * pList.length);
}

function Product(name, src) {
    this.name = name,
    this.src = src,
    this.clicks = 0,
    this.views  = 0,
    pList.push(this);
}

function renderProducts() {
  let p1 = getRandomNumber();
  let p2 = getRandomNumber();
  let p3 = getRandomNumber();

  while (p1 === p2 || p3) {
    p1 = getRandomNumber();
  }

  while (p2 === p3) {
    p2 = getRandomNumber();
  }

  image1.src = pList[p1].src;
  image2.src = pList[p2].src;
  image3.src = pList[p3].src;
  image1.alt = pList[p1].name;
  image2.alt = pList[p2].name;
  image3.alt = pList[p3].name;
  pList[p1].views++;
  pList[p2].views++;
  pList[p3].views++;
}

function handlePClick(event) {
  if (event.target === pContainer) {
    alert("Please click on a product");
  } else {
    clicks++;
    // console.log(clicks);
    let clickedProduct = event.target.alt;
    for (let i = 0; i < pList.length; i++) {
      if (clickedProduct === pList[i].name) {
        pList[i].clicks++;
        break;
      }
    }
  }

  if (clicks === maxClicks) {
    pContainer.removeEventListener("click", handlePClick);
  } else {
    renderProducts();
  }
}



renderProducts();

pContainer.addEventListener("click", handlePClick);