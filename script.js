let button = document.querySelectorAll(".button");
let popup = document.querySelector(".popup");
let newgame = document.getElementById("new-game");
let restart = document.getElementById("restart");
let message = document.getElementById("message");

let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let xTurn = true;
let count = 0;

const disableButtons = () => {
    button.forEach((element) => (element.disabled = true));
    popup.classList.remove("hide");
};

const enableButtons = () => {
    button.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    popup.classList.add("hide");
};

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        message.innerHTML = "<br> X հաղթեց";
    } else {
        message.innerHTML = "<br> O հաղթեց";
    }
};

const drawFunction = () => {
    disableButtons();
    message.innerHTML = "<br> Ոչ-ոքի";
};

newgame.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

restart.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = i.map(index => button[index].innerText);
        if (element1 && element1 === element2 && element2 === element3) {
            winFunction(element1);
        }
    }
};

button.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        winChecker();
    });
});

window.onload = function () {
    enableButtons();
};

