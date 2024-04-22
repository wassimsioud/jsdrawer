const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 190;
canvas.height = window.innerHeight - 100;
const context = canvas.getContext('2d');

let color = 'black';
let drawing = false;
context.strokeStyle = color;


canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

function start(event){
    drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
                   
}

function draw(event){
    if(drawing){
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.stroke();
    }
    
}


function stop(){
    drawing = false;
    context.closePath();
}