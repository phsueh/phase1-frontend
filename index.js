let songContainerDiv = document.querySelector('Div#music-album-container')
let songPlaylist = document.querySelector('div#music-playlist')


function getAllSongs(){
fetch("http://localhost:3000/songs")
    .then(response => response.json())
    .then((songsArray) => {
        
        songsArray.forEach((songsObj) => {
            
            let songNameMain = document.createElement("span")
            songNameMain.innerText = songsObj.name

            songContainerDiv.append(songNameMain)
        
            songNameMain.addEventListener("click", (evt) => {
                let songInfoContainer = document.createElement('div')
                songInfoContainer.ClassName = "SongInfo"
                songInfoContainer.dataset.id = songsObj.id

                let songName =document.createElement('p')
                songName.innerText = `"${songsObj.name}"`

                let songYear = document.createElement('h7')
                songYear.innerText = songsObj.year

                let songArtist = document.createElement('p')
                songArtist.innerText = songsObj.artist

                let songAlbum = document.createElement('iframe')
                songAlbum.src = songsObj.songUrl

                // let likesP = document.createElement("p")
                // likesP.innerText = `${songsObj.likes}` + ' likes'

                let likeButton = document.createElement("button")
                    likeButton.className = 'likes-button'
                    likeButton.innerText = `${songsObj.likes}` + ' likes'

                    console.log(likeButton.innerText)
                likeButton.addEventListener("click", (e)=>{

                    let currentLikes = parseInt(likeButton.innerText)
                        likeButton.innerText = `${currentLikes+1} likes`

                    fetch(`http://localhost:3000/songs/${songInfoContainer.dataset.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-type" : "application/json"
                        },
                        body: JSON.stringify({
                            likes: currentLikes+1
                        })
                    })
                        .then(res=>res.json())
                        .then((updatedLikesObj)=>{
                            console.log(updatedLikesObj.likes)
                    })
                    
                })

                songInfoContainer.append(songName, songYear, songArtist, songAlbum, likeButton)
                songPlaylist.append(songInfoContainer)
                
        })    
        })
    })
}
getAllSongs()