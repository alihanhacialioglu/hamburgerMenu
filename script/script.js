function hamburgerOpenClose() {
    var hamburger = document.getElementsByClassName("hamburger")[0];
    var lines = hamburger.children;
    var slideMenu = document.getElementsByClassName("slide-menu")[0];
    if (lines[0].style.opacity == "0") {
        lines[0].style.opacity = "1";
        lines[1].style.transform = "rotate(0deg)";
        lines[1].style.marginTop = "2px";
        lines[2].style.marginTop = "2px";
        lines[2].style.transform = "rotate(0deg)";
        slideMenu.style.left = "-27%";
    }
    else {
        lines[0].style.opacity = "0";
        lines[1].style.transform = "rotate(45deg)";
        lines[1].style.marginTop = "2px";
        lines[2].style.marginTop = "-2px";
        lines[2].style.transform = "rotate(-45deg)";
        slideMenu.style.left = "0%";
    }

}
function updateScreen() {
    const mq = window.matchMedia("(min-width: 768px)");


    if (mq.matches) {
        var hamburger = document.getElementsByClassName("hamburger")[0];
        var lines = hamburger.children;
        var slider = document.getElementsByClassName("slide-menu")[0];
        lines[0].style.opacity = "1";
        lines[1].style.transform = "rotate(0deg)";
        lines[1].style.marginTop = "2px";
        lines[2].style.marginTop = "2px";
        lines[2].style.transform = "rotate(0deg)";
        slider.style.left = "-27%";
    } else {


    }

}

function sirket(sirket) {
    var slideSirket = document.getElementById("slide-sirket");
    var sirketTutucu = document.getElementsByClassName("slide-sirket-tutucu")[0];
    var arrowSirket = document.getElementById("sirket-arrow");

    if (sirketTutucu.style.display == "block") {
        sirketTutucu.style.display = "none";
        slideSirket.style.height = "8%";
        arrowSirket.style.transform = "rotate(0deg)";
        arrowSirket.style.transition = "0.4s";
    }
    else {
        sirketTutucu.style.display = "block";
        slideSirket.style.height = "147px";
        arrowSirket.style.transform = "rotate(180deg)";
        arrowSirket.style.transition = "0.4s";
        s
    }
}

function hizmet(hizmet) {
    var slideHizmet = document.getElementById("slide-hizmet");
    var hizmetTutucu = document.getElementsByClassName("slide-hizmet-tutucu")[0];
    var arrowHizmet = document.getElementById("hizmet-arrow");
    if (hizmetTutucu.style.display == "block") {
        hizmetTutucu.style.display = "none";
        slideHizmet.style.height = "8%";
        arrowHizmet.style.transform = "rotate(0deg)";
        arrowHizmet.style.transition = "0.4s";

    }
    else {
        hizmetTutucu.style.display = "block";
        slideHizmet.style.height = "180px";
        arrowHizmet.style.transform = "rotate(180deg)";
        arrowHizmet.style.transition = "0.4s";

    }

}
