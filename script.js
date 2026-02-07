function quizAnswer(button, correct) {
  const card = button.closest('.quiz-card');
  const feedback = card.querySelector('.feedback');
  const nextBtn = card.querySelector('.next-btn');

  card.querySelectorAll('button').forEach(btn => btn.disabled = true);

  if (correct) {
    button.classList.add("correct");
    feedback.innerHTML = "Yayyy! You remembered 😍💖";
  } else {
    button.classList.add("wrong");
    feedback.innerHTML = "Goldfish 🐠 I expected this from you 😌";
  }

  nextBtn.classList.remove("hidden");
}

function tripAnswer(button) {
  const card = button.closest('.quiz-card');
  const feedback = card.querySelector('.feedback');
  const nextBtn = card.querySelector('.next-btn');

  card.querySelectorAll('button').forEach(btn => btn.disabled = true);
  feedback.innerHTML = "Wrong 😜 The correct answer is <b>ALL OF THE ABOVE ❤️</b>";

  nextBtn.classList.remove("hidden");
}


function moveBtn(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}
function yes() {
  document.getElementById("yes-msg").innerText =
    "YAYYYY 💖💖💖 I love you, my Valentine 🐧❤️";

  // Hide the NO button
  const noButton = document.getElementById("noBtn");
  if (noButton) {
    noButton.style.display = "none";
  }

  // Optional: disable YES button after click
  document.getElementById("yesBtn").disabled = true;
}

// Floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 500);

// Only one card open at a time
function flipCard(card) {
  document.querySelectorAll('.flip-card').forEach(c => {
    if (c !== card) c.classList.remove('flipped');
  });

  card.classList.toggle('flipped');
  heartBurst(card);
}


function heartBurst(card) {
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.innerText = "💓";

    const x = Math.random() * 80 - 40;
    const y = Math.random() * 80 - 40;

    heart.style.setProperty("--x", `${x}px`);
    heart.style.setProperty("--y", `${y}px`);

    card.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

