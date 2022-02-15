$("#check").click(function() {
    $('.nav-box').toggleClass( "slide" );
});

let projects = [
    {
        "name": "Hi Egg",
        "description": "Hi Egg is a commerce demo store built with React, using Commerce.js and Stripe. Products are imported from the Hi Egg Commerce.js using their API. This project includes a sort function, search function, size variants, cart, checkout, and payments.",
        "link": "https://hi-egg-8632b.web.app/",
		"photos": ["img/projects/hi-egg.png", "img/projects/hi-egg2.png"],
		"github":"https://github.com/jenna-vec/E-Commerce"
    },
    {
        "name": "Recipe Book",
        "description": "This React project utilizes Firebase authentication and Firestore. Users can create an account with their email, then write/update/delete recipes in their account. Users are also able to change their account name and password using Firebase Authentication.",
        "link": "https://recipesbooks.net/",
		"photos": ["img/projects/recipe.png", "img/projects/recipe2.png"],
		"github":"https://github.com/jenna-vec/Recipe-Book"
    }
]


$('#modal, #column').click(function(e){
    const number = $(e.currentTarget).attr('name');

    var modal = $("<div>");
    modal.addClass("modal");

    var close = $("<p>");
    close.attr('id', 'close')
    close.addClass("pointer");
    close.text("x");

    var br = $("<br>")

    var h3 = $("<h3>");
    h3.text(projects[number].name)

    var description = $("<p>");
    description.addClass("modal-text");
    description.text(projects[number].description)

    var flexbox = $("<div>");
    flexbox.addClass("modal-flex");


    for (let i = 0; i < projects[number].photos.length; i++) {
        var a = $("<a>");
        a.attr('href', projects[number].link);
        var img = $("<img>");
        img.attr("id", "modal-img");
        img.attr("src", projects[number].photos[i])
        a.append(img);
        flexbox.append(a);
    }

    let text = $("<a>");
    text.addClass("smaller");
    text.attr("href", projects[number].github);
    text.text("view source code");

    modal.append(close).append(br).append(h3).append(description).append(flexbox).append(text);
    $(".modal-container").append(modal);

    $("#close").click(function() {
        $(".modal-container").empty();
    })

    $('body').click(function (event) {
        if(!$(event.target).is(".modal-container") && !$(event.target).is("#modal")) {
            $(".modal-container").empty();
        }  
    })
});
