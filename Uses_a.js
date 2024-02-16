function Radio() {
  this.volumeLevel = 0;
}

Radio.prototype.increaseVolume = function () {
  this.volumeLevel++;
  console.log(`Volume increased to level ${this.volumeLevel}.`);
};

Radio.prototype.decreaseVolume = function () {
  if (this.volumeLevel > 0) {
    this.volumeLevel--;
    console.log(`Volume decreased to level ${this.volumeLevel}.`);
  } else {
    console.log('Volume already at minimum level.');
  }
};

function Car(make, radio) {
  this.make = make;
  if (!(radio instanceof Radio)) {
    radio = new Radio();
  }
  this.radio = radio;
}

Car.prototype.turnOnRadio = function () {
  this.radio.increaseVolume();
};

Car.prototype.turnOffRadio = function () {
  this.radio.decreaseVolume();
};

const myCar = new Car('Tata');

myCar.turnOnRadio();
myCar.turnOnRadio();

myCar.turnOffRadio();
myCar.turnOffRadio();

const yourCar = new Car('Jaguar', { volumeLevel: 5 });

yourCar.turnOnRadio();