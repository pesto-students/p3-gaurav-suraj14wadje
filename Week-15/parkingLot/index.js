const { Heap } = require("heap-js");
const readline = require("readline-sync");

class ParkingLot {
  constructor(size) {
    this.size = size;
    this.slots = Array(size);
    this.emptySlots = new Heap();
    for (let i = 0; i < size; i++) this.emptySlots.push(i);
  }

  parkCar(car) {
    if (this.emptySlots.isEmpty()) throw "Sorry, parking lot is full";

    const emptySlot = this.emptySlots.pop();
    this.slots[emptySlot] = car;
    return emptySlot;
  }

  leaveCar(slotNumber) {
    this.slots[slotNumber - 1] = null;
    this.emptySlots.push(slotNumber - 1);
    console.log(`${slotNumber} is now free`);
  }

  status() {
    for (const [slot, car] of this.slots.entries()) {
      if (car)
        console.log(`${slot + 1} ${car.registrationNumber} ${car.color}`);
    }
  }

  getRegistrationNumbersByColor(color) {
    const result = [];
    for (const car of this.slots) {
      if (car && car.color === color) {
        result.push(car.registrationNumber);
      }
    }
    return result;
  }

  _getSlotNumberByMatcher(matcher, matchAll = false) {
    const result = [];
    for (const [slot, car] of this.slots.entries()) {
      if (matcher(car)) {
        if (matchAll) result.push(slot + 1);
        else return slot + 1;
      }
    }
    return result;
  }
  getSlotNumberByRegistrationNumber(registrationNumber) {
    const matcher = (car) => car.registrationNumber === registrationNumber;
    return this._getSlotNumberByMatcher(matcher);
  }
  getSlotNumberByColor(color) {
    const matcher = (car) => car.color === color;
    return this._getSlotNumberByMatcher(matcher, true);
  }
}

class Car {
  constructor(id, color) {
    this.registrationNumber = id;
    this.color = color;
  }
}

const numberOfSlots = Number(readline.question("number of slots"));

const parkingLot = new ParkingLot(numberOfSlots);

while (true) {
  const commands = readline.question().split(" ");

  if (commands[0] === "park") {
    const car = new Car(commands[1], commands[2]);
    try {
      const lotNumber = parkingLot.parkCar(car);
      console.log(`Allocated slot number: ${lotNumber + 1}`);
    } catch (ex) {
      console.log(ex);
    }
  } else if (commands[0] === "status") {
    parkingLot.status();
  } else if (commands[0] === "leave") {
    parkingLot.leaveCar(Number(commands[1]));
  } else if (commands[0] === "registration_numbers_for_cars_with_colour") {
    console.log(parkingLot.getRegistrationNumbersByColor(commands[1]));
  } else if (commands[0] === "slot_numbers_for_cars_with_colour") {
    console.log(parkingLot.getSlotNumberByColor(commands[1]));
  }
}
