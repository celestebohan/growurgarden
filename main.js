var img1 = document.getElementById("flower");

var imgArray = [img1];
function showImg(img) {
  for (i = 0; i < imgArray.length; i++) {
    imgArray[i].style.display = "none";
  }
  img.style.display = "block";
}


navigator.geolocation
let bin = document.querySelector('#location');
function showLocation(pos) {
  bin.innerHTML = `Your location is: ${pos.coords.latitude}, ${pos.coords.longitude} <br><h2>here is your garden!</h2>`
  if(${pos.coords.latitude}, ${pos.coords.longitude} == '37.0902° N, 95.7129° W'){
  	showImg(img1);
  }};
function showError(error) {
    bin.innerHTML = error.message;
}
let input = document.querySelector('#request-location');
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
  navigator.geolocation.getCurrentPosition(showLocation, showError);
 


}

});

