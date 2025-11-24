function multiplication2(x, y) {
  let result = 0;
  for (let i = 0; i < x; i++) {
    result += y; // add y, x times
  }
  return result;
}

console.log(multiplication2(5, 4))
console.log(multiplication2(2, 8))
console.log(multiplication2(7, 6))