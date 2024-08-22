let player1;
let userChoice;
let computerSelect;
let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');
let span = document.getElementById('turn');
let gameSection = document.getElementById('gameSection');
let gamePart = document.getElementById('gamePart');
let player2 = 'Computer';
let winnerSpan = document.getElementById('winner');
let playerSection = document.getElementById('playerSection');




while (!player1) {
    player1 = prompt("Enter your name");
}

while(true){
    userChoice = prompt("Enter Your Choice You Want X'S or 0'S");
    if(userChoice.toUpperCase() === 'X'){
        userChoice = userChoice.toUpperCase();
        computerSelect = '0';
        break;
    }
    if(userChoice === '0'){
        computerSelect = 'X';
        break;
    }
}

let embed = document.createElement('embed');
embed.src = "./SONG/stranger-things-124008.mp3";
embed.style.visibility = 'hidden';

let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let cell = ['cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8', 'cell9'];
let display = ['userCell0', 'userCell1', 'userCell2', 'userCell3', 'userCell4', 'userCell5', 'userCell6', 'userCell7', 'userCell8']

function updateDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'X' || arr[i] === '0') {
            document.getElementById(display[i]).innerText = arr[i];
        }
    }
}

// COMPUTER BARIN FUNCTION IS TO FIND THE WRITE POSITION WHERE COMPUTER CAN win or block the enimey

function computerBrain(arr) {
    // computer winning
    if (computerSelect === arr[0] && computerSelect === arr[1]) {
        return '2';
    }
    else if (computerSelect === arr[0] && computerSelect === arr[2]) {
        return '1';
    }
    else if (computerSelect === arr[1] && computerSelect === arr[2]) {
        return '0';
    }
    else if (computerSelect === arr[2] && computerSelect === arr[5]) {
        return '8';
    }
    else if (computerSelect === arr[2] && computerSelect === arr[8]) {
        return '5';
    }
    else if (computerSelect === arr[5] && computerSelect === arr[8]) {
        return '2';
    }
    else if (computerSelect === arr[6] && computerSelect === arr[7]) {
        return '8';
    }
    else if (computerSelect === arr[6] && computerSelect === arr[8]) {
        return '7';
    }
    else if (computerSelect === arr[7] && computerSelect === arr[8]) {
        return '6';
    }
    else if (computerSelect === arr[0] && computerSelect === arr[3]) {
        return '6';
    }
    else if (computerSelect === arr[0] && computerSelect === arr[6]) {
        return '3';
    }
    else if (computerSelect === arr[3] && computerSelect === arr[6]) {
        return '0';
    }
    else if (computerSelect === arr[0] && computerSelect === arr[4]) {
        return '8';
    }
    else if (computerSelect === arr[0] && computerSelect === arr[8]) {
        return '4';
    }
    else if (computerSelect === arr[4] && computerSelect === arr[8]) {
        return '0';
    }
    else if (computerSelect === arr[2] && computerSelect === arr[4]) {
        return '6';
    }
    else if (computerSelect === arr[2] && computerSelect === arr[6]) {
        return '4';
    }
    else if (computerSelect === arr[4] && computerSelect === arr[6]) {
        return '2';
    }
    else if (computerSelect === arr[1] && computerSelect === arr[4]) {
        return '7';
    }
    else if (computerSelect === arr[1] && computerSelect === arr[7]) {
        return '4';
    }
    else if (computerSelect === arr[4] && computerSelect === arr[7]) {
        return '1';
    }
    else if (computerSelect === arr[3] && computerSelect === arr[4]) {
        return '5';
    }
    else if (computerSelect === arr[3] && computerSelect === arr[5]) {
        return '4';
    }
    else if (computerSelect === arr[4] && computerSelect === arr[5]) {
        return '3';
    }

    // OTHER TO CHOOSE

    else if (userChoice === arr[0] && userChoice === arr[1]) {
        return '2';
    }
    else if (userChoice === arr[0] && userChoice === arr[2]) {
        return '1';
    }
    else if (userChoice === arr[1] && userChoice === arr[2]) {
        return '0';
    }
    else if (userChoice === arr[2] && userChoice === arr[5]) {
        return '8';
    }
    else if (userChoice === arr[2] && userChoice === arr[8]) {
        return '5';
    }
    else if (userChoice === arr[5] && userChoice === arr[8]) {
        return '2';
    }
    else if (userChoice === arr[6] && userChoice === arr[7]) {
        return '8';
    }
    else if (userChoice === arr[6] && userChoice === arr[8]) {
        return '7';
    }
    else if (userChoice === arr[7] && userChoice === arr[8]) {
        return '6';
    }
    else if (userChoice === arr[0] && userChoice === arr[3]) {
        return '6';
    }
    else if (userChoice === arr[0] && userChoice === arr[6]) {
        return '3';
    }
    else if (userChoice === arr[3] && userChoice === arr[6]) {
        return '0';
    }
    else if (userChoice === arr[0] && userChoice === arr[4]) {
        return '8';
    }
    else if (userChoice === arr[0] && userChoice === arr[8]) {
        return '4';
    }
    else if (userChoice === arr[4] && userChoice === arr[8]) {
        return '0';
    }
    else if (userChoice === arr[2] && userChoice === arr[4]) {
        return '6';
    }
    else if (userChoice === arr[2] && userChoice === arr[6]) {
        return '4';
    }
    else if (userChoice === arr[4] && userChoice === arr[6]) {
        return '2';
    }
    else if (userChoice === arr[1] && userChoice === arr[4]) {
        return '7';
    }
    else if (userChoice === arr[1] && userChoice === arr[7]) {
        return '4';
    }
    else if (userChoice === arr[4] && userChoice === arr[7]) {
        return '1';
    }
    else if (userChoice === arr[3] && userChoice === arr[4]) {
        return '5';
    }
    else if (userChoice === arr[3] && userChoice === arr[5]) {
        return '4';
    }
    else if (userChoice === arr[4] && userChoice === arr[5]) {
        return '3';
    }
    else {
        return '';
    }
}
// COMPUTER CHOICE CHECK THE POSITION WHERE THE X OR 0 ARE TO BE INSERTED THE POSITION SHOULD BE EMPTY
function computerChoice(arr) {
    let index = computerBrain(arr);
    let count = 0;
    let num;
    if (index && (!(arr[parseInt(index)] === 'X' || arr[parseInt(index)] === '0'))) {
        return index;
    }
    else {
        while (true) {
            num = parseInt(Math.random() * 9);
            count++;
            if (!(arr[num] === 'X' || arr[num] === '0')) {
                return num;
            }
            else if (count === 9) {
                break;
            }

        }
    }
}

