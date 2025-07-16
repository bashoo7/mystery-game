document.addEventListener("DOMContentLoaded", function () {
  const correct = "14"; // 紋章の数（設定に合わせてOK）
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");

  submitBtn.addEventListener("click", function () {
    const input = document.getElementById("answer").value.trim();
    if (input === correct) {
      window.location.href = "question3.html";
    } else {
      message.textContent = "それは違うようだ。ギルドの壁をもう一度見直してみよう。";
    }
  });
});
