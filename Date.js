class Date {
    constructor(){
      this.input2 = createInput("");
      this.date = createElement('h6');
    }
    display(){
      this.input2.position(200,50);
      this.date.html("Date");
      this.date.position(200,10);
      
    }
    
  }