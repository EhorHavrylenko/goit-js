class Car {
  static getSpecs(car) {
    return console.log(
      `MaxSpeed: ${car.maxSpeed}, Speed: ${car.speed}, isOn: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price},`
    );
  }

  constructor(car) {
    (this.speed = 0),
      (this._price = car.price),
      (this.maxSpeed = car.maxSpeed),
      (this.isOn = false),
      (this.distance = 0);
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    (this.isOn = false), (this.speed = 0);
  }

  accelerate(value) {
    let resultSpeed = this.speed + value;

    if (resultSpeed < this.maxSpeed) {
      this.speed = resultSpeed;
    }
  }

  decelerate(value) {
    let decSpeed = this.speed - value;

    if (decSpeed > 0) {
      this.speed = decSpeed;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000

mustang.price = 4000;
console.log(mustang.price);  // 4000
