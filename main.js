let usflowers = "./images/usflowers.png";



navigator.geolocation
let bin = document.querySelector('#location');
function showLocation(pos) {
  bin.innerHTML = `Your location is: ${pos.coords.latitude}, ${pos.coords.longitude} <br><h2>here is your garden!</h2>`
}
function showError(error) {
    bin.innerHTML = error.message;
}
let input = document.querySelector('#request-location');
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
  navigator.geolocation.getCurrentPosition(showLocation, showError);
  let flowers = document.createElement("img");
flowers.src = usflowers;}

});

