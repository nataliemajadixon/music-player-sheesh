const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')



const songs = ['bodylang', 'typical', 'makeit']

let songIndex = 1

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerHTML = song
    audio.src = `songs/${song}.mp3`
    audio.src = `song-cover/${song}.jpg`
}
function playSong() {
musicContainer.classList.add('play')
playBtn.querySelector('i.fas').classList.remove('fa-play')
playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
 musicContainer.classList.remove('play')
playBtn.querySelector('i.fas').classList.add('fa-play')
playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}





playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()   
    } else {
        playSong()
    }
})


