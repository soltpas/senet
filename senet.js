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
let am = 0;
let bm = 0;
let cm = 0;
let dm = 0;
let em = 0;
let aam = 0;
let bbm = 0;
let ccm = 0;
let ddm = 0;
let eem = 0;

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
 
    fill("white")
    rect(1000,650,200,300)

    textSize(20)
    fill(100,0,0)
    text("Q: " + a, 1000, 700)
    text("W: " + b, 1000, 720)
    text("E: " + c, 1000, 740)
    text("R: " + d, 1000, 760)
    text("T: " + e, 1000, 780)


    fill(0,0,100)
    text("Y: " + aa, 1000, 800)
    text("U: " + bb, 1000, 820)
    text("I: " + cc, 1000, 840)
    text("O: " + dd, 1000, 860)
    text("P: " + ee, 1000, 880)

    if (am == 1 && y != 0) {
        a = movePiece(a);
        am = 0;
    }

    if (bm == 1 && y != 0) {
        b = movePiece(b);
        bm = 0;
    }

    if (cm == 1 && y != 0) {
        c = movePiece(c);
        cm = 0;
    }

    if (dm == 1 && y != 0) {
        d = movePiece(d);
        dm = 0;
    }

    if (em == 1 && y != 0) {
        e = movePiece(e);
        em = 0;
    }

    if (aam == 1 && y != 0) {
        aa = movePiece(aa);
        aam = 0;
    }

    if (bbm == 1 && y != 0) {
        bb = movePiece(bb);
        bbm = 0;
    }

    if (ccm == 1 && y != 0) {
        cc = movePiece(cc);
        ccm = 0;
    }

    if (ddm == 1 && y != 0) {
        dd = movePiece(dd);
        ddm = 0;
    }

    if (eem == 1 && y != 0) {
        ee = movePiece(ee);
        eem = 0;
    }

    if(a + b + c + d + e == 500) {
        fill(100, 0, 0);
        textSize(500);
        text("RED WIN!", 600, 450);
    }
}

function movePiece(position) {
        if(position < 26 && position + y >= 26 && z == 1) {
            z = 0;
            position = 26;
            y = 0;
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
        if(position < 26 && position + y < 26 && z == 1){
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
            y = 0;
        }
        if(position == 26 && z == 1){ {
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
            y = 0;
        }
        if (position == 27) {
                z = 0;
                position = 15;
                for (let i = 0; i < 9; i += 1) {
                if (
                    position === a || position === b || position === c || position === d || position === e ||
                    position === aa || position === bb || position === cc || position === dd || position === ee
                ) {
                    if (position > 0) {
                    position -= 1;
                    }
                }
                y = 0;
                }
            }
        }
        if (position == 28 && y == 3) {
                z = 0;
                position = 100;
                y = 0;
        }
        if (position == 29 && y == 2) {
                z = 0;
                position = 100;
                y = 0;
        }
        if (position == 30 && y == 1) {
                z = 0;
                position = 100;
                y = 0;
        }
        if (position >= 28 && y == 1) {
                z = 0;
                y = 0;
        }
    return position;
}

function keyPressed() {

    if (key == "f") {
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem == 1) {
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
        am = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            am = 0;
        }
    }

    if (key == "w") {
        bm = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            bm = 0;
        }
    }

    if (key == "e") {
        cm = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            cm = 0;
        }
    }

    if (key == "r") {
        dm = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            dm = 0;
        }
    }

    if (key == "t") {
        em = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            em = 0;
        }
    }

    if (key == "y") {
        aam = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            aam = 0;
        }
    }

    if (key == "u") {
        bbm = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            bbm = 0;
        }
    }

    if (key == "i") {
        ccm = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            ccm = 0;
        }
    }

    if (key == "o") {
        ddm = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            ddm = 0;
        }
    }

    if (key == "p") {
        eem = 1;
        if(am + bm + cm + dm + em + aam + bbm + ccm + ddm + eem != 1) {
            eem = 0;
        }
    }
}