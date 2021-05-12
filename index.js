<<<<<<< HEAD
let songContainerDiv = document.querySelector('#music-album-container')
let songPlaylist = document.querySelector('#music-playlist')
=======
<<<<<<< HEAD
let songContainerDiv = document.querySelector('div.music-album-container')
let songPlaylist = document.querySelector('div#music-playlist')
>>>>>>> 1be93c5e70b873383bd9e12baa8febe38a49bd99

function getAllSongs(){
fetch("http://localhost:3000/songs")
    .then(response => response.json())
    .then((songsArray) => {
        
        songsArray.forEach((songsObj) => {
            
            let songNameMain = document.createElement("h2")
            songNameMain.innerText = songsObj.name

            songContainerDiv.append(songNameMain)
        
            songNameMain.addEventListener("click", (evt) => {
                let songInfoContainer = document.createElement('div')
                songInfoContainer.ClassName = "SongInfo"
                songInfoContainer.dataset.id = songsObj.id

                let songName =document.createElement('h2')
                songName.innerText = songsObj.name

                let songYear = document.createElement('h3')
                songYear.innerText = songsObj.year

                let songArtist = document.createElement('h3')
                songArtist.innerText = songsObj.artist

                let songAlbum = document.createElement('iframe')
                songAlbum.src = songsObj.songUrl

                let songLikes = document.createElement("BUTTON")
                songLikes.innerHTML = 'likes'
                songLikes.onclick= function(){
                    console.log('hello')
                }

                songInfoContainer.append(songName, songYear, songArtist, songAlbum, songLikes)
                songPlaylist.append(songInfoContainer)

             
                
                //
                
        })    
        })
    })
}
getAllSongs()


<<<<<<< HEAD
                
=======
//                 oneSongInfo.append(songAlbum, songName, songArtist, songYear)
//                 songPlaylist.append(oneSongInfo)
                
=======
let songContainerDiv = document.querySelector("div.music-album-container")

fetch('http://localhost:3000/songs')
.then(res => res.json())
.then((songArray)=>{
    songArray.forEach((songObj)=>{
        let songFrame = document.createElement("iframe")
        songFrame.src = songObj.songUrl

        songContainerDiv.append(songFrame)
    })
})
>>>>>>> paul
>>>>>>> 1be93c5e70b873383bd9e12baa8febe38a49bd99
