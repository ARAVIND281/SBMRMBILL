class PadyType {
    constructor(){
      this.input10 = createInput("");
      this.padyType = createElement('h6');
    }
    display(){
      this.input10.position(100,230);
      this.padyType.html("Type of Pady");
      this.padyType.position(10,210);
      
    }
    
  }