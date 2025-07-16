document.addEventListener("DOMContentLoaded", function () {
  const correct = "14"; // 例：石のギルドのしるしが14個あるとか
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");

  submitBtn.addEventListener("click", function () {
    const input = document.getElementById("answer").value;
    if (input === correct) {
      window.location.href = "goal.html"; // クリアページへGO
    } else {
      message.textContent = "惜しい！もう一度カタリーナを歩いてみよう。";
    }
  });
});
