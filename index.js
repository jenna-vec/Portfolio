window.addEventListener("scroll", function(){
    var offset = window.pageYOffset;
    document.getElementById("shape").style.top = -offset*0.9 + 'px';
});
