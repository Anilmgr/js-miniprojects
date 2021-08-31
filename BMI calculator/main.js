let form = document.getElementById('bmiForm');

function calculateBMI(e){
    e.preventDefault();
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let result = document.getElementById('result');

    if(height=="" || weight==""){
        alert("Please provide valid height & weight!!")
        return
    }

    let bmi = (weight/((height*height)/10000)).toFixed(2);
    result.classList.remove("text-success","text-warning");

    if(bmi >= 18.5 && bmi <= 25){
        result.classList.add("text-success");
    } else {
        result.classList.add("text-warning");
    }
    result.innerText = bmi;
}

form.onsubmit = calculateBMI;