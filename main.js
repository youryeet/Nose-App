nose_X = 0;
nose_Y = 0;
function preload(){
    clown_nose = "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-clown-red-nose-animation-illustration-image_1243961.jpg"
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded(){
     console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        console.log("x=" + nose_X);
        console.log("y=" + nose_Y);
    }
}
function draw(){
    image(video, 0,0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nose_X, nose_Y, 20);
    image(clown_nose, nose_X, nose_Y, 20,20);

}
function take_snapshot(){
    save('image.png');
}