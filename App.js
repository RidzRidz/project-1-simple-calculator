import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    { message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division", "Division"],
    },
]);
if (answer.operator = "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
if (answer.operator = "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
if (answer.operator = "Mutiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
if (answer.operator = "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
console.log("please select valid operator");
