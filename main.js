class Vehicle {
  constructor(wheels, lamps, registrationPlate, maxFuel, kilometersPerLiter) {
    this._wheels = wheels;
    this._lamps = lamps;
    this._registrationPlate = registrationPlate;
    this._tank = 0;
    this._maxFuel = maxFuel;
    this._kilometersPerLiter = kilometersPerLiter;
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

  printVehicleInfo() {
    console.log("Wheels: " + this._wheels + ". Lamps: " + this._lamps + ". Registration plate: " + this._registrationPlate);
  }

  driveUntilEmpty() {
    // go forward in kilometers until you hit an empty fuel tank
    var distanceTravelled = 0;
    while (this._tank > 0) {
      distanceTravelled++;
      // if KPL divides distanceTravelled, we remove a liter from the tank
      if (distanceTravelled % this._kilometersPerLiter === 0) {
        this._tank--;
      }

      if (distanceTravelled > 1000000) {
        console.log("JEEZUS!");
        break;
      }
    }
    console.log("Total distance travelled: " + distanceTravelled);
    this.printVehicleInfo();
  }
}


class Car extends Vehicle {
  constructor(registrationPlate, kilometersPerLiter) {
    super(4, 2, registrationPlate, 60, kilometersPerLiter);
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
  constructor(registrationPlate, kilometersPerLiter) {
    super(2, 1, registrationPlate, 30, kilometersPerLiter);
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

