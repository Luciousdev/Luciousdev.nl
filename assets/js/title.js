window.onblur = function() {
    document.title = 'I <3 you | Lucy Puyenbroek';
}

window.onfocus = function() {
    document.title = 'Lucy Puyenbroek';
}



const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/luciousdev.nl/website2/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}