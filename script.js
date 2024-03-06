console.log("hi");
//p tags, score board
const correctBox = document.getElementById("green-box");
const wrongBox = document.getElementById("red-box");
const text = document.getElementById("heading");
const pingSound = document.getElementById("ping");
const fartSound = document.getElementById("fart");
let greenClicks = 0;
let redClicks = 0;
//find all divs with class of box
const boxes = document.querySelectorAll(".box");
//mouseover box changes cursor to pointer
boxes.forEach(box => {
    box.addEventListener('mouseover', function(){
        if(box.classList.contains('box')){
            box.style.cursor = "pointer";
        }
    })
});
//adding ping sound effect to green box
boxes.forEach(box => {
    box.addEventListener('click', function(){
        if(box.classList.contains('green')){
            pingSound.play();
        }
    })
});
//adding fart sound effect to red box
boxes.forEach(box => {
    box.addEventListener('click', function(){
        if(box.classList.contains('red')){
            fartSound.play();
        }
    })
});
//loop through the boxes and add an event listener to each
boxes.forEach(box => {
    box.addEventListener('click', (event) => {
        //if the box has the class of green, change to "lawngreen" e.g class="green box" means box is green
        if (box.classList.contains('green')){
            //change background colour to lawngreen
            box.style.backgroundColor = "lawngreen";
            handleGreenBox();
            //if the box has the class of red, change background colour to "red" e.g class="red box" means box is red
        }else if(box.classList.contains('red')){
            box.style.backgroundColor = "red";
            handleRedBox();
        }
        // remove event listener after clicked once
        event.target.removeEventListener(event.type, argument.calee);
     }, {once: true})
});
//update scoreboard

function displayScoreBoard(){
    correctBox.textContent = `${greenClicks}`;
    wrongBox.textContent = `${redClicks}`;
}

function handleGreenBox(){
    greenClicks++
    displayScoreBoard();
    if(greenClicks == 3 ){
        text.innerText = `You Won 🥳`;

    }
};

function handleRedBox(){
    redClicks++
    displayScoreBoard();
    if(redClicks == 10){
        text.innerText = `You Lose 😞`;
    }
};




