let count = 0;
const counterDisplay = document.getElementById('counter');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');
const body = document.body;
const msg = document.getElementById('message');

clickBtn.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;

    // 100回ごとの判定
    if (count % 100 === 0 && count !== 0) {
        triggerCelebration();
    } else {
        // 101回目などでアニメーションを解除
        counterDisplay.classList.remove('celebrate');
        body.classList.remove('flash');
        msg.innerText = "";
    }
});

function triggerCelebration() {
    counterDisplay.classList.add('celebrate');
    body.classList.add('flash');
    msg.innerText = "🎉 100回達成！おめでとう！ 🎉";
    
    // 3秒後にフラッシュだけ戻す
    setTimeout(() => {
        body.classList.remove('flash');
    }, 500);
}

resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
    counterDisplay.classList.remove('celebrate');
    body.classList.remove('flash');
    msg.innerText = "";
});
