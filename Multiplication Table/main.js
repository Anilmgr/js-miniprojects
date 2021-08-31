let form = document.getElementById('multiplyForm');

function showTable(e){
    e.preventDefault();
    let num = document.getElementById('num').value;
    let result = document.getElementById('result');

    if(num==""){
        alert("Please provide a number!!")
        return
    }

    let table = "<h5 class='text-primary'> Multiplication table of "+num+"</h5>";

    for(let i=1; i<=10; i++){
        table+= `${num} * ${i} = ${num*i} <br>`; // table += num +'*'+ i +'='+ (num*i) + '<br>;
    }

    result.innerHTML = table;

}

form.onsubmit = showTable;