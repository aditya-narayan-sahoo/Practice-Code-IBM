function Vehicle() {}

Vehicle.prototype.move = function () {
  console.log('The vehicle is moving.');
};

function Car() {}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.honkHorn = function () {
  console.log('Beep beep!');
};

const myCar = new Car();

myCar.move();   // This works because a Car "is-a" Vehicle
myCar.honkHorn();  // This works because it's a method defined specifically for Cars