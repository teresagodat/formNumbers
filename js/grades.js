// Declaring the variable 

var numbers = [];
var sum = "";

//function to add each grade

function addGrade(){
  event.preventDefault();
  var newGrade = Number(document.gradeForm.grade.value);
  if (isNaN(newGrade)) {
    alert("Not a valid number");
  } else {
    numbers.push(newGrade);
    updateGrades();
  }
    document.gradeForm.grade.value = "";
}


//function to update the count, sum and average values for all grades

function updateGrades()
{
  var gradeCount = document.getElementById("count");
  gradeCount.innerHTML = numbers.length;
  var gradeSum = document.getElementById("sum");
  var gradeAverage = document.getElementById("average")
  if (numbers.length == 0) {
    gradeSum.innerHTML = "";
    gradeAverage.innerHTML = "";
  } else {
    var total = 0;
    var value;
    for (value of numbers) {
      total += value;
    }
    gradeSum.innerHTML = total;
    gradeAverage.innerHTML =(total / numbers.length);
  }
  
//Save for later. Need to figure out how to only have two decimals to display in the Average field calculation.  I tried the .toFixed(), but I couldn't get it to work. 
  
  
  
  // function to clear all of the values and start over  
function clearResults() {
  event.preventDefault();
  numbers = [];
  updateGrades();
  }
}

