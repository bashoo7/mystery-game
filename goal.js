function createFlake() {
  const flake = document.createElement('div');
  flake.className = 'flake';
  flake.textContent = '❀'; // 花の絵文字 or 画像に変えてもOK

  // ランダムな位置・サイズ・速度
  const size = Math.random() * 20 + 10;
  flake.style.left = Math.random() * window.innerWidth + 'px';
  flake.style.fontSize = size + 'px';
  flake.style.animationDuration = 5 + Math.random() * 5 + 's';

  document.body.appendChild(flake);

  // 一定時間後に削除
  setTimeout(() => {
    flake.remove();
  }, 10000);
}

// 一定間隔で花を追加
setInterval(createFlake, 300);
