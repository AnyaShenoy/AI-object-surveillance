status= ""

function preload(){

}

function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(480,380)
    video.hide()
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    object_detector= ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function ModelLoaded(){
    console.log("Model Loaded")
    status= true;
}