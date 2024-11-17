// Task 4 and 5
interface Product {
  name: string;
  price: number;
}

function getPrice(products: Product[]) {
  return products.map((p) => p.price);
}

function isVaild(email: string) {
  const reg = /\w+@\w+\.com/;
  return reg.test(email);
}
