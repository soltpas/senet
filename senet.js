let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let aa = 0;
let bb = 0;
let cc = 0;
let dd = 0;
let ee = 0;
let x = [];
let y = 0;
let z = 0;
let t = 0;


function setup() {
    createCanvas(1400, 900);
    
}

function drawPiece(position, colorValue) {
    if (0 < position && position <= 10) {
        fill(colorValue[0], colorValue[1], colorValue[2]);
        circle(position * 140 - 70, 100, 100);
    }
    if (10 < position && position <= 20) {
        fill(colorValue[0], colorValue[1], colorValue[2]);
        circle(position * 140 - 1470, 300, 100);
    }
    if (20 < position && position <= 30) {
        fill(colorValue[0], colorValue[1], colorValue[2]);
        circle(position * 140 - 2870, 500, 100);
    }
}

function draw() {
    fill(170, 150, 60);
    for (let i = 0; i < 10; i += 1) {
        rect(i * 140, 0, 140, 200);
    }
    for (let i = 0; i < 10; i += 1) {
        rect(i * 140, 200, 140, 200);
    }
    for (let i = 0; i < 10; i += 1) {
        rect(i * 140, 400, 140, 200);
    }

    drawPiece(a, [100, 0, 0]);
    drawPiece(b, [100, 0, 0]);
    drawPiece(c, [100, 0, 0]);
    drawPiece(d, [100, 0, 0]);
    drawPiece(e, [100, 0, 0]);
    drawPiece(aa, [0, 0, 100]);
    drawPiece(bb, [0, 0, 100]);
    drawPiece(cc, [0, 0, 100]);
    drawPiece(dd, [0, 0, 100]);
    drawPiece(ee, [0, 0, 100]);
}

function movePiece(position) {
    if (z == 1 ) {
        z = 0;
        position += y;
        for (let i = 0; i < 9; i += 1) {
            if (
                position === a || position === b || position === c || position === d || position === e ||
                position === aa || position === bb || position === cc || position === dd || position === ee
            ) {
                if (position > 0) {
                position -= 1;
                }
            }
        }
    }
    return position;
}

function keyPressed() {
    if (key == "j") {
        t = 0;
    }

    if (key == "f") {
        y = 0;
        z = 1;
        for (let i = 0; i < 4; i += 1) {
            x[i] = floor(random(2));
            if (x[i] == 1) {
                fill(255);
                rect(i * 200 + 200, 700, 100, 200);
            } else {
                fill(0);
                rect(i * 200 + 200, 700, 100, 200);
            }
            y += x[i];
        }
        if (y == 0) {
            y = 5;
        }
    }

    if (key == "q") {
        a = movePiece(a);
    }

    if (key == "w") {
        b = movePiece(b);
    }

    if (key == "e") {
        c = movePiece(c);
    }

    if (key == "r") {
        d = movePiece(d);
    }

    if (key == "t") {
        e = movePiece(e);
    }

    if (key == "y") {
        aa = movePiece(aa);
    }

    if (key == "u") {
        bb = movePiece(bb);
    }

    if (key == "i") {
        cc = movePiece(cc);
    }

    if (key == "o") {
        dd = movePiece(dd);
    }

    if (key == "p") {
        ee = movePiece(ee);
    }
}