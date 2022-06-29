const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song Titles
const songs = ["Nikes" , "Ivy" , "Pink + White", "Be Yourself", "Solo", "Skyline To", "Self Control" , "Good Guy",  "Nights" , "Solo (Reprise)",
"Pretty Sweet" ,"Facebook Story" , "Close to You" , "White Ferrari", "Seigfried", "Godspeed", "Futura Free" ] 
console.log(songs)                                    

//Song Index
let songIndex = 3

//Initially Load Song into DOM
loadSong(songs[songIndex])


//Update song details
 function loadSong(song) {
 	title.innerText = song
 	audio.src = `Music/${song}.mp3`
 	cover.src = "images/blonde.jpg"

 }


 function playSong() {
 	musicContainer.classList.add('play')
 	playBtn.querySelector("i.fas").classList.remove('fa-play')
 	playBtn.querySelector("i.fas").classList.add('fa-pause')


 	audio.play()
 }

 function pauseSong() {
 	musicContainer.classList.remove('play')
 	playBtn.querySelector("i.fas").classList.remove('fa-pause')
 	playBtn.querySelector("i.fas").classList.add('fa-play')

 	audio.pause()
 }

 //Event Handlers
 playBtn.addEventListener("click", ()=> {
 	const isPlaying = musicContainer.classList.contains('play')
 	if (isPlaying) {
 		pauseSong();

 	}

 	else {
 		playSong()
 	}
 })


 //Change Song Events
