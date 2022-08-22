const playerArray = [];
// console.log(playerArray)
function displayPlayer(playerName){
    const slectedPlayer = document.getElementById("player-name");
    slectedPlayer.innerHTML = "";
    console.log(slectedPlayer)

    for(let i = 0; i < playerName.length; i++){

        if (playerName.length > 5) {
            alert('player is not available');
            return;
            }
    
        const name = playerArray[i].playerName;
    console.log(name)
        const li = document.createElement("li");
    
        li.innerText = name;
        slectedPlayer.appendChild(li);
        

    }
}


function buyPlayer(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    console.log(playerName);

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
    console.log(newPlayerNameString);

    const www = document.getElementById('ee')
    const ccc = parseFloat(www.innerText);
        www.innerText = newPlayerName

})

document.getElementById('calculate-btn').addEventListener('click', function(){
    const coachName = document.getElementById('coach-cost');
    const newCoachNameString = coachName.value;
    const newCoachName = parseFloat(newCoachNameString);
   
    const managerName = document.getElementById('manager-cost');
    const newManagerNameString = managerName.value;
    const newManagerName = parseFloat(newManagerNameString);

    const qqqqq =  document.getElementById('aa')
    const ddd = parseFloat(qqqqq.innerText)
    qqqqq.innerText = newManagerName + newCoachName;

    console.log(ddd);
})


