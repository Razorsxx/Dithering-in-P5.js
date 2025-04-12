a=0;function preload(){a=loadImage('b.jpg');}
function setup(){
createCanvas(a.width,a.height);
a.loadPixels();
p=a.pixels;
d=height;
f=width;
w=f*4;
for(y=0;y<d;y++){
for(x=0;x<f;x++){
i=(y*f+x)*4;
b=(p[i]+p[i+1]+p[i+2])/3;
q=b<128?0:255;
e=b-q;
p[i]=p[i+1]=p[i+2]=q;
if(x+1<f)s(i+4,e*7/16);
if(y+1<d){
if(x)s(i+w-4,e*3/16);s(i+w,e*5/16);
if(x+1<f)s(i+w+4,e/16);
}
}
}
a.updatePixels();
image(a,0,0);}
function s(i,e){p[i]+=e;p[i+1]+=e;p[i+2]+=e;}
/* The comments dont count towards the character limit, they are here to make the code more understandable
Variables:
a: holds the image loaded in preload function
p: a reference to the pixel data of the image
W: Represents the pixel width of the image (width * 4 because each pixel has 4 values: red, green,blue,alpha)
i: represents the index in the pixel array corresponding to the current pixel being processed
b: the grayscale value of the pixel, calculated as the average of the red,green and blue components
q: the quantasised value of the pixels. it is set to 0 which is black if b is less than 128 and 255 which is white if otherwise
e: is the error calculated as the difference between the grayscale value (b) and the quantasised value (q)

the pixel values at index i are then set to the quantasised value for red,green and blue

the Floyd-Steinberg error diffusion is then applied:
if the current pixel is not last in its row the s function is called to spread the error to the right neighbor which i sthe next pixel in the row
if the current pixel is not on the last row, the error is spread to the pixels below:
bottom left pixel: s(i+w-4,e*3/16)
bottom pixel: s(i+w,e*5/16)
bottom right pixel: s(i+w+4,e/16)

the function s(i,e) is a function that spreads the error (e) to the pixel at index (i) and its red,green and blue components(i,i+1,i+2)*/