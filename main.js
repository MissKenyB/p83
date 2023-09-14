var mouseEvent = "empty";
 canvas=document.getElementById("miCanvas");
 ctx=canvas.getContext("2d");

var last_position_of_x, last_position_of_y;
var color= "black";
var wline= 3;
var radio= 20;
var width = screen.width;

new_width =  screen.width - 10; 
new_height = screen.height - 50;

if(width < 992)
	{
		canvas.style.width = new_width;
		canvas.style.height = new_height;
    		document.body.style.overflow = "hidden";
	}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) 
{
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    wline = document.getElementById("grosor").value;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) 
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = wline;

    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    wline = document.getElementById("grosor").value;
    radio= document.getElementById("radio").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_mouse_x = e.clientX-canvas.offsetLeft;
    current_mouse_y = e.clientY-canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = wline;
        ctx.arc(current_mouse_x, current_mouse_y, radio ,0 , 2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