// COMPUTER ENTER THE FUNCTION INSERT THE VALUE IN THE GIVEN INDEX
function computerEnter() {
    let num = computerChoice(arr);
    let element = document.getElementById(cell[parseInt(num)]);
    element.innerText = computerSelect;
    if(computerSelect === 'X'){
        element.style.color = 'green';
    }
    else{
        element.style.color = 'white';
    }
    val = userChoice;
    arr[parseInt(num)] = computerSelect;
    span.innerText = player1 + ' turn ' + ' with ' + " " + userChoice;
    winner();
}



let noWinner = true;
// no Empty cell function check the cell is empty or not
let noEmptyCell = () => {
    let count = 0;
    for (let i in arr) {
        if (arr[i] === 'X' || arr[i] === '0') {
            count++;
        }
    }
    if (count === 9) {
        return true;
    }
    else {
        return false;
    }
}

// to check winner 
function winner() {
    updateDisplay(arr);
    if (arr[0] === userChoice && arr[1] === userChoice && arr[2] === userChoice) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player1;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';

    }
    else if (arr[0] === computerSelect && arr[1] === computerSelect && arr[2] === computerSelect) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player2;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[2] === userChoice && arr[5] === userChoice && arr[8] === userChoice) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player1;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[2] === computerSelect && arr[5] === computerSelect && arr[8] === computerSelect) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player2;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[6] === userChoice && arr[7] === userChoice && arr[8] === userChoice) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player1;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[6] === computerSelect && arr[7] === computerSelect && arr[8] === computerSelect) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player2;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[0] === userChoice && arr[3] === userChoice && arr[6] === userChoice) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player1;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[0] === computerSelect && arr[3] === computerSelect && arr[6] === computerSelect) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player2;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[0] === userChoice && arr[4] === userChoice && arr[8] === userChoice) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player1;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[0] === computerSelect && arr[4] === computerSelect && arr[8] === computerSelect) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player2;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[2] === userChoice && arr[4] === userChoice && arr[6] === userChoice) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player1;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[2] === computerSelect && arr[4] === computerSelect && arr[6] === computerSelect) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player2;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[1] === userChoice && arr[4] === userChoice && arr[7] === userChoice) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player1;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[1] === computerSelect && arr[4] === computerSelect && arr[7] === computerSelect) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player2;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[3] === userChoice && arr[4] === userChoice && arr[5] === userChoice) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player1;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (arr[3] === computerSelect && arr[4] === computerSelect && arr[5] === computerSelect) {
        noWinner = false;
        document.body.append(embed);
        winnerSpan.innerText = 'winner is ' + player2;
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
        // gamePart.innerText = 'GAME OVER';
    }
    else if (noWinner === noEmptyCell()) {
        document.body.append(embed);
        winnerSpan.innerText = 'tie!';
        gamePart.style.display = 'none';
        playerSection.style.display = 'block';
    }
    else{
        console.log('ok');
    }

}

// this check function check the cell is empty or not
function check(index) {
    if (arr[index] === 'X' || arr[index] === '0') {
        return false;
    }
    else {
        return true;
    }
}

