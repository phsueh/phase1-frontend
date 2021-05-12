
let songContainerDiv = document.querySelector('div.music-album-container')
let songPlaylist = document.querySelector('div#music-playlist')


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
                
        })    
        })
    })
}
getAllSongs()


