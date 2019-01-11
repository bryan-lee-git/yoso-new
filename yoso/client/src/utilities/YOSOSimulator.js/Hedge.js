import random from "./Random";
export default function hedge(numb) {
  return random(100) > 50 ? random(numb) : 0 - random(numb);
}
