document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    var rects = document.getElementsByClassName('rectangle');
    for (var i = 0; i < rects.length; i++) {
        var scale = Math.max(0, 1 - scrollPosition / (windowHeight / 2));
        rects[i].style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
    }
});
