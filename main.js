noseX = 0;
noseY = 0;
function preload() {
  moustache = loadImage(
    "https://i.postimg.cc/Jhbd2PZs/moustache-png-pic-removebg-preview.png"
  );
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function modelLoaded() {
  console.log("posenet is initialized");
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill("red");
  stroke("red");
  image(moustache, noseX - 34, noseY - 5, 80, 40);
}

function take_snapshot() {
  save("Selfie.png");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}
