function preload() {
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("lip x = " + results[0].pose.lip.x);
        console.log("lip y = " + results[0].pose.lip.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(video, 300, 300, 0, 0);
    
}

function take_snapshot(){
    save('myFilterImage.png');
}