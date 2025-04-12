a=0;
function preload(){
a=loadImage('b.jpg');
}
function setup(){
createCanvas(a.width,a.height);
a.loadPixels();
p=a.pixels;
for(y=0;y<height;y++){
for(x=0;x<width;x++){
i=(y*width+x)*4;
g=(p[i]+p[i+1]+p[i+2])/3;
p[i]=p[i+1]=p[i+2]=g<random(0,255)?0:255;
}
}
a.updatePixels();
image(a,0,0);
}
/* The comments dont count towards the character limit, they are here to make the code more understandable

a: holds the loaded image
p: reference to pixel data of the image
i: the index in the pixel array corresponding to the current pixel being processed
g: the grayscale value of the pixel

the grayscale value is then compared with a random value between 0 and 255, if g is less than the random value then the pixels colour values are set to 0 which is black, otherwise they are set to 255 which is white*/