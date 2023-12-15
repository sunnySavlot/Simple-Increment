let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function playClickSound() {
    // Create an Audio object and play the sound
    const clickSound = new Audio('click.mp3');
    clickSound.play();
}

const incrementBtn = document.getElementById('incrementBtn');
incrementBtn.addEventListener('click', playClickSound);