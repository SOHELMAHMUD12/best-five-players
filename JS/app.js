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

})

