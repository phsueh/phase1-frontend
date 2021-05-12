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