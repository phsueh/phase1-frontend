let songContainerDiv = document.querySelector('div.music-album-container')
let songPlaylist = document.querySelector('div#music-playlist')

function getAllSongs(){
fetch('http://localhost:3000/songs')
    .then(response => response.json())
    .then((songsArray) => {
        console.log(songsArray)
        songsArray.forEach((songsObj) => {
            let songFrame = document.createElement('iframe')
                songFrame.src = songsObj.songUrl

            let songNameMain = document.createElement('h2')
            songNameMain = songsObj.name

            songContainerDiv.append(songFrame, songNameMain)
        
        songFrame.addEventListener("Click", (e)=>{
            getOneSong(songsObj)
        })    
        })
    })
}
getAllSongs()

function getOneSong(songsObj){
    fetch(`http://localhost:3000/songs/${songsObj.id}`)
            .then(res=>res.json())
            .then((oneSongObj)=>{
                
                let oneSongInfo = document.createElement('div')
                oneSongInfo.className = "SongInfo"
                oneSongInfo.innerHTMl=`
                <iframe src = "${oneSongObj.songUrl}"/>
                <h2>${oneSongObj.name}</h2>
                <h3>${oneSongObj.artist}</h3>
                <h3>${oneSongObj.year}</3>
                `
            
                songPlaylist.append(oneSongInfo)
            })
}


// let songAlbum = document.createElement('iframe')
//                 songAlbum.src = oneSongObj.songUrl
        
//                 let songName = document.createElement('h2')
//                 songName.innerText = oneSongObj.name
        
//                 let songArtist = document.createElement('h3')
//                 songArtist.innerText = oneSongObj.artis
        
//                 let songYear = document.createElement('h3')
//                 songYear.innerText = oneSongObj.year

//                 oneSongInfo.append(songAlbum, songName, songArtist, songYear)
//                 songPlaylist.append(oneSongInfo)
                