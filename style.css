/* ================================= */
/* PRODUCT SEARCH */
/* ================================= */

function searchProduct() {

    var input = document.getElementById("searchBox");

    if (!input) {
        return;
    }

    var searchValue = input.value.toLowerCase();

    var cards = document.querySelectorAll(".gallery .card");

    cards.forEach(function(card) {

        var cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchValue)) {

            card.style.display = "inline-block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================================= */
/* CATEGORY FILTER */
/* ================================= */

function filterProducts(category) {

    var cards = document.querySelectorAll(".gallery .card");

    cards.forEach(function(card) {

        var cardCategory =
            card.getAttribute("data-category");

        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "inline-block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================================= */
/* FESTIVAL OFFERS */
/* ================================= */

function showFestivalOffer() {

    var message =
        document.getElementById("festivalMessage");

    if (!message) {
        return;
    }

    message.innerHTML =
        "🎊 Festival Special Offer! 🎊<br>" +
        "Get exciting discounts on selected products.<br>" +
        "Order now on WhatsApp!";

}


/* ================================= */
/* PRODUCT DETAILS POPUP */
/* ================================= */

function openProduct(
    code,
    name,
    price,
    image
) {

    var popup =
        document.getElementById("productPopup");

    var popupImage =
        document.getElementById("popupImage");

    var popupCode =
        document.getElementById("popupCode");

    var popupName =
        document.getElementById("popupName");

    var popupPrice =
        document.getElementById("popupPrice");


    /* PRODUCT IMAGE */

    popupImage.src = image;

    popupImage.alt = name;


    /* PRODUCT DETAILS */

    popupCode.innerText =
        "Code: " + code;

    popupName.innerText =
        name;

    popupPrice.innerText =
        price;


    /* SHOW POPUP */

    popup.style.display = "block";

}


/* ================================= */
/* CLOSE PRODUCT POPUP */
/* ================================= */

function closeProduct() {

    var popup =
        document.getElementById("productPopup");

    popup.style.display = "none";

}


/* ================================= */
/* CLOSE POPUP WHEN CLICKING OUTSIDE */
/* ================================= */

window.addEventListener(
    "click",
    function(event) {

        var popup =
            document.getElementById("productPopup");

        if (
            event.target === popup
        ) {

            popup.style.display =
                "none";

        }

    }
);


/* ================================= */
/* IMAGE LIGHTBOX */
/* ================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        var lightbox =
            document.getElementById("lightbox");

        var lightboxImg =
            document.getElementById("lightbox-img");

        var closeButton =
            document.querySelector(".close");


        /* CHECK LIGHTBOX EXISTS */

        if (
            !lightbox ||
            !lightboxImg
        ) {

            return;

        }


        /* ALL GALLERY IMAGES */

        var galleryImages =
            document.querySelectorAll(
                ".gallery img"
            );


        /* OPEN IMAGE */

        galleryImages.forEach(
            function(img) {

                img.addEventListener(
                    "click",
                    function() {

                        lightbox.style.display =
                            "block";

                        lightboxImg.src =
                            img.src;

                    }
                );

            }
        );


        /* CLOSE BUTTON */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function() {

                    lightbox.style.display =
                        "none";

                }
            );

        }


        /* CLICK OUTSIDE IMAGE */

        lightbox.addEventListener(
            "click",
            function(event) {

                if (
                    event.target === lightbox
                ) {

                    lightbox.style.display =
                        "none";

                }

            }
        );

    }
);
