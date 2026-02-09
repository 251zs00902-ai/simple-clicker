let count = 0;
const counterDisplay = document.getElementById('counter');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');

// クリックイベント
clickBtn.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;
});

// リセットイベント
resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
});