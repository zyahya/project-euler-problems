function multiplesOf3Or5(number) {
  let result = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }

  return result;
}

console.log(multiplesOf3Or5(1000));
