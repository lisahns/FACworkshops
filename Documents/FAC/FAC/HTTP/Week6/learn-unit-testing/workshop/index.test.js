  //challenge 1
  test("returns correct Url", () => {
    const result = makeUrl("pikachu");
    const expected = "https://pokeapi.co/api/v2/pikachu";
    equal(result, expected, "makeUrl(pikachu) should return https://pokeapi.co/api/v2/pikachu");
  });

  //Challenge 2
  test("returns object", () => {
      const result = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
      const expected = { name: "oliver", email: "hello@oliverjam.es" };
    //   equal(result, expected)
    equal(result.name, expected.name);
    equal(result.email, expected.email);
  })

  //Challenge 3
  test("check for leap year", () => {
      const result = isLeapYear(2040);
      const expected = true;
      equal(result, expected, "2040 is a leap year");

      const result1 = isLeapYear(1900);
      const expected1 = false;
      equal(result1, expected1, "1900 is not a leap year");

      const result2 = isLeapYear(-20);
      const expected2 = "Please enter a positive number";
      equal(result2, expected2, "Please enter a positive number");

      const result3 = isLeapYear("Hello");
      const expected3 = "Please enter a number";
      equal(result3, expected3, "Please enter a number");

      const result4 = isLeapYear(2000);
      const expected4 = true;
      equal(result4, expected4, "2000 is a leap year");
  })