mustacheX=0;
mustacheY=0;

function preload() {
    mustache_png = loadImage('https://i.postimg.cc/cJbpqJZG/mustache-png.jpg');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.mustache.x;
        mustacheY = results[0].pose.mustache.y;
        console.log("mustache x = " + results[0].pose.mustache.x);
        console.log("mustache y = " + results[0].pose.mustache.y);
    }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255, 0, 0);
  circle(noseX, noseY, 20);
  image(mustache_png, mustacheX, mustacheY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

