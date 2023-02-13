//Kijkt naar het element ID "video" en zet het video volume op 0.2
let vid = document.getElementById("video");
vid.volume = 0.1;

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
        // Get the user-agent string
        let userAgentString =
            navigator.userAgent;
        // Detect Chrome
        let chromeAgent =
            userAgentString.indexOf("Chrome") > -1;
        // Detect Firefox
        let firefoxAgent =
            userAgentString.indexOf("Firefox") > -1;
        // Detect Safari
        let safariAgent =
            userAgentString.indexOf("Safari") > -1;
        // Discard Safari since it also matches Chrome
        if ((chromeAgent) && (safariAgent))
            safariAgent = false;
        // Detect Opera
        let operaAgent =
            userAgentString.indexOf("OP") > -1;
        // Discard Chrome since it also matches Opera     
        if ((chromeAgent) && (operaAgent)) {
            chromeAgent = false;
        }
        console.log(chromeAgent);


        if (chromeAgent == true) {
            alert("Sound of the video cannot be played due to a browser setting. chrome://settings/content/sound");
        } else if (operaAgent == true) {
            alert("Sound of the video cannot be played due to a browser setting. opera://settings/content/sound?search=permissionsd");
            console.log("Opera");
        } else if (firefoxAgent == true) {
            alert("Sound of the video cannot be played due to a browser setting. about:preferences#privacy\nScroll down until you find 'Autoplay' under the 'permissions' section.");
        } else if (safariAgent == true) {
            alert("Sound of the video cannot be played due to a browser setting.");
        } else {
            console.log("unknown");
        }
        console.error("Video could not play due to a set setting in the users browser.");
    });
}

// Create the <a> element
let soundBtn = document.getElementsByClassName('a-menu')[7];

// Set the click event for the link
soundBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (video.muted) {
        // Unmute the video
        video.muted = false;
        video.volume = 0.1;
    } else {
        // Mute the video
        video.muted = true;
        video.volume = 0;
    }
});