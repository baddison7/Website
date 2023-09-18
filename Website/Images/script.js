// When the user scrolls down 20px from the top of the document, slide down the navbar

// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
    scrollFunction()
}

    ;

function scrollFunction() {
    if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
        document.getElementById("slideBar").style.top = "0";
    }

    else {
        document.getElementById("slideBar").style.top = "-60px";
    }
}