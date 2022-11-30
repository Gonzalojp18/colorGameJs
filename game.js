let boxCard = document.querySelectorAll('.square');
let answer = document.querySelector('#message');
let colorDisplay = document.querySelector('#colorDisplay');
let colors = [];
let header = document.querySelector('.header')
let resetGame = document.querySelector('#reset')
let btnEasy = document.querySelector('#easyButton');
let btnHard = document.querySelector('#hardButton');
const play = document.querySelector('.playEasy');


function generatorRandomColor() {
    for (let i = 0; i<boxCard.length; i++) {
        colors.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
    }
}
generatorRandomColor()

function selectColor(){
    for(let i = 0; i < boxCard.length; i++){
        boxCard[i].style.backgroundColor = colors[i];
    }
}
selectColor();

const pickColor = () => {
    let colorRandom = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.innerHTML = `<div>${colorRandom}</div>`;
    return colorRandom;
}
pickColor()

const  changeColor = () => {
    const pickedColor = pickColor();
    for (let i = 0; i <boxCard.length; i++){
        boxCard[i].onclick = function () {
            let clickedColor = boxCard[i].style.backgroundColor;
            if(pickedColor === clickedColor){
                for(let j = 0; j < boxCard.length; j++){
                    boxCard[j].style.backgroundColor = pickedColor;
                    header.style.backgroundColor = pickedColor;
                    answer.textContent = 'Correct';
                    resetGame.textContent = 'Play Again';
                }
            }else{
                boxCard[i].style.backgroundColor = document.body.style.backgroundColor ;
                boxCard[i].classList.add('shadow');
                answer.textContent = 'Try Again';
            }
}
    }
}
changeColor();


const reset = () => {
    colors = [];
    generatorRandomColor();
    selectColor();
    changeColor();
    header.style.backgroundColor = '#e82516';
    resetGame.textContent = 'New Colors';
    answer.textContent = '';
}

resetGame.addEventListener('click', reset);

btnEasy.addEventListener("click", function(){
    play.style.display = "none";
    btnEasy.classList.toggle('.selected');
});
btnHard.addEventListener("click", function () {
    play.style.display = "block";
    btnHard.classList.toggle('.selected');
});





