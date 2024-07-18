class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  get temperature(){
    console.log((5/9) *(this._fahrenheit -32))
    return (5/9) *(this._fahrenheit -32);
  }

  set temperature(celsius) {
    this._fahrenheit = celsius*9 /5 +32;
  }
}