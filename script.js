let numSquares = 6;
let colours = generateRandomColours(numSquares);
let pickedColour = pickColour();
let squares = document.querySelectorAll(".square");
let colourDisplay = document.getElementById("colourdisplay");
let displayMessage = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
// let easyBtn = document.getElementById("easybtn");
// let hardBtn = document.getElementById("hardbtn");
let modeButtons = document.querySelectorAll(".mode");
colourDisplay.textContent = pickedColour;
let failSoundArr = [];
let successSoundArr = [];
let stopSoundBtn = document.querySelector(".click-here");

resetButton.addEventListener("click", function () {
    reset();
});

for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
};

// easyBtn.addEventListener("click", function () {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colours = generateRandomColours(numSquares);
//     pickedColour = pickColour();
//     colourDisplay.textContent = pickedColour;
//     h1.style.backgroundColor = "steelblue"
//     for (let i = 0; i < squares.length; i++) {
//         if (colours[i]) {
//             squares[i].style.backgroundColor = colours[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colours = generateRandomColours(numSquares);
//     pickedColour = pickColour();
//     colourDisplay.textContent = pickedColour;
//     h1.style.backgroundColor = "steelblue"
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colours[i];
//         squares[i].style.display = "block";
//     }
// });

for (let i = 0; i < squares.length; i++) {
    // add initial colour to squares
    squares[i].style.backgroundColor = colours[i];

    // Add event listener to all squares
    squares[i].addEventListener("click", function () {
        let clickedColour = this.style.backgroundColor;

        // compare picked colour to clicked Colour
        if (pickedColour === clickedColour) {
            displayMessage.textContent = "Correct!"
            changeColour(clickedColour);
            h1.style.backgroundColor = clickedColour;
            resetButton.textContent = "Play Again?"
            playWinSound();
            stopWinSound();

        }
        else {
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "Try Again!"
            playFailSound();
        }
    });
};

stopSoundBtn.addEventListener("click", function () {
    console.log("You clicked me")
    failSoundArr.forEach(function (item) {
        item.pause();
    });
    successSoundArr.forEach(function (item) {
        item.pause();
    });
});

//  Initiating fail sounds
for (i = 1; i <= 8; i++) {
    failSoundDirectory = "Sounds/Fail sound" + " " + [i] + ".wav";
    let failSound = new Audio(failSoundDirectory);
    failSoundArr.push(failSound);
};
function playFailSound() {
    let j = Math.floor(Math.random() * 8);
    failSoundArr[j].play();
}

// Initializing Success beat
for (i = 1; i <= 6; i++) {
    successSoundDirectory = "Sounds/Success beat" + " " + [i] + ".wav";
    let winSound = new Audio(successSoundDirectory);
    successSoundArr.push(winSound);
};
function playWinSound() {
    let k = Math.floor(Math.random() * 6);
    successSoundArr[k].play();
}


function reset() {
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    h1.style.backgroundColor = "steelblue"
    displayMessage.textContent = "";
    resetButton.textContent = "New Colours";
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }

    }

};

function pickColour() {
    let random = Math.floor(Math.random() * colours.length);
    return colours[random];
};
function changeColour(colour) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
};
function randomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};
function generateRandomColours(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColour());
    };
    return arr;
};



//practicing how to produce random colour
// function wet() {
//     let j = [0, 1, 2, 3, 4, 5, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     let col = [];

//     for (let i = 0; i < 6; i++) {
//         col.push(j[Math.floor(Math.random() * 15)])
//     }

//     return "#" + col[0] + col[1] + col[2] + col[3] + col[4] + col[5];
// };
// let check = document.querySelector(".check")
// check.style.backgroundColor = wet();