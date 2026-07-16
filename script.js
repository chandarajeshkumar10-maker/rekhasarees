var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(function(img) {
    img.onclick = function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    };
});

closeBtn.onclick = function() {
    lightbox.style.display = "none";
};

lightbox.onclick = function(e) {
    if (e.target == lightbox) {
        lightbox.style.display = "none";
    }
};