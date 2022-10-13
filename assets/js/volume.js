//Kijkt naar het element ID "video" en zet het video volume op 0.2

let vid = document.getElementById("video");
vid.volume = 0.2;

let video = document.querySelector('video');
let promise = video.play();

if (promise !== undefined) {
    promise.then(_ => {
        // autoplay begint met geluid
        console.info("Video could be played with sound in users browser.")
    }).catch(error => {
        // Autoplay staat uit, het mute de video en speelt het opnieuw.
        video.muted = true;
        video.play();
        alert("The sound of the vide cannot play because of a setting in your browser. chrome://settings/content/sound");
        console.error("Video could not play due to a set setting in the users browser.");
    });
}