class Car{
  constructor(public readonly brandz: string){
    this.brand = brandz;
  }
  brand : string;
  public move(){}
}

class Korope extends Car{
  execute(){
    this.move();
  }

}

const mustang = new Car("mustang");
const ferrari = new Car("ferrari");
const dodge = new Car("dodge");
const toyota = new Car("toyota");
// const k1 = new Korope();
// k1.execute();

console.log(mustang, ferrari, dodge, toyota);