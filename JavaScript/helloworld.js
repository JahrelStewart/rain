// var all = document.querySelector('h1');
// let but = document.querySelector('button');
// let pic = document.querySelector('img');
// let show = document.querySelector('html');
// let canvas = document.getElementById('paint');
// let ctx = canvas.getContext('2d');
// let wordd = "boyz";
// let arr = document.querySelector('input');

/*
function art(){
    ctx.beginPath();
    ctx.fillStyle = "#C70039";
    ctx.moveTo(200, 100);
    ctx.lineTo(400, 100);
    ctx.lineTo(400, 300);
    ctx.lineTo(200, 300);
    ctx.lineTo(200, 100);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "#FF5733";
    ctx.ellipse(300, 200, 100, 100, 0, 4.72, 1.57, false);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "#E9967A";
    ctx.ellipse(300, 200, 100, 100, 0, 1.57, 4.72, false);
    ctx.fill();  
    ctx.fillStyle = "#943126";
    ctx.fillRect(270, 170, 60, 50);
    ctx.closePath();
   
    ctx.font = "75px Monospace";
    ctx.fillStyle = "white";
    ctx.fillText(wordd.indexOf("bo"), 285, 218, 30);
}

function ask(){
    var names = prompt('What is your name?');
    localStorage.setItem('name', names);
    //all.textContent = 'Your name is ' + names; 
    if(Number(names) === wordd.length){
       art();       
    }else{
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "75px Monospace";
    ctx.fillStyle = "black";
    ctx.fillText("NOPE", 285, 218, 100);
    }
    }
   
    if(!localStorage.getItem('name')){
        ask();
    }else{
        var nextname = localStorage.getItem('name');
        all.textContent = 'Your name is ' + nextname;
        if(nextname === "Jahrel"){
            pic.setAttribute ('src','long.JPG');
        }else{
            pic.setAttribute ('src','bloss.JPG');
        }
    }
        
       
                                                                       Get highest number program
       


       var ary = []; 
      // for(x = 0; x < 3; x++){
        function getSum(total, num) {
            return total + num;
        }

        but.onclick = function(){    
             
            ary.push(Number(arr.value));
            arr.value = " ";    

            if(ary.length === 5){
            //alert(ary[0]);
            ctx.font = "75px Monospace";
            ctx.fillStyle = "black";
            /*ctx.fillText(Number(ary.reduce(getSum)/ary.length).toFixed(2), 285, 218, 100);

            var high = ary[0];
            for ( var x = 1; x <= ary.length; x = x + 1){
                if (ary[x] > high){
                    high = ary[x];
                }  
            }
         ctx.fillText(high, 285, 218, 100);

            }else if(ary.length > 5){
            alert("No more allowed!");
            
            }

    }
   


 //                                                                 Rainfall animation

 

    
    
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
  
    
var xPositions = [];
var yPositions = [];
var arrs = [];
var siz = [];
var wid = [];

var x;
var y;
var r;
var s;
function recreate(){
for(var z = 0; z < 290; z = z + 1){
    r = getRandomIntInclusive(4, 55);
    x = getRandomIntInclusive(0, 1900);
    y = getRandomIntInclusive(5, 30);
    s = getRandomIntInclusive(1, 2);
    xPositions.push(Number(x));
    yPositions.push(Number(y));
    siz.push(Number(r));
    wid.push(Number(s));
}
}
                
    recreate();
    function draw() {     
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < xPositions.length; i = i + 1) {
        ctx.beginPath();
        ctx.fillStyle = "#A0DAE8";
        ctx.ellipse(xPositions[i], yPositions[i], siz[i], wid[i], 1.58, 1.57, 8, false);
        ctx.fill();
        ctx.closePath();
        arrs.push(Number(yPositions[i]));
        yPositions[i] = yPositions[i] + arrs[i];
       
        
        if(yPositions[i] > 900){
            yPositions[i] = getRandomIntInclusive(5, 30);
            xPositions[i] = getRandomIntInclusive(0, 1900);
            siz[i] = getRandomIntInclusive(4, 55);
            wid[i] = getRandomIntInclusive(1, 2);
                                             
        }

           
    }
    
}

    setInterval(draw, 10);

    var inter;
    function mouseDown() {
        inter = setInterval(draw, 5);
      }
      
      function mouseUp() {
        clearInterval(inter);
      }

*/

//                                                              More Advanced coding for rainfall animation using Vanilla Javascript
// var mouseDown = 0;
// document.body.onmousedown = function() { 
//     mouseDown = 1;
// }
// document.body.onmouseup = function() {
//     mouseDown = 0;
// }

// var box = [];
// var wdepth;
// var wh;
// var hw; 
// var inter;
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
// }

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

// function maps(value, x, y, x1, y1){
// xy1 = x1 + (((y1-x1)/(y - x)) * (value - x));
// return xy1;
// }

// class shapes{
//     constructor(x, y, h, w){
//       this.x = x;
//       this.y = y;
//       this.w = w;
//       this.h = h;
//       this.speed = maps(this.w, 1, 2, 3, 9);
//     }
    
//     make(){
//         wdepth = maps(this.w, 1, 2, 0.4, 1.0);

//         ctx.beginPath();
//         ctx.fillStyle = `rgba(100, 186, 206, ${wdepth})`;
//         ctx.ellipse(this.x, this.y, this.h, this.w, 1.58, 1.57, 8, false);
//         ctx.fill();
//         ctx.closePath();
//     }
    
//     go(){  
//            this.y = this.y + this.speed;

//            if (this.y > 900) {
//            this.x = getRandomIntInclusive(0, 1900);
//            this.y = -40;
//            this.h = maps(this.w, 1, 2, 20, 40);
//            this.w = maps(this.h, 20, 40, 1, 2);
//        this.speed = maps(this.w, 1, 2, 3, 9);
//            }
           
//            if (mouseDown == 1) {
//                this.speed = maps(this.w, 1, 2, 1, 4);                              
//           }
//           if (mouseDown == 0){
//             this.speed = maps(this.w, 1, 2, 3, 9);
//           }
        
//         }
//   }


//   for (var z = 0; z < 250; z = z + 1){
//     box[z] = new shapes(getRandomIntInclusive(0, 1900), -40, getRandomArbitrary(20, 40),getRandomArbitrary(1, 2));
//   }


// function draw() {     
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (var y = 0; y < box.length; y = y + 1) {
//      box[y].make();
//      box[y].go();                        
//     }
// }

// setInterval(draw, 10);

  
//   function mouseUp() {
//     clearInterval(inter);
//   }




//                                                               P5.JS version of rainfall
let arr = [];

function setup() {
	//createCanvas(1700, 900);
	createCanvas(windowWidth, windowHeight);
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

