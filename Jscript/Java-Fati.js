document.getElementById("action").addEventListener("click",
function(){
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click",
function(){
  document.querySelector(".bg-modal").style.display = "none";
});


function iniciarMap(){
  var coord = {lat:19.641537 ,lng: -99.125969};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}
