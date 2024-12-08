// Coding Steps:

// All questions should be printed to your Browser's console using console.log()



// My code here:

console.log("Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.")
console.log("   Question 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array. ")
// Create ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log("Ages", ages) 
    let minusAge = ages[ages.length - 1] - ages[0]; 
// Result of 93 - 3. Since ages[ages.length - 1] gives me the last element in the array, and ages[0] the first. 
    console.log("Result of question 1:", minusAge) // Expected result 93

console.log("   Question 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). ")
// Add 88 to ages array
ages.push(88);
console.log("New Ages", ages) //Expected result = 85
    let plusAge = ages[ages.length - 1] - ages[0];
    // Result of 88 - 3. Since ages[ages.length - 1] gives me the last element in the array, and ages[0] the first. 
    console.log("Result of question 1:", plusAge) // Expected result 85

console.log("   Question 1c. Use a loop to iterate through the array and calculate the average age.")
// Use a for loop to calculate the average. Intialize sum variable to 0. 
let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
// Calculating the actual averate by taking the sum of the ages and dividing by the length of the array.
let average = (sum / ages.length).toFixed(2);
console.log("Average age:", average);

// <<<<<<-------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>
console.log("Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'. ")

// My code here:
// Create `names` array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

console.log("     Question 2a. Use a loop to iterate through the array and calculate the average number of letters per name.")

let totalCharacters = 0;
for (let i = 0; i < names.length; i++){
//  console.log(i, "test")
    totalCharacters += names[i].length
    console.log("Index:", i, "Name: ", names[i], "Total Characters: ", totalCharacters)
}
//  Create new variable let that equal to total Characters divided by the length of each name. 
    let averageName = totalCharacters / names.length;
    console.log("Average number of letters per name: ", averageName) // 3.83 is expected answer

console.log("     Question 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.")

//    Create a blank string to begin, then reference later.
let namesConcat = "";
for (let i = 0; i < names.length; i++) {
//    console.log(i, "test")
//    Now assigning the expression to concat the names, then I added a comma and space after each addition.  
namesConcat = namesConcat.concat(names[i] + ", ")
console.log(i, "Concatenated names: ", namesConcat); 
}

console.log("Question 3: How do you access the last element of any array?")

// To access the last element of the array, I use dot notation `array.length - 1` to subract 1 from length, since arrays initialize at 0.
// You could either create a variable 'lastElement', or console.log names[names.length -1 ]

console.log('Last element in this array:', names[names.length - 1])

console.log("Question 4: How do you access the first element of any array?")

// This time I'll create a variable called `firstElement` to access the Sam.
let firstElementArray = names[0]
console.log('First element in this array is: ', firstElementArray)

console.log("Question 5: Create a new array called nameLengths. \n Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.")

// Create new array nameLengths. Same as before with the for loop, but this time we calculate its length using .length and add (push) this value to the nameLengths array.
let nameLengths = []
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log('Array Name Lengths:', nameLengths);

console.log("Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array")

// Using the for loop again and using nameLengths.push to add length to the end of the nameLengths array.

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated \n to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').")

// My code here:

function wordRepeat(word, n) {
    return word.repeat(n);
}

console.log(wordRepeat('こんにちは', 4));




console.log("Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.\n The full name should be the first and the last name separated by a space.")

// Created a function called firstLastName and using template literals to return both 
// parameters and auto-concatenate them. Makes it more easily readable too.
function firstLastName(firstName, LastName){
    return `${firstName} ${LastName}`;
}
// logging the function and putting in 2 arguments for the full name.
console.log(firstLastName("Maximus Decimus", "Meridius"));

console.log("Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. ")

// Creating test arrays
let numbers1 = [44, 55, 66, 77, 88]
let numbers2 = [4,5,6,7,8]

// Creating function with placeholder "array" as an parameter. The `for` loop will cycle through each element in the array and add the sum. 
function arrayNumberSum(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
    sum += array[i]
    console.log("Total: ", sum);
}
    if (sum > 100) {
        return true
        console.log(true);
    } else{
        return false
    }

}

// Logging the function and using numbers1 as the argument.
console.log(arrayNumberSum(numbers1));
 

console.log("Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.")

//Create array and define total as 0
function calculateNumbersAverage(array) {
    let total = 0;
//Create for loop to cycle through all the array of numbers in the function.
    for (let i = 0; i < array.length; i++) {
       // console.log(i, "Testing");
       total += array[i]  
       console.log("Calculate Function Total: ",total);  
    }
//Create a new variable 'average' to calculate average by array.length by the total.
    let average = total / array.length
    console.log("Average of numbers: ", average)
}

calculateNumbersAverage(numbers2)

console.log("Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements \n in the first array is greater than the average of the elements in the second array.")

// create 2 new arrays.
let numbers3 = [99, 100, 101, 102]
let numbers4 = [98, 99, 100, 101]

// create a function called 'average of two arrays, and '
function averageOfTwoArrays(array1, array2) {
    console.log('Parameters: ',array1, array2);
    let total1 = 0;
    let total2 = 0;
// A for of loop to declare "for every number of the array1", do the following:
 for (const number of array1) {
    total1 += number
    console.log("Current number: ", number, "Total 1: ", total1);
} 
// Same for array 2
for (const number of array2) {
    total2 += number
    console.log("Current number: ", number, "Total 2: ", total2);
}
// declare new variable for the average of the sum of each array
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;
console.log("Average 1 :", average1, "Average 2 :", average2);

// else if statement to print either true, false, or equal.
if (average1 > average2){
   console.log("Right on the money: ", true);
   return true
} else if (average1 < average2) {
    console.log("Answer unlikely: ", false);
   return false
} else if (average1 === average2) {
    console.log("They're equal!");
} 
}


averageOfTwoArrays(numbers3, numbers4)
 
console.log("Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, \n and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.")

// Create function with both parameters.
function willBuyDrink(isHotOutside, moneyInPocket){
// Log the parameters, and define the variable buyDrink to equal 'is hot outside'  and I more than $10.50 in my pocket.
console.log("Parameters: ", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink?: ", buyDrink);
return buyDrink
} 

// declare to arguments for the function. In this case, we can buy a drink.
willBuyDrink(true, 19)

console.log("Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.")

// I am creating a function willWashCar that takes a boolean 'isDirty', and a second boolean 'isShady', and number 'outsideTemp' is it less than 70 degrees F.
// This function will help me decide wether it is an ideal condition to wash my car in my driveway.

function willWashCar(isDirty, isShady, outsideTemp){
// Logging the 3 parameters
console.log("Parameters: ", isDirty, isShady, outsideTemp);
let washCar = isDirty === true && isShady === true && outsideTemp < 70;
console.log(("Wash my car:", washCar));
return washCar
} 

// declare to arguments for the function. In this case, we can buy a drink.
willWashCar(true, true, 68)

