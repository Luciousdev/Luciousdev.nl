window.onblur = function() {
    document.title = 'I <3 you | Lucy Puyenbroek';
}

window.onfocus = function() {
    document.title = 'Lucy Puyenbroek';
}


//FIX het is momenteel meer hoe vaak je zelf op de website bent geweest en niet hoevaak het is bezocht... 
//Finally hooked up an API to it (25/10/2022)


const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/luciousdev.nl/website2/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}