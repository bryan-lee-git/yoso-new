import DailyUpdate from "./DailyUpdate";
import random from "./Random";
import PurchasesAPI from "../PurchasesAPI";

export default function goShopping(PantryId, time) {
  //time = the simulated shopping date.

  const Memory = [
    1, // perfect
    0.95, //excellent
    0.9, // great
    0.85, // good
    0.8, // average
    0.75, // challenged
    0.7 // bad
  ];

  const { waste, YOSO } = DailyUpdate(PantryId);

  const userList = [];

  const userMemory = random(Memory.length);

  function getAverage(num) {
    let total = total + num;
    let items = items + 1;
    return total / items;
  }

  //Step 1: Write the user's shopping list

  // Part One: Determine False Negatives

  YOSO.forEach(item => {
    const target = Math.random();
    if (target < userMemory) {
      userList.push(item);
    }
  });

  // Part Two: Determine False Positives

  pantry.forEach(item => {
    if (!YOSO.includes(item)) {
      const target = Math.random();
      if (target > userMemory) {
        userList.push(item);
      }
    }
  });

  // Step 2: Make purchases off of userList.

  userList.forEach(item => {
    const data = {
      createdAt: time,
      quantity: random(4),
      expiration: moment(time).add(random(item.shelfLife), "days"),
      PantryId: item.id
    };
    PurchasesAPI.createPurchase(data).then(response => console.log(response));
  });

  // Step 3: Update Pantry frequency. New frequency = average time between purchases.

  userList.forEach(item => {
    PurchasesAPI.getPurchases(PantryId).then(
      response =>
        (item.frequency = response.data.reduce(item =>
          getAverage(item.createdAt)
        ))
    );
  });
}
