i=0;t=4;
function preload(){i=loadImage("b.jpg");}
function setup(){createCanvas(i.width,i.height);i.filter(THRESHOLD,t/10);image(i,0,0);}
/* The comments dont count towards the character limit, they are here to make the code more understandable

i: holds the loaded image
t: variable set to value 4 and is used as part of the threshold level for the filter

filter method is applied to the image with a threshold filter (THRESHOLD) and a threshold level calculated from t divided by 10*/