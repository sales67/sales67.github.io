let figures;
let colors;
function setup() {
  createCanvas(300, 400);
  this.colors = [[0,0,0,255],[0,0,255,255],[255,255,0,255],[255,0,0,255]];
  
  this.figures = [];
  
  inicialitzarFigures();
}

function draw() {
  background(220);
  var rand = int(random(10));
  //console.log(rand);
  if (rand == 1){
    let i = int(random(100))
    if (i <= 12){
     this.figures[i].accionar();
    }
  }  
  this.figures.forEach(pintarFigures);
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
    print("accionat");
    if (figura.esvaint()){      
      if (difuminat <= 0){
        figura.noEsvair();
        figura.desAccionar();
       }else{
         print("esvaint");
        difuminat-=1;
      }          
    }else{      
      if (difuminat >= 255){
        figura.esvair();
        figura.desAccionar();
      }else{
        print("desesvaint");
        difuminat+=1; 
      }
    }
    figura.setColor([color[0],color[1],color[2],difuminat]);
    return figura;
}

function inicialitzarFigures(){
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
  
  //TRIANGLES
  
  this.figures.push(new Figura("tri",[80,60,100,40,100,60],0,0,this.colors[2]));
  this.figures.push(new Figura("tri",[60,90,80,90,80,70],0,0,this.colors[3]));
  this.figures.push(new Figura("tri",[60,120,60,140,80,120],0,0,this.colors[1]));
  this.figures.push(new Figura("tri",[110,140,130,140,130,120],0,0,this.colors[2]));
  this.figures.push(new Figura("tri",[150,140,130,140,130,160],0,0,this.colors[2]));
  this.figures.push(new Figura("tri",[110,170,110,190,130,170],0,0,this.colors[3]));
  //this.figures.push(new Figura("tri",[100,190,100,200,80,200],0,0,this.colors[1]));
 
}