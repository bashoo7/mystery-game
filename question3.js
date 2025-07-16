document.addEventListener("DOMContentLoaded", function () {
  const correct = "のぞく";
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");

  submitBtn.addEventListener("click", function () {
    const input = document.getElementById("answer").value.trim().replace(/ー/g, "ー"); // 長音対策あれば追加可
    if (input === correct) {
      window.location.href = "goal.html";
    } else {
      message.textContent = "ちがうようだ…。塔の名前をもう一度よく考えてみよう。";
    }
  });
});
