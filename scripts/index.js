const changeColorBtn = document.querySelector('#changeColorBtn');
const changeColor = document.querySelector('#changeColor');
const showColor = document.querySelector('#showColor');

function randomColor() {
    let rgbValues = [];

    for (let i = 0; i < 3; i++) {
        rgbValues[i] = Math.floor(Math.random() * 255);
    }

    return `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
}

changeColorBtn.addEventListener('click', function() {
    let color = randomColor();
    changeColor.style.color = color;
    showColor.innerHTML = "Color is: " + color;
});
