function Engine(numCylinders) {
  this.numCylinders = numCylinders;
}

Engine.prototype.startEngine = function () {
  console.log(`The engine with ${this.numCylinders} cylinders starts up.`);
};

function Car(make, numCylinders) {
  this.make = make;
  this.engine = new Engine(numCylinders);
}

Car.prototype.driveCar = function () {
  console.log(`${this.make} car drives... `);
  this.engine.startEngine();
};

const myCar = new Car('Tata', 4);

myCar.driveCar();