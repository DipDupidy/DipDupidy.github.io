//Rooms sections carousel

var roomIndex = 1;
showRoom(roomIndex);

function currentRoom(m){
    showRoom(roomIndex = m)
}

function showRoom(m){
    var j;
    var rooms = document.getElementsByClassName("room-info-block");
    var roomDots = document.getElementsByClassName("rooms-dot");

    for (j = 0; j < rooms.length; j++){
        rooms[j].style.display = "none";
    }
    rooms[roomIndex-1].style.display = "block";
}


//Room's galery slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img-slides");
    var dots = document.getElementsByClassName("counter-dot");

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}