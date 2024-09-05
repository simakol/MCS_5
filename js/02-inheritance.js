/*
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Rectangle {
  constructor(width, height) {
    this.name = 'Rectangle';
    this.width = width;
    this.height = height;
  }

  getInfo() {
    console.log(
      `Figure: ${this.name}\nwidth = ${this.width}\nheight = ${
        this.height
      }\nP = ${this.calculatePerimetr()}\nS = ${this.calculateArea()}`
    );
  }

  calculatePerimetr() {
    return this.width * 2 + this.height * 2;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// extends - для наслідування класів, фактично записує клас Rectangle в ланцюг прототипу класу Square, щоб ми могли звертатись до тих самих властивостей і мали ті ж самі методи для нашого дочірнього класу Square
class Square extends Rectangle {
  constructor(length) {
    // super - функція яка викликає конструктор батьківсього класу (обовʼязково при наслідування)
    super(length, length);
    this.name = 'Square';
  }
}

console.dir(Square);

const rec = new Rectangle(5, 8);

rec.getInfo();

const square = new Square(5);

square.getInfo();

console.log(square);
