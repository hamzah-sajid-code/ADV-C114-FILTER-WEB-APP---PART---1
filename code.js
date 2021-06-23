function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(495, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400)


}
function takeSelfie(){
  save('student_name.png');
}
function lipstick(){
    window.location = 'lip.html';
}