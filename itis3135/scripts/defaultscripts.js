

let date = new Date()
let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()
let min = date.getMinutes()
if(min < 10)
{
    min = "0"+min
}
let am_or_pm = ""
if(date.getHours() % 12 > 12)
{
    am_or_pm = "am"
}
else{
    am_or_pm = "pm"
}
let curr_time = date.getHours() % 12 + ":" + min + am_or_pm
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"]

document.getElementById("currDate").innerHTML = "Today is "+ curr_time + " on " + days[day] + ", " + day + " " + months[month] + ", " + year

let form = document.getElementById('myForm')
function myFunc()
{
    let myname = document.getElementById("myName").value
    document.getElementById("displayName").innerHTML = "Huntley Web Services welcomes you, " + myname + "!" 
    
    
    let myMood = document.getElementById("myMood").value
    document.getElementById("displayMood").innerHTML = "We're glad you are doing " + myMood + "!"
    
}

function addFunc()
{
    
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("sumF").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2)


}

function multFunc()
{
    
    let num1 = parseInt(document.getElementById("multNum1").value)
    let num2 = parseInt(document.getElementById("multNum2").value)
    document.getElementById("Product").innerHTML = "The product of " + num1 + " and " + num + " is " + (num1 * num2)


}
function divFunc()
{
    
    let num1 = parseInt(document.getElementById("divNum1").value)
    let num2 = parseInt(document.getElementById("divNum2").value)
    document.getElementById("Quotient").innerHTML = "The quotient of " + num1 + "/" + num2 + " is " + (num1 / num2) + " and the remainder is " + (num1 % num2)


}

function distFunc(){
    
    let x1 = parseInt(document.getElementById("x1").value)
    let x2 = parseInt(document.getElementById("x2").value)
    let y1 = parseInt(document.getElementById("y1").value)
    let y2 = parseInt(document.getElementById("y2").value)
    if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2))
    {
     return
    }

    let result = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
    result = result.toFixed(2)
    alert("here")
    document.getElementById("dist").innerHTML = "The distance between the two points is " + result

}
function ballFunc(){
    let q = document.getElementById("question").value
    if(q == "")
    {
     return
    }
    let my_options = ["Yes, of course!", "Without a doubt, yes.", "You can count on it.", "For sure!", "Ask me later.", "I'm not sure.", "I can't tell you right now", "I'll tell you after my nap.", "No way!", "I don't think so.", "Without a doubt, no.", "The answer is clearly No."]
    document.getElementById("ballq").innerHTML = "Question: " + q
    document.getElementById("ballr").innerHTML = "Response: " + my_options[Math.floor(Math.random() * 12)]
}
