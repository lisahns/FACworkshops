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
  if (year % 4 == 0) return true;
  if (year % 100 == 0) return false;
  if (year % 400 == 0) return true;
  if (year < 0) return "Please enter a positive number";
  if (year == "") return "Please enter a number";
}