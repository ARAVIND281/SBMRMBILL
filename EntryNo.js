class EntryNo {
  constructor(){
    this.input1 = createInput("");
    this.entryNo = createElement('h6');
  }
  display(){
    //var input1 = createInput("");
    this.input1.position(10,50);
    this.entryNo.html("Entry No");
    this.entryNo.position(10,10);
    
  }
  
}