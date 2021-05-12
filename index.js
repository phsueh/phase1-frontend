let songContainerDiv = document.querySelector('#music-album-container')
let songPlaylist = document.querySelector('#music-playlist')

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

// function getOneSong(songsObj){
//     fetch(`http://localhost:3000/songs/${songsObj.id}`)
//             .then(res=>res.json())
//             .then((oneSongObj)=>{
                
//                 let oneSongInfo = document.createElement('div')
//                 oneSongInfo.className = "SongInfo"
//                 oneSongInfo.innerHTMl=`
//                 <iframe src = "${oneSongObj.songUrl}"/>
//                 <h2>${oneSongObj.name}</h2>
//                 <h3>${oneSongObj.artist}</h3>
//                 <h3>${oneSongObj.year}</3>
//                 `
            
//                 songPlaylist.append(oneSongInfo)
//             })
// }



                