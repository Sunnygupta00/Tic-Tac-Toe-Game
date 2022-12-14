let gameover = new Audio("victory.mp3");
let turn = 'X';
// FUNCTION TO CHANGE TURN
let changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}
let isGameOver = false;
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7]
]
// console.log(document.getElementsByClassName('box-text'))
// FUNCTION TO CHECK VICTORY
let checkVictory = () => {
    let boxText = document.getElementsByClassName('box-text');
    winningPattern.forEach(e => {
        var checkOne = (boxText[e[0]].innerText === boxText[e[1]].innerText);
        var checkTwo = (boxText[e[1]].innerText === boxText[e[2]].innerText);
        var notEmpty = (boxText[e[0]].innerText !== '');


        if (checkOne && checkTwo && notEmpty) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " won 🥳";
            isGameOver = true;
            gameover.play();
        }
    })

}
// game logic
let boxes = Array.from(document.getElementsByClassName('box'))
// console.log(boxes)
boxes.forEach(element => {
    let boxText = element.querySelector('.box-text');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkVictory();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
});

reset.addEventListener('click', () => {
    let boxText = document.getElementsByClassName('box-text');
    Array.from(boxText).forEach(x => {
        x.innerText = ''
    })
    document.querySelector('.info').innerText = "Turn for " + turn;
})