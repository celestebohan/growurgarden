var us = document.getElementById("us");
var canada = document.getElementById("canada");
var mexico = document.getElementById("mexico");
var china = document.getElementById("china");
var southafrica = document.getElementById("southafrica");
var algeria = document.getElementById("algeria");
var thailand = document.getElementById("thailand");
var australia = document.getElementById("australia");
var greece = document.getElementById("greece");
var netherlands = document.getElementById("netherlands");
var russia = document.getElementById("russia");

var imgArray = [us, canada, mexico, china, southafrica, algeria, thailand, australia, greece, netherlands, russia];
function showImg(img) {
  for (i = 0; i < imgArray.length; i++) {
    imgArray[i].style.display = "none";
  }
  img.style.display = "block";
}


navigator.geolocation
let bin = document.querySelector('#location');
function showLocation(pos) {
  bin.innerHTML = `<h4>Your location is:<br> ${pos.coords.latitude}, ${pos.coords.longitude} </h4><h2>welcome to your garden!</h2>`
   if(pos.coords.longitude > -168 && pos.coords.longitude < -66 && pos.coords.latitude <71 && pos.coords.latitude > 24){
      

    showImg(us)

    us.classList.add('fade-in');
us.addEventListener('animationend', () => {
    us.classList.remove('fade-in');
}, { once: true });


    us.scrollIntoView({behavior: "smooth"});


 



  }; if (pos.coords.longitude > -142 && pos.coords.longitude < -55 && pos.coords.latitude <69 && pos.coords.latitude > 49){
    showImg(canada);

        canada.classList.add('fade-in');
canada.addEventListener('animationend', () => {
    canada.classList.remove('fade-in');
}, { once: true });


    canada.scrollIntoView({behavior: "smooth"});



  }; if (pos.coords.longitude > -144 && pos.coords.longitude < -94 && pos.coords.latitude <26 && pos.coords.latitude > 15){
    showImg(mexico);


        mexico.classList.add('fade-in');
mexico.addEventListener('animationend', () => {
    mexico.classList.remove('fade-in');
}, { once: true });

    mexico.scrollIntoView({behavior: "smooth"});
  }; if (pos.coords.longitude > 76 && pos.coords.longitude < 121 && pos.coords.latitude <42 && pos.coords.latitude > 22){
    showImg(china);

        china.classList.add('fade-in');
china.addEventListener('animationend', () => {
    china.classList.remove('fade-in');
}, { once: true });

    china.scrollIntoView({behavior: "smooth"});
  };if (pos.coords.longitude > 17 && pos.coords.longitude < 32 && pos.coords.latitude <-25 && pos.coords.latitude > -34){
    showImg(southafrica);

        southafrica.classList.add('fade-in');
southafrica.addEventListener('animationend', () => {
    southafrica.classList.remove('fade-in');
}, { once: true });

    southafrica.scrollIntoView({behavior: "smooth"});
  };if (pos.coords.longitude > -8 && pos.coords.longitude < 12 && pos.coords.latitude <36 && pos.coords.latitude > 19){
    showImg(algeria);

        algeria.classList.add('fade-in');
algeria.addEventListener('animationend', () => {
    algeria.classList.remove('fade-in');
}, { once: true });

    algeria.scrollIntoView({behavior: "smooth"});
 };if (pos.coords.longitude > 97 && pos.coords.longitude < 105 && pos.coords.latitude <20 && pos.coords.latitude > 12){
    showImg(thailand);

        thailand.classList.add('fade-in');
thailand.addEventListener('animationend', () => {
    thailand.classList.remove('fade-in');
}, { once: true });

    thailand.scrollIntoView({behavior: "smooth"});
 };if (pos.coords.longitude > 114 && pos.coords.longitude < 153 && pos.coords.latitude <-11 && pos.coords.latitude > -38){
    showImg(australia);

        australia.classList.add('fade-in');
australia.addEventListener('animationend', () => {
    australia.classList.remove('fade-in');
}, { once: true });

    australia.scrollIntoView({behavior: "smooth"});
 };if (pos.coords.longitude > 19 && pos.coords.longitude < 24 && pos.coords.latitude <40 && pos.coords.latitude > 36){
    showImg(greece);

        greece.classList.add('fade-in');
greece.addEventListener('animationend', () => {
    greece.classList.remove('fade-in');
}, { once: true });

    greece.scrollIntoView({behavior: "smooth"});
 };if (pos.coords.longitude > 3 && pos.coords.longitude < 7 && pos.coords.latitude <53 && pos.coords.latitude > 51){
    showImg(netherlands);

        netherlands.classList.add('fade-in');
netherlands.addEventListener('animationend', () => {
    netherlands.classList.remove('fade-in');
}, { once: true });

    netherlands.scrollIntoView({behavior: "smooth"});
 };if (pos.coords.longitude > 28 && pos.coords.longitude < -171 && pos.coords.latitude <76 && pos.coords.latitude > 50){
    showImg(russia);

        russia.classList.add('fade-in');
russia.addEventListener('animationend', () => {
    russia.classList.remove('fade-in');
}, { once: true });

    russia.scrollIntoView({behavior: "smooth"});
 };

};
function showError(error) {
    bin.innerHTML = error.message;
}
let input = document.querySelector('#request-location');
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
  navigator.geolocation.getCurrentPosition(showLocation, showError);
  // document.getElementById("h2").scrollIntoView();;
  // document.getElementById('us').scrollIntoView();
  // if(`${pos.coords.latitude}, ${pos.coords.longitude}` == '37.0902° N, 95.7129° W'){
 


}

});




// right -66 -55 -94 121

// left -168 -142 -144 76

// top 71 69 26 42 

// bottom 24 49 15 22