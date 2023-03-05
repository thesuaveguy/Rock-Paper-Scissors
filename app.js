var computerChoice = document.getElementById("computer-choice");
var userChoice = document.getElementById("user-choice");
const displayResult = document.getElementById("result");
const options = ["Rock", "Paper", "Scissors"];


// document.querySelector('tryAgain').addEventListener('click',()=>{})




    document.querySelectorAll("button")[0].addEventListener("click", () => {
        var randomGenerator = options[Math.floor(Math.random() * 3)];
        document.querySelector('#user-choice').innerText = "Rock";
        document.querySelector('#computer-choice').innerText = randomGenerator;
        if (randomGenerator === 'Rock')
            document.querySelector('#result').innerText = "It's a tie!!!"
        else if (randomGenerator === 'Paper')
            document.querySelector('#result').innerText = "You lose !!! Better luck next time"
        else
            document.querySelector('#result').innerText = "You won !!!"

    });
    document.querySelectorAll("button")[1].addEventListener("click", (e) => {
        var randomGenerator = options[Math.floor(Math.random() * 3)];
        document.querySelector('#user-choice').innerText = "Paper";
        document.querySelector('#computer-choice').innerText = randomGenerator;
        if (randomGenerator === 'Paper')
            document.querySelector('#result').innerText = "It's a tie!!!"
        else if (randomGenerator === 'Scissors')
            document.querySelector('#result').innerText = "You lose !!! Better luck next time"
        else
            document.querySelector('#result').innerText = "You won !!!"


    });
    document.querySelectorAll("button")[2].addEventListener("click", (e) => {
        var randomGenerator = options[Math.floor(Math.random() * 3)];
        document.querySelector('#user-choice').innerText = "Scissors";
        document.querySelector('#computer-choice').innerText = randomGenerator;
        if (randomGenerator === 'Scissors')
        document.querySelector('#result').innerText = "It's a tie!!!"
    else if (randomGenerator === 'Rock')
        document.querySelector('#result').innerText = "You lose !!! Better luck next time"
    else
        document.querySelector('#result').innerText = "You won !!!"

    });


