class Vehicle {
  constructor(wheels, lamps, registrationPlate, maxFuel) {
    this._wheels = wheels;
    this._lamps = lamps;
    this._registrationPlate = registrationPlate;
    this._tank = 0;
    this._maxFuel = maxFuel;
  }

  fillTank() {
    this._tank = this._maxFuel;
    console.log("The tank is full");
  }

  addFuel(liters) {
    if (this._tank + liters > this._maxFuel) {
      // if you try to add liters to the tank and it exceeds the limit, you cant
      console.log("Exceeds limit");
    } else {
      this._tank += liters;
      console.log("Tank: " + this._tank);
    }
  }
}


class Car extends Vehicle {
  constructor(registrationPlate) {
    super(4, 2, registrationPlate, 60);
  }

  get wheels() {
    return this._wheels;
  }

  get lamps() {
    return this._lamps;
  }

  get registrationPlate() {
    return this._registrationPlate;
  }
}

class Motorcycle extends Vehicle {
  constructor(registrationPlate) {
    super(2, 1, registrationPlate, 30);
  }

  get wheels() {
    return this._wheels;
  }

  get lamps() {
    return this._lamps;
  }

  get registrationPlate() {
    return this._registrationPlate;
  }
}

