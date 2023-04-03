function getShape(){
    let numPoly = document.getElementById("polyNum").value
    if(numPoly == "")
    {
     return
    }
    if(validateEntry(numPoly))
    {
        const polyArr = ["Point","Henagon","Digon","Trigon","Tetragon","Pentagon","Hexagon","Heptagon","Octagon","Nonagon","Decagon"]
        document.getElementById("polyType").innerHTML = "This is a " + polyArr[Math.ceil(Math.abs(parseInt(numPoly)))]
    }
    else{
        document.getElementById("polyType").innerHTML = "Input is invalid"
    }
}
function validateEntry(polyInput){
    return Math.abs(parseInt(polyInput)) <= 10
}