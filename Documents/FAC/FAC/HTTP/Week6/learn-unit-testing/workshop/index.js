// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

//Challenge 2
searchParamsToObject = (str) => {
  const params = new URLSearchParams(str);
  return Object.fromEntries(params);
}

//Challenge 3
isLeapYear = (year) => {
  if (year < 0) return "Please enter a positive number";
  else if (typeof year !== "number") return "Please enter a number";
  else if (year % 4 !== 0) return false;
  else if (year % 100 == 0 && year % 400 !== 0) return false;
  // else if (year % 400 == 0) return true;
  else {return true};
}