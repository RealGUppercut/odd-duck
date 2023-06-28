"use strict"

const pContainer = document.querySelector("section");
const resultButton = document.querySelector("section");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");
let clicks = 0;
const maxClicks = 25;

let pList = [];
console.log(pList)

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

  while (p1 === p2) {
    p2 = getRandomNumber();
  }
  while (p1 === p3) {
    p3 = getRandomNumber();
  }
  while (p2 === p3) {
    p3 = getRandomNumber();
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
console.log(image1)
console.log(image2)
console.log(image3)
function handlePClick(event) {
  if (event.target === pContainer) {
    alert("Please click on a product");
  } else {
    clicks++;
    console.log(clicks);
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

const bag = new Product("bag", "assets/bag.jpg")
const banana = new Product("banana", "assets/banana.jpg")
const bathroom = new Product("bathroom", "assets/bathroom.jpg")
const boots = new Product("boots","assets/boots.jpg")
const breakfast = new Product("breakfast", "assets/breakfast.jpg")
const bubblegum = new Product("bubblegum","assets/bubblegum.jpg")
const chair = new Product("chair","assets/chair.jpg")
const cthulhu = new Product("cthulhu", "assets/cthulhu.jpg")
const dogduck = new Product ("dog-duck","assets/dog-duck.jpg")
const dragon = new Product("dragon","assets/dragon.jpg")
const pen = new Product("pen","assets/pen.jpg")
const petsweep = new Product("pet-sweep","assets/pet-sweep.jpg")
const scissors = new Product("scissors","assets/scissors.jpg")
const shark = new Product("shark","assets/shark.jpg")
const sweep = new Product("sweep","assets/sweep.png")
const tauntaun = new Product("tauntaun","assets/tauntaun.jpg")
const unicorn = new Product("unicorn", "assets/unicorn.jpg")
const watercan = new Product("water-can","assets/water-can.jpg")
const wineglass = new Product("wine-glass","assets/wine-glass.jpg")



renderProducts();

pContainer.addEventListener("click", handlePClick);