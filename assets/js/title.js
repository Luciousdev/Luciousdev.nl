window.onblur = function() {
    document.title = 'I <3 you | Lucy Puyenbroek';
}

window.onfocus = function() {
    document.title = 'Lucy Puyenbroek';
}


//FIX het is momenteel meer hoe vaak je zelf op de website bent geweest en niet hoevaak het is bezocht... 


let counterContainer = document.querySelector(".keren_bezocht");
let visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;