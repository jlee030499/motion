var moving;
let body = document.getElementById("body");

var movingParts = [{
  "color" : "eee",
  "img": "yoshi.gif",
  "horSpeed": 40,
  "xDirection": 1,
  "back":"url('mar.jpg')"
},
  {"color" : "eee",
  "img": "bulb.gif",
  "horSpeed": 5,
  "xDirection": 1,
  "back":"url('grass.jpg')"
}
];

document.addEventListener("DOMContentLoaded", function(event){

  moving = document.getElementsByTagName("body")[0];


  for (var i = 0; i < movingParts.length; i++){
    createElement(movingParts[i]);
  }

  window.setInterval(movingStuff, 100);
});

let actualGif = document.createElement("img");
actualGif.src = movingParts[0]["img"];


body.style.backgroundImage = movingParts[0]["back"];

function createElement(incomingJSON){


  actualGif.classList.add("somethingThatRuns");
  actualGif.style.left =  "-400px";
  actualGif.style.top =(window.innerHeight / 3 )+ "px";


  moving.appendChild(actualGif);

}




function movingStuff(){

  var movingStuff = document.getElementsByClassName("somethingThatRuns");

  for (var i = 0; i < movingStuff.length; i++){

    var oldLeft = parseInt(movingStuff[i].style.left);

    if (oldLeft > window.innerWidth){
      movingParts[i]["xDirection"] = -1;
      oldLeft = window.innerWidth;
      actualGif.src= movingParts[1]["img"];
      body.style.backgroundImage = movingParts[1]["back"];
    }
    if (oldLeft < -200){
      movingParts[i]["xDirection"] = 1;
      oldLeft = 0;
      actualGif.src = movingParts[0]["img"];
      body.style.backgroundImage = movingParts[0]["back"];


    }

    var newLeft = oldLeft + (movingParts[i]["horSpeed"] * movingParts[i]["xDirection"]);
    movingStuff[i].style.left = newLeft + 'px';

  }
}
