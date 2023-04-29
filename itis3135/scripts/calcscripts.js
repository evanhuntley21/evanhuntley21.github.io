let index = 0;
let myNums = [];
myNums.push("");
let numString = "";
let items = document.getElementsByClassName("calcbutton")
for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click", () =>{
    val = items[i].value
    alert(val)
    if (val == '+' || val == '-' || val == '*' || val == '/') {
        myNums.push(val);
        myNums.push("");
        numString += " " + val + " ";
        index += 2;
    }
    else {
        myNums[index] = myNums[index] + val;
        numString += "" + val;
    }
    document.getElementById("displayText").innerHTML = numString;
})

function calculate() {
    let product = 0;
    if (myNums.length == 0 || myNums.length == 2) {
        document.getElementById("displayText").innerHTML = "Nothing entered";
    }
    else {

        document.getElementById("displayText").innerHTML = eval(myNums.join(' '));
        myNums = [""]
        numString = "";
        index = 0;
    }
}
function clearmyarr() {
    myNums = [""];
    numString = "";
    document.getElementById("displayText").innerHTML = "";
    index = 0;
}
}
