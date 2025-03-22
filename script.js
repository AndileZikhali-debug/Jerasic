const playlist = [
    { title: "Cyber Groove", artist: "Hex Beat", genre: "edm", src: "assets/songs/song1.mp3", cover: "assets/covers/song1.jpg" },
    { title: "Neon Pulse", artist: "Synth Lord", genre: "hiphop", src: "assets/songs/song2.mp3", cover: "assets/covers/song2.jpg" },
    { title: "Electric Dreams", artist: "AI DJ", genre: "jazz", src: "assets/songs/song3.mp3", cover: "assets/covers/song3.jpg" }
];

const audio = new Audio();
let currentIndex = 0;
const playPauseBtn = document.getElementById("playPause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volumeControl = document.getElementById("volume");
const playlistContainer = document.getElementById("playlist");
const currentSongDisplay = document.getElementById("current-song");
const albumCover = document.getElementById("album-cover");
const searchInput = document.getElementById("search");
const genreButtons = document.querySelectorAll(".genre-btn");

// Load Playlist
playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener("click", () => playSong(index));
    playlistContainer.appendChild(li);
});

function playSong(index) {
    currentIndex = index;
    audio.src = playlist[index].src;
    albumCover.src = playlist[index].cover;
    audio.play();
    playPauseBtn.textContent = "⏸";
    currentSongDisplay.textContent = `Now Playing: ${playlist[index].title}`;
}

// Play/Pause
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶";
    }
});

// Next/Previous
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    playSong(currentIndex);
});
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    playSong(currentIndex);
});

// Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Visualizer
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

function drawVisualizer() {
    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

audio.addEventListener("play", drawVisualizer);
