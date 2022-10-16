const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')



const songs = ['bodyLanguage', 'typical', 'makeIt']

let sondIndex = 2

loadSong(songs[sondIndex])

function loadSong(song) {
    title.innerHTML = song
    audio.src = `songs/${song}.mp3`
    audio.src = `song-cover/${song}.jpg`
}
