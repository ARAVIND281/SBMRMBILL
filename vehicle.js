class Vehicle {
    constructor(){
      this.input8 = createInput("");
      this.vehicle = createElement('h6');
    }
    display(){
      this.input8.position(10,170);
      this.vehicle.html("Vehicle Number");
      this.vehicle.position(10,130);
      
    }
    
  }