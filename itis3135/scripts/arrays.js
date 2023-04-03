let persons = ["Evan Huntley", "John Hathorne", "Giles Corey", "John Proctor", "Neil Huntley", "Abigail Williams", "Betty Paris"]
let salaries = [230000,125000,100000,78000,160000,130000,100000]

let dropDown = ""
focusFunc()

for(let i = 0; i < persons.length; i++){
    dropDown+= `<option value="${persons[i]}">${persons[i]}</option>`
}
document.getElementById("myEmployee").innerHTML = dropDown;


function viewEmployee()
{
    let employee = document.getElementById("myEmployee").value
    
    if(!(persons.includes(employee)))
    {
        document.getElementById("displayEmployee").innerHTML = "Employee does not exist"
        return
    }
    let tempIndex = 0;
    while(persons[tempIndex]  !== employee)
    {
        tempIndex++;
    }
    document.getElementById("displayEmployee").innerHTML = `${persons[tempIndex]} makes $${salaries[tempIndex]} per year.`

}
function displayResults(){
    let average = 0
    let largestSalary = salaries[0];
    let salaryPerson = persons[0]
    for(let i = 0; i < persons.length; i++ )
    {
        average+= parseInt(salaries[i])
        
        if (salaries[i] > largestSalary)
        {
            largestSalary = salaries[i]
            salaryPerson = persons[i]
        }
    }
    average = parseInt(average/persons.length)
    document.getElementById("displayAverageNotes").innerHTML = "Here are the average earnings and the highest earnings at Huntley Web Services. Click again to refresh when needed."
    document.getElementById("displayAverage").innerHTML = `The average salary at Huntley Web Services is $${average} per year.`
    document.getElementById("displayHighest").innerHTML = `The Highest earner at Huntley Web Services is ${salaryPerson}, with a salary of $${largestSalary} per year.`
}

function displaySalary(){
    let tablehtml = "<tr><th>Name</th><th>Salary</th></tr>"
    for(let i = 0; i<persons.length; i++){
        tablehtml+= `<tr><td>${persons[i]}</td><td>$${salaries[i]}</td></tr>`
    }
    document.getElementById("results_table").innerHTML = tablehtml
    
}
displaySalary()

function addSalary(){
    let salaryInput = document.getElementById("newSalary").value
    let myNameInput = document.getElementById("employeeName").value
    if(myNameInput != null && salaryInput != null && parseInt(salaryInput) > 0)
    {
        if(persons.includes(myNameInput))
        {
            let tempIndex = 0;
            while(persons[tempIndex]  !== myNameInput)
            {
                tempIndex++;
            }
            salaries[tempIndex] = salaryInput
        }
        else
        {
            console.log("made it here")
            persons.push(myNameInput)
            salaries.push(parseInt(salaryInput))
        }
        let myDropDown = ""
        for(let i = 0; i < persons.length; i++){
            myDropDown+= `<option value="${persons[i]}">${persons[i]}</option>`
        }
        document.getElementById("myEmployee").innerHTML = myDropDown;
        displaySalary()
    }
    else{
        alert("Input is invalid")
    }
    focusFunc()
}
function focusFunc()
{
    document.getElementById("myEmployee").focus()
}

