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
  bin.innerHTML = `<h4>Your location is: ${pos.coords.latitude}, ${pos.coords.longitude} </h4><h2>welcome to your garden!</h2>`
   if(pos.coords.longitude > -168 && pos.coords.longitude < -66 && pos.coords.latitude <71 && pos.coords.latitude > 24){
  		
  	showImg(img1);
  }
 };
function showError(error) {
    bin.innerHTML = error.message;
}
let input = document.querySelector('#request-location');
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
  navigator.geolocation.getCurrentPosition(showLocation, showError);
  window.scroll(0,800);
  // document.getElementById('flower').scrollIntoView();
  // if(`${pos.coords.latitude}, ${pos.coords.longitude}` == '37.0902° N, 95.7129° W'){
 


}

});



// right -66

// left -168

// top 71

// bottom 24