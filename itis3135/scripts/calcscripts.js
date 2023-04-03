let index = 0;
let myNums = [];
myNums.push("");
let numString = "";
function displayNums(val) {
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
}

function calculate() {
    let product = 0;
    if (myNums.length == 0 || myNums.length == 2) {
        document.getElementById("displayText").innerHTML = "Nothing entered";
    }
    else {

        document.getElementById("displayText").innerHTML = eval(myNums.join(' '));
        // for (let i = 1; i + 1 < myNums.length; i += 2) {

        //     switch (myNums[i]) {
        //         case '*':
        //             myNums[i - 1] = parseInt((myNums[i - 1])) * parseInt(myNums[i + 1]);
        //             myNums[i + 1] = (myNums[i - 1]);
        //             alert(myNums[i+1]);
        //             break;
        //             case '/':
        //                 myNums[i - 1] = parseInt((myNums[i - 1])) / parseInt(myNums[i + 1]);
        //                 myNums[i + 1] = (myNums[i - 1]);
        //                 alert(myNums[i+1]);
        //             break;
        //     }
        // }

        // product = parseInt(myNums[0]);
        // for (let i = 1; i + 1 < myNums.length; i += 2) {
        //     (myNums.toString());
        //     switch (myNums[i]) {
        //         case '+':
        //             product += parseInt(myNums[i + 1]);
        //             break;
        //         case '-':
        //             product -= parseInt(myNums[i + 1]);
        //             break;
        //     }
        // }
        // alert(myNums.toString())
        // document.getElementById("displayText").innerHTML = "" + product;
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
