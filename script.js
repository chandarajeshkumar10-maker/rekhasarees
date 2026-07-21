//alert("JavaScript Loaded");
// Lightbox
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(function(img){
    img.onclick = function(){
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    };
});

closeBtn.onclick = function(){
    lightbox.style.display = "none";
};

lightbox.onclick = function(e){
    if(e.target == lightbox){
        lightbox.style.display = "none";
    }
};

function searchProduct() {

    var input = document.getElementById("searchBox").value.toUpperCase();

    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {

        var code = cards[i].getElementsByTagName("h3")[0].innerHTML.toUpperCase();

        if (code.indexOf(input) !== -1 || input === "") {
            cards[i].style.display = "inline-block";
        } else {
            cards[i].style.display = "none";
        }

    }
}
