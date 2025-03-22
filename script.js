const playlist = [
    { title: "Cyber Groove", artist: "Hex Beat", genre: "edm", src: "SpotiDownloader.com - Missed Calls - Lowfeye.mp3", cover: "assets/covers/song1.jpg" },
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

// Play Selected Song
function playSong(index) {
    currentIndex = index;
    audio.src = playlist[index].src;
    albumCover.src = playlist[index].cover;
    audio.play();
    playPauseBtn.textContent = "⏸";
    currentSongDisplay.textContent = `Now Playing: ${playlist[index].title}`;
}

// Search Songs
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    playlistContainer.innerHTML = "";
    playlist
        .filter(song => song.title.toLowerCase().includes(searchTerm))
        .forEach((song, index) => {
            const li = document.createElement("li");
            li.textContent = `${song.title} - ${song.artist}`;
            li.addEventListener("click", () => playSong(index));
            playlistContainer.appendChild(li);
        });
});

// Dark/Light Mode
document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
