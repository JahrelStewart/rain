let arr = [];

function setup() {
    var canvasDiv = document.getElementById('canvas');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    var sketchCanvas = createCanvas(width, height);
    sketchCanvas.parent("canvas");    
    for (let z = 0; z < 300; z += 1){
        arr[z] = new shapes(random(0, width), 0, random(1, 3), random(20, 60));
    }
}
 
function mouseReleased(){
    for (let z = 0; z < 200; z += 1){
        arr[z].speed = map(arr[z].h, 20, 60, 2, 12);
    }
}

var wdepth;
var hw;
var wh;

class shapes{
    constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = map(this.w, 1, 3, 2, 12);
    }
  
    make(){
        wdepth = map(this.w, 1, 3, 40, 255);
        hw = map(this.h, 20, 60, 1, 3);
        wh = map(this.w, 1, 3, 20, 60);

        this.h = wh;
        this.w = hw;

        noStroke();
        fill(34,106,123, wdepth);
        ellipse(this.x, this.y, this.w, this.h);
    }
 
    go(){     
        this.y += this.speed;
                            
        if (this.y > height) {
            this.y = -10;
            this.x = random(0, width);
            this.w = hw;
            this.h = wh;   
            this.speed = map(this.w, 1, 3, 2, 12);
        }

        if (mouseIsPressed) {
            this.speed = map(this.h, 20, 60, 1, 3);   
        }

    }
    
}

function draw() {
    background(204, 230, 237);
    for(var y = 0; y < arr.length; y+=1){
        arr[y].make();
        arr[y].go();
    }
}
