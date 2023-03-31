export class Product {
  constructor(label, description, price) {
    this.label = label;
    this.price = price;
    this.description = description;
  }

  representation() {
    return `[${this.label}] : ${this.description} => ${this.price}`;
  }
}

// const cola = new Product("Cola", "", "230");

// try {
//   const cola = cola * 23;
// } catch {
//   console.log("Something went wrong!");
// }

// console.log("HELLO WORLD!");
