class Figura {

   constructor(type,initPos,height,width,color) {
    this.type = type;
    this.initPos = initPos;
    this.height = height;
    this.width = width;
    this.color = color;
    this.esvaintse = true;
    this.accio = false;
  }

  draw() {
    noStroke();
    fill(this.color);
    if (this.type == "rect"){
      rect(this.initPos[0], this.initPos[1], this.height, this.width);
    }else{
      triangle(this.initPos[0], this.initPos[1],
               this.initPos[2], this.initPos[3],
               this.initPos[4], this.initPos[5]);
    }
  }
  
  accionat(){
   return this.accio; 
  }
  
  accionar(){
    this.accio = true;
  }
  
  desAccionar(){
    this.accio = false;
  }
  
  esvair(){
    this.esvaintse = true;
  }
  
  noEsvair(){
    this.esvaintse = false;
  }
  
  esvaint(){
    return this.esvaintse;
  }
  getColor(){
   return this.color; 
  }
  setColor(color){
    this.color = color;
  }
}
  
  