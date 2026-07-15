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

    if (0 < a && a < 11) {
       fill (100,0,0);
       circle(a * 140 - 70, 100, 100);
    }
    if (10 < a && a < 21) {
       fill (100,0,0);
       circle(a * 140 - 1470, 300, 100);
    }
    if (20 < a && a < 31) {
       fill (100,0,0);
       circle(a * 140 - 2870, 500, 100);
    } 
}

function keyPressed() {
    if (key == "j") {
        t = 1;
    }
       
    if (key == "f") {
        if (t == 0) {
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
    }

    if (key == "q") {
        if (z == 1) {
            z = 0;
            a += y;
        }
    }
}