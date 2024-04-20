class Car{
  protected move(){}
}

class Korope extends Car{
  execute(){
    this.move();
  }

}

const mustang = new Car();
const k1 = new Korope();
k1.execute();
