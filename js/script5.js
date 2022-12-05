console.log(body__cover[1]);

function process_song_img() {
    console.log('i am hero')
    for (let i = 0; i < playlist.length; i++) {
        song_img[i] = "*";
    }
    for (let i = 0; i < playlist.length; i++) {
        song = ele.files[i];
        jsmediatags.read(song, {
            onSuccess: function (tag) {
                console.log(tag)
                if (tag.tags.picture) {
                    // Array buffer to base64
                    const data = tag.tags.picture.data
                    const format = tag.tags.picture.format
                    let base64String = ""
                    for (let i = 0; i < data.length; i++) {
                        base64String += String.fromCharCode(data[i])
                    }
                    // Output the metadata
                    song_img[i] = `data:${format};base64,${window.btoa(base64String)}`;
                    // document.querySelector("#title").textContent = tag.tags.title
                    // document.querySelector("#artist").textContent = tag.tags.artist
                    // document.querySelector("#album").textContent = tag.tags.album
                    // document.querySelector("#genre").textContent = tag.tags.genre
                }
            },
            onError: function (error) {
                console.log(error)
            }
        })
    }
}