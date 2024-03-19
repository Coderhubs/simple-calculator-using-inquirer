#! /usr/bin/env node

import inquirer from 'inquirer';
//[{}] Array
const answer = await inquirer.prompt([
 {message: "Enter First number" , type: "number", name: "firstNumber"},
{ message: "Enter second number" , type: "number", name: "SecondNumber"},

{ 
    message:"Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction" , "Multiplication" , "Division"]
}

]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
        console.log(answer.firstNumber / answer.SecondNumber);
    
}
else{
    console.log("select valid operator");
}