function gameOfThrones(s) {
  let kata = s.split("").sort();
  let oddCounter = 0;
  let counter = 1;

  for (let i = 0; i < kata.length; i++) {
    if (kata[i] == kata[i + 1]) counter++;
    else {
      if (counter % 2 == 1) {
        oddCounter++;
        if (oddCounter > 1) return "NO";
      }
      counter = 1;
    }
  }
  return "YES";
}

console.log(gameOfThrones("kakaaka"));
