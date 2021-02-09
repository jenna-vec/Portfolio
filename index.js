window.addEventListener("load", function(){
    $("#words, #landscape-words").css("animation", "popUp 2s 1")
    $("#words, #landscape-words").css("opacity", "1")
});

const body = document.body;
const triggerMenu = document.querySelector("#nav-column");
const nav = document.querySelector("#nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;


window.addEventListener("scroll", function(){
    var offset = window.pageYOffset;

    $("#pink-cone").css("transform", "rotate(" +offset*.1 + "deg)")
    $("#green-button").css("animation", "bounce 2s infinite")

    if (offset <= 0){
        body.classList.remove("scroll-up");
        return;
    }
    if (offset > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (offset < lastScroll && body.classList.contains(scrollDown)) {
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
    lastScroll = offset;
});
