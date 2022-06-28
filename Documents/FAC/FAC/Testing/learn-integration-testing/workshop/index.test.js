//Challenge 1
test("test add" , () => {
    const expected = 4
    const result = calculate(2, "+", 2)
    equal(expected, result)
}); 

test("test substract" , () => {
    const expected = 0
    const result = calculate(2, "-", 2)
    equal(expected, result)
}); 

test("test multiply" , () => {
    const expected = 4
    const result = calculate(2, "*", 2)
    equal(expected, result)
}); 

test("test divide" , () => {
    const expected = 1
    const result = calculate(2, "/", 2)
    equal(expected, result)
}); 

test("test for strings" , () => {
    const expected = 4
    const result = calculate("2", "+", "2")
    equal(expected, result)
}); 