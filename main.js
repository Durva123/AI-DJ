function setup(){
    canvas=createCanvas(350,300);
    canvas.position(650,300)
    video=createCapture(VIDEO);
    video.size(300,350);
    video.hide();
    }

    function draw(){
        image(video, 0, 0, 350, 300);
    }

    var song="";
function preload(){
    song=loadSound("music.mp3");
}

function playmusic(){
    song.play();
}