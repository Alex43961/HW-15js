import { User } from "./components/User/User";
import { Product } from "./components/Product/Product";
import { products } from "./model/products";
// import { representation } from "./utils/representation";

class Run {
  // static
  static run() {
    let isRunning = true;

    const user = new User("John", "Doe", 250);

    while (isRunning) {
      const userChoose = prompt("a) Show Product b) Profile q)Quit");

      switch (userChoose.toLowerCase()) {
        case "a":
          // arr method .method()
          const parsedProducts = products.map(function (product, i) {
            // const presentationOfProduct = representation.bind(product);
            // console.log(presentationOfProduct());

            const updatedProduct = new Product(
              product.label,
              product.description,
              product.price + 20
            );

            updatedProduct.category = product.category;

            console.log(updatedProduct.representation());

            return updatedProduct;
          });

          const productName = prompt(
            `a) Enter product's name that you want to buy b) Products by category q) Exit  :`
          );

          if (productName === "q") continue;

          // ! try .. catch ?

          // Handle errors
          //   Try , catch
          if (productName.toLowerCase() === "a") {
            console.log("[BEFORE]", user.money);

            try {
              const productsIndex = parsedProducts.findIndex(
                (product) =>
                  product.label.toLowerCase() === productName.toLowerCase()
              );
              user.buy(parsedProducts[productsIndex].price);
            } catch {
              console.error("There is an Error");
            }
            // user.buy();
            console.log("[AFTER]", user.money);
          } else if (productName === "b") {
            const categories = parsedProducts.map((product) => {
              return product.category;
            });

            // new Set() -> without repeated values

            const categoriesSet = [...new Set(categories)];

            const category = categoriesSet.map((el, i) => `${i + 1})${el}`);

            const chosenCategory = prompt(`${category.join(" ")}`);

            const filtredCategory = categoriesSet[+chosenCategory - 1];

            const filtredProducts = parsedProducts.filter(
              (product) => product.category === filtredCategory
            );
            console.log("[filtredProducts]", filtredProducts);
          }

          break;

        case "b":
          console.log(user);
          break;

        case "q":
          isRunning = false;
          break;

        default:
          break;
      }
    }
  }
}

Run.run();
