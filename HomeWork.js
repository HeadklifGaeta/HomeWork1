const gameField = document.getElementById("field");
let move = 0;
let result = " ";
const message = document.getElementById("content");
const gameResult = document.getElementById('winnerWindow');
const overlay = document.getElementById('overlay');
const window_close = document.getElementById('windowCloser');

var elem = document.getElementsByClassName('game-field-sell');

sell_hw.oninput = function() {
for (var i=0, len=elem.length; i<len; i++) {
        elem[i].style["height"] = this.value + 'px';
        elem[i].style["width"] = this.value + 'px';
}
}

gameField.addEventListener("click", e => {
        if (e.target.classList.contains("game-field-sell")) {
            move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = "O";
            move++;
            check();
        }
    })
    const check = () => {
        const fields = document.getElementsByClassName("game-field-sell");
        const arr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
           ];
           outer: for(i = 0; i < arr.length; i++) {
               if(
                   fields[arr[i][0]].innerHTML == "X" && 
                   fields[arr[i][1]].innerHTML == "X" && 
                   fields[arr[i][2]].innerHTML == "X"
               ){
                   result = "крестики";
                   preResult(result);

               } else if (
                   fields[arr[i][0]].innerHTML == "O" && 
                   fields[arr[i][1]].innerHTML == "O" &&
                   fields[arr[i][2]].innerHTML == "O"
                ) {
                    result = 'нолики'
                    preResult(result);
                }
           }
    }
const preResult = winner => {
    message.innerHTML = `Победили ${winner} !`;
    gameResult.style.display = 'block';
}

const closeGame = () => {
    gameResult.style.display = 'none';
    location.reload();
}
overlay.addEventListener("click", closeGame);
window_close.addEventListener("click", closeGame);