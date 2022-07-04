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
//concatenates numbers

//Challenge 2
test("calculate user input and update the page" , () => {
    const input1 = document.getElementById("a");
    input1.value = "2";
    const input2 = document.getElementById("b");
    input2.value = "3";
    const sign = document.querySelector("select");
    sign.value = "+";
    const submitButton = document.querySelector("button[type='submit']");
     submitButton.click();
     const result = document.querySelector("#result");
     console.log(typeof(result));
     equal(result.textContent, "5"); 
     result.value = "";
})

//why are they passed as strings??
//why is typeof object?
//querySelector vs getElementById
