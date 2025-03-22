// Selecting elements properly
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let Add = document.getElementById("add");
let Sub = document.getElementById("sub");
let Mul = document.getElementById("mul");
let Div = document.getElementById("div");
let ans = document.getElementById("ans");
let activeInput = num1; // Default to num1
// Select which input field is active when clicked
num1.onclick = () => activeInput = num1;
num2.onclick = () => activeInput = num2;

// Insert number into the active input field
function insertNumber(value) {
    activeInput.value += value;
}

// Clear both input fields
function clearInput() {
    num1.value = "";
    num2.value = "";
    activeInput = num1;
    ans.innerHTML = '0'
}
function switch_num2(){
    activeInput = num2;
}

// Correct event handlers
function add() {
    let result = Number(num1.value) + Number(num2.value);
    ans.innerHTML = result;
}
Add.onclick = add;

function sub() {
    let result = Number(num1.value) - Number(num2.value);
    ans.innerHTML = result;
}
Sub.onclick = sub;

function mul() {
    let result = Number(num1.value) * Number(num2.value);
    ans.innerHTML = result;
}
Mul.onclick = mul;

function div() {
    if (Number(num2.value) === 0) {
        ans.innerHTML = "Cannot divide by zero";
    } else {
        let result = Number(num1.value) / Number(num2.value);
        ans.innerHTML = result;
    }
}
Div.onclick = div;
