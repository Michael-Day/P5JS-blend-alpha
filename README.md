## P5JS-blend-alpha

This is a demonstration of a technique in [p5.js](http://p5js.org/) for drawing images with alpha transparency and [blend modes](http://p5js.org/reference/#/p5/blendMode) at the same time. Using blendMode() seems to affect the whole drawing context, and prevents the use of tint() as a way of adding transparency.

It involves the use of three [p5.images](http://p5js.org/reference/#/p5.Image): one to hold the source image, 
one to hold alpha information, and one to hold the two merged together. 

The method, briefly, goes like this:
+ Load up your source image from file
+ Create a working image using [createImage()] (http://p5js.org/reference/#/p5/createImage)
+ Create a buffer image using [createImage()] (http://p5js.org/reference/#/p5/createImage)
+ [copy()] (http://p5js.org/reference/#/p5/copy) the source image into your empty working image
+ Cycle through the [pixels[]] (http://p5js.org/reference/#/p5/pixels[]) of the buffer, using [set()](http://p5js.org/reference/#/p5/set) to set them to your desired alpha
+ [mask()](http://p5js.org/reference/#/p5.Image/mask) your working image with your buffer image
+ Use [blend()](http://p5js.org/reference/#/p5/blend) to draw the working image to the canvas, applying the desired blend mode

It seems to work, no idea how efficient it is. Please feel free to fork and improve.

Have fun!

[@mday](http://twitter.com/mday)
