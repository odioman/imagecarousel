const images = document.querySelectorAll('img');

let i = 0;

setInterval(function() {
    if (i == 0) {
        images[i].className = 'fade-in-image';
    } else if (i == images.length) {
        images[i - 1].className = 'fade-out-image';
        images[0].className = 'fade-in-image';
        i = 0;
    } else {
        images[i - 1].className = 'fade-out-image';
        images[i].className = 'fade-in-image';
    }

    i++;

}, 2000);



