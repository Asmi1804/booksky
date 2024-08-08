// Selecting popup box and popup overlay
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelpopupbutton = document.getElementById("cancel-popup");

cancelpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container, add-book, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescription = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescription.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;
    container.append(div);



    // Hide the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletebook(event)
{
    event.target.parentElement.remove()
}