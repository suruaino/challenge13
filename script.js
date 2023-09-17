const button = document.getElementById('cartBtn');
const body = document.body;
// let cartFill = "";
  let cartFill = document.getElementById("cartfill");
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

// Add a click event listener to the document body to capture clicks outside the button
body.addEventListener('click', handleOutsideClick);

// Prevent clicks inside the button from triggering the outside click event
button.addEventListener('click', function (event) {
  event.stopPropagation();
});

let biggerImg = document.getElementById("defaultImg");
let lightBx = document.getElementById("lightbx");
let bodyOverlay = document.getElementById("bodyoverlay");
function clickBiggerImg(){
    lightBx.style.visibility = "visible";
    bodyOverlay.style.visibility = "visible";
}
// Function to handle clicks outside the button
function handleOutsideImgClick(event) {
    if (event.target !== biggerImg) {
        lightBx.style.visibility = "hidden";
        bodyOverlay.style.visibility = "hidden";
        
    }
  }
biggerImg.addEventListener("click", clickBiggerImg);
body.addEventListener('click', handleOutsideImgClick);
button.addEventListener('click', function (event) {
  event.stopPropagation();
});


function thumbnailCheck(){
    
    let imgCover = document.getElementsByClassName("img-cover");
    imgCover.style.visibility = "visible";
}

thumbnailBtn.addEventListener("click", thumbnailCheck);