var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//ctx.fillStyle="#FF0000";
//ctx.fillRect(0, 0, 100, 100);
ctx.beginPath();
ctx.arc(250,250, 70, 0, 2* Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(220, 210, 15,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(270,210, 15, 0, 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(250, 250, 30, 1/2*Math.PI, -1/2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(250,290, 5, 0, 2*Math.PI);
ctx.stroke();

    

