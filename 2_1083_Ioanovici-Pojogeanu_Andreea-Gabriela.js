"use strict";

//initializam butoanele de pe player

document.addEventListener("DOMContentLoaded", function() { initialisePlayerVideo(); }, false);
var PlayerVideo;
var player;
let effect = "normal";
function initialisePlayerVideo() {
    PlayerVideo = document.getElementById('video2');
    PlayerVideo.controls = false;
    player=document.querySelector('player')

 }

function Playy() {
    var btn = document.getElementById('play');
    if (PlayerVideo.paused || PlayerVideo.ended) {
      PlayerVideo.play();
   }
}

//creem lista cu videoclipurile necesare
var vectMel = ["1.mp4","2.mp4","3.mp4","4.mp4"];

let i=-1;
function next() {
  PlayerVideo.pause();
  PlayerVideo.currentTime=0;
  if(i==3){
    i=-1;
  }
  else{
    i++;
    }

  PlayerVideo.src = vectMel[i+1];
PlayerVideo.play();
 }

let j=0;
 function prev() {
  PlayerVideo.pause();
  PlayerVideo.currentTime=0;
  if(j==0){
    j=4;
  }else{
  j--;
  }
  PlayerVideo.src = vectMel[j-1];
PlayerVideo.play();
 }

  function Pausee() {
   var btn = document.getElementById('pause');
   if (PlayerVideo.play) {
      PlayerVideo.pause();
    }
}


 function stop() {
    PlayerVideo.pause();
    PlayerVideo.currentTime = 0;
 }

 function UnMute() {
    var btn = document.getElementById('unmute');
    if (PlayerVideo.muted) {
       PlayerVideo.muted = false;
    }
   }

    function Mute() { 
       PlayerVideo.muted = true; 
 }

 mergi.oninput = function() 
 {
  if(PlayerVideo){
    PlayerVideo.currentTime = (PlayerVideo.duration*this.value);
    if(PlayerVideo.currentTime==PlayerVideo.duration){
    this.value=0;
    }
  
    }

}


var vectMel = ["1.mp4","2.mp4","3.mp4","4.mp4"];

//functie de afisare a videoclipurilor unul dupa altul

window.onload=function(e){
var index = 0;
var nrVideo = vectMel.length;
var video = document.getElementById("video2");

function playVideo (videoPoz) {
    document.getElementById("video2").setAttribute("src",vectMel[videoPoz]);
try{
    document.getElementById("video2").load();
    document.getElementById("video2").play();


}catch(error) {
    Error.File.NotFound;
} 
}

document.getElementById("video2").addEventListener('ended',handler,false);
playVideo(0);



function handler(){
  index++;
  if(index == nrVideo){
      index=0;
      playVideo(index);
  }else{
      playVideo(index);
  }
}
}


//implementarea functionalitatii de stergere a unui element 

function del1(){
    delete vectMel[0];
  var  n=4;
    for(i=0;i<n;i++){
    vectMel[i]=vectMel[i+1]; 
    vectMel[n]=vectMel[i+1];
}
    vectMel.length--; 
    n--;
    console.log(vectMel);
    }

    //implementarea functionalitatii de modificare ordine de redare

    function modifOrd(){
       var n=3;
        for(i=0;i<n;i++){
          var  aux=vectMel[i];
            vectMel[i]=vectMel[n-i];
           vectMel[n-i]=aux;
        }
        console.log(vectMel);
    }



