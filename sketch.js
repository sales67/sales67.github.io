var figures;
var colors = [[0,0,0,255],[0,0,255,255],[255,255,0,255],[255,0,0,255]];
var speed = 5;
function setup() {
  createCanvas(210, 290);
  inicialitzarFigures();
}



function draw() {
  background(220);
  var rand = int(random(this.speed));
  if (rand == 1){
    let i = int(random(100))
    if (i <= 12){
     this.figures[i].accionar();
    }
  }  
  this.figures.forEach(pintarFigures);
  pintarLletres();
}

function pintarLletres(){
  fill(0);
  textSize(5);
text('Lorem ipsum dolor sit amet, \n\n consectetur adipiscing elit.\n Mauris accumsan nulla sit \n amet facilisis laoreet.\n Morbi id lacus faucibus,\n euismod justo vitae,\n aliquam ante. Ut quis neque \n vitae diam finibus \n dapibus nec a massa.', 130, 200);
}

function deviceShaken(){
  this.colors.forEach(canviColors);
}

function canviColors(color){
  color[0] = random (255);
  color[1] = random (255);
  color[2] = random (255);
}



function mousePressed(){
  inicialitzarFigures();
}

function mouseReleased() {
  print("released");
  this.speed = 10;
}

function pintarFigures(figura,index){  
  if (figura.accionat()){
    figura = animacioEsvair(figura);    
  }
  figura.draw();
}

function animacioEsvair(figura){
    var color = figura.getColor();
    var difuminat = color[3];
    if (figura.esvaint()){      
      if (difuminat <= 0){
        figura.noEsvair();
        figura.desAccionar();
        figura.setColor(this.colors[int(random(4))]);
        color = figura.getColor();
       }else{
        difuminat-=1;
      }          
    }else{      
      if (difuminat >= 255){
        figura.esvair();
        figura.desAccionar();
      }else{
        difuminat+=1; 
      }
    }
    figura.setColor([color[0],color[1],color[2],difuminat]);
    return figura;
}

function inicialitzarFigures(){
  this.figures = [];
  //this.figures = new Figura(type,initPos,height,width);
  //0 negre
  //1 blau
  //2 groc
  //3 vermell
  
  // SQUARES
  this.figures.push(new Figura("rect",[80,90],30,30,this.colors[0]));
  this.figures.push(new Figura("rect",[100,60],10,20,this.colors[1]));
  this.figures.push(new Figura("rect",[80,60],20,30,this.colors[2]));
  this.figures.push(new Figura("rect",[80,120],20,20,this.colors[3]));
  
  this.figures.push(new Figura("rect",[60,90],20,30,this.colors[1]));
  this.figures.push(new Figura("rect",[110,70],20,20,this.colors[2]));
  this.figures.push(new Figura("rect",[80,140],20,20,this.colors[1]));
  this.figures.push(new Figura("rect",[100,120],10,20,this.colors[1]));
  this.figures.push(new Figura("rect",[100,140],10,20,this.colors[2]));
  this.figures.push(new Figura("rect",[100,190],10,20,this.colors[2]));
  
  this.figures.push(new Figura("rect",[110,140],20,30,this.colors[3]));
  this.figures.push(new Figura("rect",[130,120],20,20,this.colors[0]));
  this.figures.push(new Figura("rect",[130,110],20,10,this.colors[1]));
  this.figures.push(new Figura("rect",[80,120],20,20,this.colors[3]));
  this.figures.push(new Figura("rect",[60,190],20,30,this.colors[2]));
  
  //TRIANGLES
  
  this.figures.push(new Figura("tri",[80,60,100,40,100,60],0,0,this.colors[2]));
  this.figures.push(new Figura("tri",[60,90,80,90,80,70],0,0,this.colors[3]));
  this.figures.push(new Figura("tri",[60,120,60,140,80,120],0,0,this.colors[1]));
  this.figures.push(new Figura("tri",[110,140,130,140,130,120],0,0,this.colors[2]));
  this.figures.push(new Figura("tri",[150,140,130,140,130,160],0,0,this.colors[2]));
  this.figures.push(new Figura("tri",[110,170,110,190,130,170],0,0,this.colors[3]));
  this.figures.push(new Figura("tri",[100,190,80,190,80,210],0,0,this.colors[1]));
  this.figures.push(new Figura("tri",[80,190,80,170,60,190],0,0,this.colors[0]));
  this.figures.push(new Figura("tri",[60,220,80,220,60,240],0,0,this.colors[2]));
 
}