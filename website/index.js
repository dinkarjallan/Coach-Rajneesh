let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-10%";
    }
    prevScrollpos = currentScrollPos;
}; /* (Scroller animation)When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */