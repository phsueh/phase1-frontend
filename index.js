let songContainerDiv = document.querySelector('div.music-album-container')

fetch('http://localhost:3000/songs')
    .then(response => response.json())
    .then((songsArray) => {
        console.log(songsArray)
        songsArray.forEach((songsObj) => {
            let songFrame = document.createElement('iframe')
                songFrame.src = songsObj.songUrl
            songContainerDiv.append(songFrame)
        })
    })