navigator.geolocation
let bin = document.querySelector('#location');
function showLocation(pos) {
  bin.innerHTML = `Your location is: ${pos.coords.latitude}, ${pos.coords.longitude} <br><h2>here is your garden!</h2>`
}
function showError(error) {
    bin.innerHTML = error.message;
}
let button = document.querySelector('#request-location');
button.addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(showLocation, showError);
  console.log(showLocation);
});