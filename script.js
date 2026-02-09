body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f2f5; font-family: sans-serif; transition: background-color 0.3s; }
.container { text-align: center; background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; overflow: hidden; }

#counter { font-size: 4rem; margin: 1rem 0; color: #007bff; transition: transform 0.2s; }

/* 100回ごとのアニメーションクラス */
.celebrate { animation: bounce 0.5s ease infinite alternate; color: #ff4757 !important; }
.flash { background-color: #ffeaa7 !important; }

@keyframes bounce {
    from { transform: scale(1); }
    to { transform: scale(1.3); }
}

button { padding: 10px 20px; font-size: 1rem; cursor: pointer; border: none; border-radius: 5px; margin: 5px; color: white; }
#clickBtn { background-color: #007bff; }
#resetBtn { background-color: #6c757d; }
#message { height: 20px; color: #ff4757; font-weight: bold; margin-top: 10px; }
