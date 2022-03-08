var video = document.getElementById("video");
let spanVideo = document.getElementById("speed");
let divControls = document.getElementById("controls");
let container = document.getElementById("container");
let slider = document.getElementById("progress");


video.ontimeupdate = getTime;
slider.onchange = getSliderTime;

container.addEventListener("mouseout", hideControls);
container.addEventListener("mouseover", showControls);


function getTime() {
    let tempo = video.currentTime;
    slider.value = tempo;
    spanVideo.innerHTML = Math.ceil(tempo) + 's';
}
function getSliderTime() {
    video.currentTime = slider.value;
}
function videoSet() {
    var inputSRC = document.getElementById("videosrc").value;
    video.setAttribute("src", inputSRC);
}

function hideControls() {
    divControls.style.visibility = "hidden";
}
function showControls() {
    divControls.style.visibility = "visible";
}
function rewind() {
    video.currentTime -= 15;
}
function play() {
    video.play();
}
function pause() {
    video.pause();
}
function skip() {
    video.currentTime += 15;
}


let soundLogo = document.getElementById('sound-logo');
soundLogo.addEventListener('mouseover', sound);

function sound() {
    let verify = document.getElementById('soundbar');
    if (verify) verify.remove()
    let soundbar = document.createElement("div");
    let soundbarRange = document.createElement("input");
    divControls.appendChild(soundbar);
    soundbar.appendChild(soundbarRange);
    soundbar.setAttribute("id", "soundbar");
    soundbarRange.setAttribute("type", "range");
    soundbarRange.setAttribute("id", "volume");
    soundbarRange.setAttribute("class", "slider");
    soundbarRange.setAttribute('value', '1')
    soundbarRange.setAttribute('max', '1')
    soundbarRange.setAttribute('step', '0.1')
    soundbarRange.setAttribute('onchange', 'soundLevel()')

}
function soundLevel() {
    var volumeValue = document.getElementById('volume').value;
    console.log(volumeValue);
    video.volume = volumeValue;
}

function speedUp() {
    let a = (video.playbackRate += 0.5);
    if (a > 4) {
        alert("Limite de velocidade alcançado");
        video.currentTime = 0;
    } else {
        spanVideo.innerHTML = a + "x";
    }
}
function speedDown() {
    let a = (video.playbackRate -= 0.5);
    if (a <= 0) {
        video.playbackRate = 1;
        alert("O vídeo precisa ter velocidade para ser vizualizado");
    } else {
        spanVideo.innerHTML = a + "x";
    }
}
