document.getElementById("coordinatesForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let x1 = parseInt(document.getElementById("x1").value);
    let y1 = parseInt(document.getElementById("y1").value);
    let x2 = parseInt(document.getElementById("x2").value);
    let y2 = parseInt(document.getElementById("y2").value);
    drawLine(x1, y1, x2, y2, 2);
});

function drawLine(x1, y1, x2, y2, thickness) {      
    let dx = x2 - x1;
    let dy = y2 - y1;
    let steps = Math.max(Math.abs(dx), Math.abs(dy));
    let xIncrement = dx / steps;
    let yIncrement = dy / steps;

    let canvas = document.getElementById("drawingArea");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";

    let x = x1;
    let y = y1;

    for (let i = 0; i < steps; i++) {
        for (let j = 0; j < thickness; j++) {
            ctx.fillRect(Math.round(x) + j, Math.round(y) + j, 1, 1);
        }
        x += xIncrement;
        y += yIncrement;
    }
}
