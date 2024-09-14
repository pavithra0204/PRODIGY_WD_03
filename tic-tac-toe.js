const board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;
const statusText = document.getElementById('statusText');

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(index) {
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    document.getElementById(cell-${index}).innerText = currentPlayer;

    if (checkWinner()) {
        statusText.innerText = ${currentPlayer} wins!;
        gameActive = false;
        return;
    }

    if (board.every(cell => cell)) {
        statusText.innerText = It's a draw!;
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.innerText = Player ${currentPlayer}'s turn;
}

function checkWinner() {
    return winConditions.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function restartGame() {
    board.fill(null);
    currentPlayer = 'X';
    gameActive = true;
    statusText.innerText = Player X's turn;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}