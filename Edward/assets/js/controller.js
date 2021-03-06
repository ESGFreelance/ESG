document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typedOracle', {
        stringsElement: '#typed-strings',
        typeSpeed: 0,
        backSpeed: 20,
        startDelay: 1000,
        loop: true,
        loopCount: 3
    });
    document.querySelector('.reset').addEventListener('click', function() {
        typed.reset();
    });
});