const selectionButtons = document.querySelectorAll('.hand');
const final_column = document.querySelector('[final-column]');
const userScore = document.querySelector('[your-score]');
const computerScore = document.querySelector('[computer-score]');

const selections = [
    {
        name : 'rock',
        emoji : '✊',
        beats : 2
    }, 

    {   name : 'paper',
        emoji : '🖐️',
        beats : 0
    },

    {
        name : 'scissors',
        emoji : '✌️',
        beats : 1
    }
]


selectionButtons.forEach(selection => {
    selection.addEventListener('click',function(e){
        const userSelection = Number(selection.getAttribute('index'));
        makeSelection(userSelection);
    })
});

function computerSelect(){
    return Math.floor(Math.random()*3);
}

function makeSelection(userSelection){
    const computerSelection = Number(computerSelect());
    const computerWinner = isWinner(computerSelection,userSelection);
    const userWinner = isWinner(userSelection,computerSelection);
    console.log("Computer : "+computerSelection + " User : "+ userSelection)
    console.log("Computer : "+computerWinner + " User : "+ userWinner)
    addSelectionResult(computerSelection,computerWinner);
    addSelectionResult(userSelection,userWinner);
    if(userWinner) 
    userScore.innerText = Number(userScore.innerText)+1;
    if(computerWinner) 
    computerScore.innerText =Number(computerScore.innerText)+1;

}

function isWinner(i,j){
    return selections[i].beats === j;
}

function addSelectionResult(i,winner){
    const div = document.createElement('div');
    div.innerText = selections[i].emoji;
    div.classList.add('result-selection');
    if(winner) 
    div.classList.add('winner');
    else
    div.classList.add('looser');
    final_column.after(div);
}

