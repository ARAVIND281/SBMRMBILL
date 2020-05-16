var entryNo,date,name1,fatherName1;
var village1,number1,aadhar1;
var vehicle1,farmerType1;
var padyType1;
var canvas;


function setup() {
  canvas = createCanvas(800,1000);
  
  entryNo = new EntryNo();
  date = new Date();
  name1 = new Name();
  fatherName1 = new FatherName();
  village1 = new Village();
  number1 = new Number();
  aadhar1 = new Aadhar();
  vehicle1 = new Vehicle();
  farmerType1 = new FarmerType();
  padyType1 = new PadyType();
  
}

function draw() {
  background(0);
  entryNo.display();
  date.display();
  name1.display();
  fatherName1.display();
  village1.display();
  number1.display();
  aadhar1.display();
  vehicle1.display();
  farmerType1.display();
  padyType1.display();
  
}