import PurchasesAPI from "../PurchasesAPI";

export default function GetPurchases(PantryId) {
  let purchases = [];
  PurchasesAPI.getPurchases(PantryId).then(response => (purchases = response));
  return purchases;
}