span.innerText = player1 + ' turn ' + ' with ' + " " + userChoice;
let val = 'X';
function forCell1() {
    if (val === userChoice) {
        if (check(0)) {
            // val = computerSelect;
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[0] = userChoice;
            if(userChoice === 'X'){
                cell1.style.color = 'green';
            }
            else{
                cell1.style.color = 'white';
            }
            cell1.innerText = userChoice;
            // cell1.style.color = 'green';
            winner();
            computerEnter();
        }
    }
    else {
        if (check(0)) {
            if(userChoice === 'X'){
                cell1.style.color = 'green';
            }
            else{
                cell1.style.color = 'white';
            }
            // val = userChoice;    
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[0] = userChoice;
            cell1.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}
function forCell2() {
    if (val === userChoice) {
        if (check(1)) {
            if(userChoice === 'X'){
                cell2.style.color = 'green';
            }
            else{
                cell2.style.color = 'white';
            }
            // val = computerSelect;
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[1] = userChoice;
            cell2.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
    else {
        if (check(1)) {
            if(userChoice === 'X'){
                cell2.style.color = 'green';
            }
            else{
                cell2.style.color = 'white';
            }
            val = userChoice;
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[1] = userChoice;
            cell2.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}
function forCell3() {
    if (val === userChoice) {
        if (check(2)) {
            if(userChoice === 'X'){
                cell3.style.color = 'green';
            }
            else{
                cell3.style.color = 'white';
            }
            // val = computerSelect;
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[2] = userChoice;
            cell3.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
    else {
        if (check(2)) {
            if(userChoice === 'X'){
                cell3.style.color = 'green';
            }
            else{
                cell3.style.color = 'white';
            }
            // val = userChoice;
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[2] = userChoice;
            cell3.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}
function forCell4() {
    if (val === userChoice) {
        if (check(3)) {
            if(userChoice === 'X'){
                cell4.style.color = 'green';
            }
            else{
                cell4.style.color = 'white';
            }
            val = computerSelect;
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[3] = userChoice;
            cell4.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
    else {
        if (check(3)) {
            if(userChoice === 'X'){
                cell4.style.color = 'green';
            }
            else{
                cell4.style.color = 'white';
            }
            // val = userChoice;
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[3] = userChoice;
            cell4.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}
function forCell5() {
    if (val === userChoice) {
        if (check(4)) {
            if(userChoice === 'X'){
                cell5.style.color = 'green';
            }
            else{
                cell5.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            // val = computerSelect;
            arr[4] = userChoice;
            cell5.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
    else {
        if (check(4)) {
            if(userChoice === 'X'){
                cell5.style.color = 'green';
            }
            else{
                cell5.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[4] = userChoice;
            cell5.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}
function forCell6() {
    if (val === userChoice) {
        if (check(5)) {
            if(userChoice === 'X'){
                cell6.style.color = 'green';
            }
            else{
                cell6.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[5] = userChoice;
            cell6.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
    else {
        if (check(5)) {
            if(userChoice === 'X'){
                cell6.style.color = 'green';
            }
            else{
                cell6.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[5] = userChoice;
            cell6.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}
function forCell7() {
    if (val === userChoice) {
        if (check(6)) {
            if(userChoice === 'X'){
                cell7.style.color = 'green';
            }
            else{
                cell7.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[6] = userChoice;
            cell7.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
    else {
        if (check(6)) {
            if(userChoice === 'X'){
                cell7.style.color = 'green';
            }
            else{
                cell7.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[6] = userChoice;
            cell7.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}
function forCell8() {
    if (val === userChoice) {
        if (check(7)) {
            if(userChoice === 'X'){
                cell8.style.color = 'green';
            }
            else{
                cell8.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[7] = userChoice;
            cell8.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
    else {
        if (check(7)) {
            if(userChoice === 'X'){
                cell8.style.color = 'green';
            }
            else{
                cell8.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[7] = userChoice;
            cell8.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}
function forCell9() {
    if (val === userChoice) {
        if (check(8)) {
            if(userChoice === 'X'){
                cell9.style.color = 'green';
            }
            else{
                cell9.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[8] = userChoice;
            cell9.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
    else {
        if (check(8)) {
            if(userChoice === 'X'){
                cell9.style.color = 'green';
            }
            else{
                cell9.style.color = 'white';
            }
            span.innerText = player2 + ' turn ' + ' with ' + " " + computerSelect;
            arr[8] = userChoice;
            cell9.innerText = userChoice;
            winner();
            computerEnter();
        }
    }
}


cell1.addEventListener('click', forCell1);
cell2.addEventListener('click', forCell2);
cell3.addEventListener('click', forCell3);
cell4.addEventListener('click', forCell4);
cell5.addEventListener('click', forCell5);
cell6.addEventListener('click', forCell6);
cell7.addEventListener('click', forCell7);
cell8.addEventListener('click', forCell8);
cell9.addEventListener('click', forCell9);





