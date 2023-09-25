const button = document.getElementById('cartBtn');
const body = document.body;
// let cartFill = "";
let cartFill = document.getElementById("cartfill");
// console.log(typeof(cartFill));
let cartEmpty = document.getElementById("cartempty");
let badge = document.getElementById('badge')
let thumbnailBtn = document.getElementsByClassName("thumbnailBtn");

// Function to handle the button click event
function openCart(){    
    if(cartFill === ""){
        cartEmpty.style.visibility = "visible";
        cartFill.style.visibility = "hidden";
    } else{
        cartFill.style.visibility = "visible";
        cartEmpty.style.visibility = "hidden";
        badge.style.visibility = "visible";

    }
}

// Function to handle clicks outside the button
function handleOutsideClick(event) {
  if (event.target !== button) {
        cartEmpty.style.visibility = "hidden";
        cartFill.style.visibility = "hidden";
  }
}

// eventListerner to handle when the button is clicked.
button.addEventListener('click', openCart);

// eventListener to capture clicks outside the button
body.addEventListener('click', handleOutsideClick);

// eventListener to prevent clicks inside the button from triggering the outside click event
button.addEventListener('click', function (event) {
  event.stopPropagation();
});

let biggerImg1 = document.getElementById("defaultImg");
let lightBx = document.getElementById("lightbx");
let bodyOverlay = document.getElementById("bodyoverlay");
function clickBiggerImg(){
    lightBx.style.visibility = "visible";
    bodyOverlay.style.visibility = "visible";
}
// Function to handle clicks outside the button
function handleOutsideImgClick(event) {
    if (event.target !== biggerImg1) {
        lightBx.style.visibility = "hidden";
        bodyOverlay.style.visibility = "hidden";
        
    }
  }
biggerImg1.addEventListener("click", clickBiggerImg);
body.addEventListener('click', handleOutsideImgClick);
button.addEventListener('click', function (event) {
  event.stopPropagation();
});


function thumbnailCheck(){
    
    let imgCover = document.getElementsByClassName("img-cover");
    imgCover.style.visibility = "visible";
}

thumbnailBtn.addEventListener("click", thumbnailCheck);


//Switching the thumbnail images
let buton1 = document.getElementById("button1");
let buton2 = document.getElementById("button2");
let buton3 = document.getElementById("button3");
let buton4 = document.getElementById("button4");

let defaultImg1 = document.getElementById("defaultImg1");
let defaultImg2 = document.getElementById("defaultImg2");
let defaultImg3 = document.getElementById("defaultImg3");
let defaultImg4 = document.getElementById("defaultImg4");

function switchDefaultImg(imageId) {
  const defaultImgs = document.querySelectorAll('.main-img img');

  defaultImgs.forEach((img) => {
    img.style.visibility = img.id === imageId ? 'visible' : 'hidden';
  });
}