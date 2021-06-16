var tint_color="";
function preload()
{

}
function setup()
{
canvas=createCanvas(600,500);
canvas.position(310,460);
video=createCapture(VIDEO);
video.hide();
}
function draw()
{
image(video,0,0,600,500);
tint(tint_color);
}
function take_snapshot()
{
    save("shreya.png");
}
function filter_colour()
{
    tint_color=document.getElementById("colour_name").value;
}