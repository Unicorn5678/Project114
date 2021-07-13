function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video.createCapture(VIDEO);
}

function draw(){

}

function take_snapshot(){
    save('student_name.png');
}