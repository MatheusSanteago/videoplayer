
var video = document.getElementById('video');
let spanVideo = document.getElementById('speed');
let divControls = document.getElementById('controls');
let container = document.getElementById('container');
let slider = document.getElementById('progress');

video.ontimeupdate = getTime;    
slider.onchange = getSliderTime;


function getTime() {
    let tempo = (video.currentTime);
    slider.value = tempo;
    spanVideo.innerHTML = Math.ceil(tempo);
    console.log(slider);
}
function getSliderTime() {
    video.currentTime = slider.value
}
function videoSet(){
    var inputSRC = document.getElementById('videosrc').value;
    video.setAttribute("src",inputSRC);
}

function hideControls(){
    divControls.style.visibility = "hidden";
}
function showControls(){
    divControls.style.visibility = "visible";
}
addEventListener('mouseout',hideControls);
addEventListener('mouseover',showControls);

function rewind() {
    video.currentTime -= 15;
}
function play(){
    video.play();
}
function pause() {
    video.pause();
}
function skip() {
    video.currentTime += 15;
}
function sound(){

}
function speedUp(){
    let a = video.playbackRate += 0.5;
    if (a > 4) {
        alert('Limite de velocidade alcançado');
        video.currentTime = 0;
    } else {
        spanVideo.innerHTML = a + "x";
    }
}
function speedDown(){
    let a = video.playbackRate -= 0.5;
    if (a <= 0){
        video.playbackRate = 1;
        alert('O vídeo precisa ter velocidade para ser vizualizado');
    } else {
        spanVideo.innerHTML = a + "x"; 
    }
    console.log(a);
}