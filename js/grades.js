var numbers = [];
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

function clearResults() {
  event.preventDefault();
  numbers = [];
  updateGrades();
}

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
}

