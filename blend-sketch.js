// Michael Day, 9th Nov 2015
// Blend modes & alpha in p5.js
// No guarantees, ymmv etc

var myImage, buf, srcImage;
var myAlpha = 255;

function preload() {
  // load the source image
  srcImage = loadImage("image223.jpg");
}
function setup() {
  createCanvas(500,300);

  // buf is an image buffer for the alpha only
  buf = createImage(srcImage.width,srcImage.height);

  // myImage is the working image we will use to draw to canvas
  myImage = createImage(srcImage.width, srcImage.height);

  // go to the alpha-adding function
  addAlpha(myAlpha);
}

function addAlpha(a){
  // load up the buffer pixels
  buf.loadPixels();
  // cycle through giving the pixels an alpha value (myAlpha)
  // the rgb colours don't matter, they won't be seen
  for(var x = 0; x < buf.width; x++) {
    for(var y = 0; y < buf.height; y++) {
      buf.set(x, y, [123, 232, 111, a]);
    }
  }
  buf.updatePixels();

  // copy the source image into the working image
  myImage.copy(srcImage,0,0,srcImage.width,srcImage.height,0,0,myImage.width,myImage.height);
  // apply buf to the working image as a mask
  myImage.mask(buf);
}

function draw() {

  background(100);

  // increment myAlpha
  if(myAlpha<255){
    myAlpha += 1;
  } else {
    myAlpha = 0;
  }

  // if there's no error with myImage
  if(myImage){
    // draw it so we can see how it should look
    image(myImage, 0, 0);

    // blend it to the canvas, adding a blend mode (SCREEN)
    // in this case, it's drawn at the mouse position
    blend(myImage,0,0,myImage.width,myImage.height,mouseX-100,mouseY-100,myImage.width,myImage.height,SCREEN);

  }
  // reapply the alpha before the next run through draw
  addAlpha(myAlpha);
}
