// Tekst dat gezien word
let data = [{
    WelkomTekst: "<span>~/homepage.html<br/><br/>Loading assets please wait...<br/><br/>Welcome user, enjoy your stay.<br/>Redirecting now, stand by.</span><br/>"
}];

let allElements = document.getElementsByClassName("typing");
for (let j = 0; j < allElements.length; j++) {
    let currentElementId = allElements[j].id;
    let currentElementIdContent = data[0][currentElementId];
    let element = document.getElementById(currentElementId);
    let devTypeText = currentElementIdContent;

    // Typ machinuh
    let i = 0,
        isTag, text;
    (function type() {
        text = devTypeText.slice(0, ++i);
        if (text === devTypeText) return;
        element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
        let char = text.slice(-1);
        if (char === "<") isTag = true;
        if (char === ">") isTag = false;
        if (isTag) return type();
        setTimeout(type, 60);
    })();
}