let button = document.getElementById('colorBtn');

function changeColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16); // color hex code
    document.body.style.backgroundColor = `#${randomColor}`; // '#' + randomColor
    document.getElementById('colorCode').value = `#${randomColor}`;
}

changeColor();

button.onclick = changeColor;