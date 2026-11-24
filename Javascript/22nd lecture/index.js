const cars = [
  { name: "BMW", model: "X5", color: ["Black"], price: 15000 },
  { name: "Audi", model: "A4", color: ["White"], price: 4000 },
  { name: "Toyota", model: "Corolla", color: ["Silver"], price: 8000 }
];
if (cars[0].price > 10000 || cars[1].price > 10000 || cars[2].price > 10000 ){
  console.log("Expensive car ");
}
if (cars[0].price < 5000 || cars[1].price < 5000 || cars[2].price < 5000) {
  console.log("Cheap car ");
}
if (cars[0].name === "BMW") {
  cars[0].color.push("Red", "Blue");
} else if (cars[1].name === "BMW") {
  cars[1].color.push("Red", "Blue");
} else if (cars[2].name === "BMW") {
  cars[2].color.push("Red", "Blue");
} else {
  console.log("No BMW ");
  cars.push({
    name: "BMW",
    model: "M3",
    color: ["Black", "Red", "Blue"],
    price: 12000
  });
}
if (cars[0].name === "Toyota" || cars[0].model === "Toyota") {
  cars.splice(0, 1);
  console.log("Toyota car gone");
} else if (cars[1].name === "Toyota" || cars[1].model === "Toyota") {
  cars.splice(1, 1);
  console.log("Toyota gone");
} else if (cars[2].name === "Toyota" || cars[2].model === "Toyota") {
  cars.splice(2, 1);
  console.log("Toyota gone");
}
console.log("Updated Array:", cars);


const temp=26;
const rainy=true;
console.log(temp>25 && rainy ? "It's hot and rainy" : "It's not hot and rainy");