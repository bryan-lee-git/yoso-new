import { GetPurchases } from "./GetPurchases"; // This function calls the db and gets all the purchases for the supplied PantryId
import moment from "moment";

export default function DailyUpdate(pantry) {
  const now = moment();
  let waste = [];
  let YOSO = [];
  // Step 1: Update stock for each itemm in the pantry
  pantry.forEach(item => {
    const purchases = GetPurchases(item.id);
    if (purchases[0] > item.frequency) {
      item.stock = "OUT";
    } else if (purchases[0] > item.frequency * 2) {
      item.stock = "LOW";
    } else {
      item.stock = "ENOUGH";
    }
    // Step 2: Determine whether the current stock is WASTE.

    const dangerStock = pantry.filter(item => item.stock !== "OUT");
    dangerStock.forEach(item => {
      if (now - purchases[0].createdAt > item.shelfLife) {
        waste.push(item);
      }
    });
  });
  //Step 3: If item's stock is not ENOUGH, add to YOSO shopping list.
  YOSO = purchases.filter(item => item.stock !== "ENOUGH");
  return { waste, YOSO };
}
