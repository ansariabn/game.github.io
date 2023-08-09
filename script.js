
var images = [
  'Symbol 100001.png',
  'Symbol 100002.png',
  'Symbol 100003.png',
  'Symbol 100004.png',
  'Symbol 100005.png',
  'Symbol 100006.png',
  'Symbol 100007.png',
  'Symbol 100008.png',
  'Symbol 100009.png',
  'Symbol 100010.png',
  
]
var images2 = [
  'Symbol 100011.png',
]

let slider = document.querySelector(".right-1")
let randomBalloon = document.querySelector("#balloon");

function rdBallon(num){
  var num = Math.floor(Math.random()*10);
  console.log(num)
  let bs = randomBalloon.style.backgroundImage = 'url("' + images[num] + '")';
  console.log(bs)
  
}
slider.addEventListener("click", () => {
    document.querySelector(".right-1").classList.toggle("right-2");
    
});
const balloon = document.getElementById("balloon");
let isFlying = false;

// Function to inflate the balloon
function inflateBalloon() {
  if (!isFlying) {
    balloon.style.display = "block";
    let size = 0;
    const inflateInterval = setInterval(() => {
      size += 3;
      balloon.style.width = size + "px";
      balloon.style.height = (size * 1) + "px";
      if (size >= 90) {
        clearInterval(inflateInterval);
        isFlying = true;
        startFlying();
      }
    }, 50);
  }
}

// Function to make the balloon fly in random directions
function startFlying() {
  let containerWidth = document.querySelector(".container");
  let containerHeight = document.querySelector(".container");
  let flightInterval = 1;
  flightInterval = setInterval(() => {
    let randomX = Math.random() * (containerWidth +10 * 10);
    console.log(randomX);
    balloon.style.left = randomX + "px";
    
  }, 50);
}

// Function to burst the balloon on tap
function burstBalloon() {
  if (isFlying) {
    isFlying = false;
    balloon.style.display = "none";
    balloon.style.width = "5px";
    balloon.style.height = "10px";
  }
}

// Add event listeners
slider.addEventListener("click", inflateBalloon);
balloon.addEventListener("click", burstBalloon);
slider.addEventListener("click", burstBalloon);
slider.addEventListener("click", rdBallon);
