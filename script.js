const app = document.getElementById("app");
const song = document.getElementById("birthdaySong");

// ---------- UI BUILD ----------

// container
const container = document.createElement("div");
container.className = "container text-center";

// badge
const badge = document.createElement("span");
badge.className = "badge bg-warning text-dark mb-3 fs-6";
badge.innerText = "✨ Feeling 24 ✨";

// heading
const heading = document.createElement("h1");
heading.className = "text-white mb-4";
heading.innerText = "🎂 Happy 24th Birthday, Madhu Ji 🎂";

// card
const card = document.createElement("div");
card.className = "main-card mx-auto shadow-lg";

// gallery
const gallery = document.createElement("div");
gallery.className = "gallery";

["madhu_1.jpg", "madhu_2.jpg", "madhu_3.jpg"].forEach(pic => {
    const img = document.createElement("img");
    img.src = `assets/${pic}`;
    img.alt = "Madhu Ji";
    gallery.appendChild(img);
});

// message
const message = document.createElement("p");
message.className = "message mt-3";
message.innerHTML = `
<strong>Happy Birthday to you, my greatest hero in Valorant 🎮✨</strong><br><br>
You’re someone who never stops grinding, always pushing forward, and always finding a way to ace every challenge.<br><br>
Whenever I feel low or lost, you’re the person I look up to. Your dedication, positivity, and strength inspire me every single day.<br><br>
You truly are the best 💖
`;

// ---------- MUSIC CONTROLS ----------

// play / pause button
const playBtn = document.createElement("button");
playBtn.className = "btn btn-danger rounded-pill px-4 me-2 mt-3";
playBtn.innerText = "▶️ Play Taylor Mode";

playBtn.onclick = () => {
    if (song.paused) {
        song.volume = 0.8;
        song.play();
        playBtn.innerText = "⏸ Pause Taylor Mode";
    } else {
        song.pause();
        playBtn.innerText = "▶️ Play Taylor Mode";
    }
};

// mute / unmute button
const muteBtn = document.createElement("button");
muteBtn.className = "btn btn-outline-light rounded-pill px-4 mt-3";
muteBtn.innerText = "🔇 Mute";

muteBtn.onclick = () => {
    song.muted = !song.muted;
    muteBtn.innerText = song.muted ? "🔊 Unmute" : "🔇 Mute";
};

// footer
const footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = `Made with <span class="heart">❤</span> by <strong>LoyalPiyush</strong>`;


// ---------- ASSEMBLY ----------

card.appendChild(gallery);
card.appendChild(message);
card.appendChild(playBtn);
card.appendChild(muteBtn);

container.appendChild(badge);
container.appendChild(heading);
container.appendChild(card);
container.appendChild(footer);

app.appendChild(container);
