const computerChoice=document.getElementById('computer-choice');
const userChoice=document.getElementById('user-choice');
const result=document.getElementById('result')
const possibleChoices=document.querySelectorAll('button');
let selectedChoice;
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    computerChoice=(possibleChoices[Math.floor(Math.random()*3)]).innerText;
usersChoice=e.target.id;
document.querySelector('user-choice').innerText=usersChoice;
document.querySelector('computer-choice').innerText=computerChoice;



}))
