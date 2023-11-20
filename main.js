
function preload() {

}

function setup(){
    canvas=createCanvas(650,550) ;
   
    canvas.center();

    video=createCapture(VIDEO);
    video.hide() ;


}

function draw() {
    image(video,180,140,300,300)
   
    fill("#44A048")
    stroke("#44A048")
    rect(25,80,50,400)
    rect(575,80,50,400)
    rect(25,25,600,50)
    rect(25,475,600,50)
    fill("#3949AA") ;
    stroke("#3949AA");
    circle(50,50,80)
    circle(600,50,80)
    circle(600,500,80)
    circle(50,500,80)

}

function take_snap() {
    save("img.png")

}