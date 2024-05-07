// select dom
let mainImg = document.getElementById("mainImg");
let images = document.querySelectorAll("section > img");

// function
function changeImg() {
  let newSrc = this.getAttribute("src");
  mainImg.setAttribute("src", newSrc);
}

// event
for (const image of images) {
  image.addEventListener("click", changeImg);
}
