const playerArray = [];

function displayPlayer(playerName){
    const slectedPlayer = document.getElementById("player-name");
    slectedPlayer.innerHTML = "";
    

    for(let i = 0; i < playerName.length; i++){
        if (playerName.length > 5){
            alert('player is not available');
            return;
        }
            
        const name = playerArray[i].playerName;
        const li = document.createElement("li");
        li.innerText = name;
        slectedPlayer.appendChild(li);
    }
}

function buyPlayer(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerObj = {
        playerName : playerName,
    }

    playerArray.push(playerObj);
    displayPlayer(playerArray);
}

// start calculator

document.getElementById('player-per').addEventListener('click', function(){
    const playerName = document.getElementById ('player-btn');
    const newPlayerNameString = playerName.value;
    const newPlayerName = parseFloat(newPlayerNameString);
    
    const playerExpenses = document.getElementById('playerExpenses');
    const playerExpensesAmaount = parseFloat(playerExpenses.innerText);
    playerExpenses.innerText = newPlayerName * playerArray.length;
        

})

document.getElementById('calculate-btn').addEventListener('click', function(){
    const coachName = document.getElementById('coach-cost');
    const newCoachNameString = coachName.value;
    const newCoachName = parseFloat(newCoachNameString);
   
    const managerName = document.getElementById('manager-cost');
    const newManagerNameString = managerName.value;
    const newManagerName = parseFloat(newManagerNameString);

    const playerExpenses = document.getElementById('playerExpenses');
    const playerExpensesAmaount = parseFloat(playerExpenses.innerText);

    const total =  document.getElementById('total');
    const totalAmount = parseFloat(total.innerText);
    total.innerText = newManagerName + newCoachName + playerExpensesAmaount ;

    
})

