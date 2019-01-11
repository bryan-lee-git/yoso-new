import hedge from "./Hedge";
import random from "./Random";

export default function BuildPantry(category, index, UserId) {
  console.log(`UserId is ${UserId} and index for the category is ${index}`);
  console.log(`category length is ${category.length}`);

  const targetIndex = random(category.length);
  const target = category[targetIndex];
  const item = {};
  item.name = target;
  item.UserId = UserId;

  switch (index) {
    case 0: //nonVegan
      item.shelfLife = 14 + hedge(3);
      item.frequency = 10 + hedge(5);
      item.stock = "ENOUGH";
      item.description = "Non Vegan";
      break;
    case 1: //bread
      item.shelfLife = 10 + hedge(3);
      item.frequency = 8 + hedge(5);
      item.stock = "ENOUGH";
      item.description = "Bread";
      break;
    case 2: //cheese
      item.shelfLife = 30 + hedge(10);
      item.frequency = 45 + hedge(10);
      item.stock = "ENOUGH";
      item.description = "Cheese";
      break;
    case 3: //stable
      item.shelfLife = 200 + hedge(50);
      item.frequency = 100 + hedge(90);
      item.stock = "ENOUGH";
      item.description = "Shelf-Stable Groceries";
      break;
    case 4: //condiments
      item.shelfLife = 250 + hedge(60);
      item.frequency = 250 + hedge(240);
      item.stock = "ENOUGH";
      item.description = "Condiments";
      break;
    case 5: //produce
      item.shelfLife = 10 + hedge(5);
      item.frequency = 14 + hedge(9);
      item.stock = "ENOUGH";
      item.description = "Produce";
      break;
    case 6: // canned
      item.shelfLife = 730 + hedge(60);
      item.frequency = 365 + hedge(340);
      item.stock = "ENOUGH";
      item.description = "Canned Goods";
      break;
    case 7: // spices
      item.shelfLife = 730 + hedge(60);
      item.frequency = 365 + hedge(60);
      item.stock = "ENOUGH";
      item.description = "Spices";
      break;
    case 8: // frozen
      item.shelfLife = 365 + hedge(120);
      item.frequency = 200 + hedge(170);
      item.stock = "ENOUGH";
      item.description = "Frozen Foods";
      break;
    case 9: // household
      item.shelfLife = 1000;
      item.frequency = 100 + hedge(80);
      item.stock = "ENOUGH";
      item.description = "Household Goods";
      break;
    default:
      item.shelfLife = 14 + hedge(4);
      item.frequency = 14 + hedge(4);
      item.stock = "ENOUGH";
  }

  console.log(`targetIndex is ${targetIndex} and the item is: `, item);

  return item;
}
