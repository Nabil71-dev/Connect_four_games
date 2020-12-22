let row = document.getElementsByTagName('tr')
let col = document.getElementsByTagName('td')
let player_turn = document.querySelector('.player_turn')
let slots = document.querySelectorAll('.slot')
let reset = document.querySelector('.reset_button')

while (!player1) {
    var player1 = prompt('Player One: Enter your name. Your color will be Gray.')
}
while (!player2) {
    var player2 = prompt('Player Two: Enter your name. Your color will be SkyBlue.')
}

var current_player = 1
player_turn.innerHTML = `${player1}'s-turn.`

Array.prototype.forEach.call(col, (cell) => {
    cell.addEventListener('click', ChangeColor)
    cell.style.backgroundColor = 'black'
})

function ChangeColor(e) {
    let column = e.target.cellIndex
    let Row = []

    for (let i = 5; i > -1; i--) {
        if (row[i].children[column].style.backgroundColor == 'black') {
            Row.push(row[i].children[column])
            if (current_player === 1) {
                Row[0].style.backgroundColor = 'gray'
                if (check1() || check2() || check3() || check4()) {
                    player_turn.innerHTML = `${player1}' WIN.`
                    return alert(`Congratulation ${player1},you won!!`)
                }
                else if (draw()) {
                    player_turn.innerHTML = 'Best of luck for next game';
                    return alert('DRAW!! Try again');
                } else {
                    player_turn.innerHTML = `${player2}'s turn`
                    return current_player = 2;
                }
            }
            else {
                Row[0].style.backgroundColor = 'skyblue'
                if (check1() || check2() || check3() || check4()) {
                    player_turn.innerHTML = `${player2}' WIN.`
                    return alert(`Congratulation ${player2},you won!!`)
                }

                else if (draw()) {
                    player_turn.innerHTML = 'Best of luck for next game';
                    return alert('DRAW!! Try again');
                } else {
                    player_turn.innerHTML = `${player1}'s turn`
                    return current_player = 1;
                }
            }
        }
    }
}
function ColorCheck(a, b, c, d) {
    return (a === b && a === c && a === d && a !== 'black')
}
function check1() {
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < 4; j++) {
            if ((ColorCheck(row[i].children[j].style.backgroundColor, row[i].children[j + 1].style.backgroundColor, row[i].children[j + 2].style.backgroundColor, row[i].children[j + 3].style.backgroundColor))) {
                return true
            }
        }
    }
}
function check2() {
    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < 3; i++) {
            if ((ColorCheck(row[i].children[j].style.backgroundColor, row[i + 1].children[j].style.backgroundColor, row[i + 2].children[j].style.backgroundColor, row[i + 3].children[j].style.backgroundColor))) {
                return true
            }
        }
    }
}
function check3() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (ColorCheck(row[i].children[j].style.backgroundColor, row[i + 1].children[j + 1].style.backgroundColor, row[i + 2].children[j + 2].style.backgroundColor, row[i + 3].children[j + 3].style.backgroundColor)) {
                return true
            }
        }
    }
}
function check4() {
    for (let j = 0; j < 4; j++) {
        for (let i = 5; i > 2; i--) {
            if (ColorCheck(row[i].children[j].style.backgroundColor, row[i - 1].children[j + 1].style.backgroundColor, row[i - 2].children[j + 2].style.backgroundColor, row[i - 3].children[j + 3].style.backgroundColor)) {
                return true
            }
        }
    }
}
function draw() {
    let fullSlot = []
    for (let i = 0; i < col.length; i++) {
        if (col[i].style.backgroundColor !== 'black') {
            fullSlot.push(col[i]);
        }
    }
    if (fullSlot.length === col.length) {
        return true;
    }
}
reset.addEventListener('click', () => {
    slots.forEach(slot => {
        slot.style.backgroundColor = 'black'
    })
    return (current_player === 1 ? player_turn.innerHTML = `${player1}'s turn` : player_turn.innerHTML = `${player2}'s turn`);
})