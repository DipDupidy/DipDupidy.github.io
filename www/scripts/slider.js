var rooms = document.getElementsByClassName("room-info-block");
var roomsId = [];
var slides = document.getElementsByClassName("img-slides");

rooms_base();

function rooms_base(){

    for (i=0;i<rooms.length;i++){
        roomsId.push(rooms[i].id);
    };

    currentRoom("room-index-1")
}

function currentRoom(n){
    showRoom(currentRoomId = "room-index-"+String(n));
}

function showRoom(m){
    for(i=0;i<rooms.length;i++){
        if (i+1 == Number(m.slice(-1))){
            rooms[i].style.display = "block";
        }
        else {
            rooms[i].style.display = "none";
        }
    };

    currentSlide(m,1);
}

function plusSlides(roomId, leap){
    for(i=0;i<slides.length;i++){
        if (slides[i].id=="slide-index-"+roomId){
            if (slides[i].style.display == "block"){
                slides[i].style.display = "none";
                slides[i+leap].style.display = "block";
                return;
            }
        }
        if (i+leap>=slides.length){
            slides[0].style.display = "block";
            slides[i].style.display = "none";
            return;
        }
    }
}

function currentSlide(r_index, s_index){
    showSlide(r_index, s_index);
}

function showSlide(room, slide){
    var slidesId = [];
    for(j=0;j<slides.length;j++){
        slides[j].style.display = "none";
    };

    for(j=0;j<slides.length;j++){
        let slideId = slides[j].id;
        let roomId = room;
        if (slideId.slice(-1)==roomId.slice(-1)){
            slidesId.push(slides[j]);
        }
    };

    for (j=0;j<slidesId.length;j++){
        if (j==slide-1){
            slidesId[j].style.display = "block";
        }
    };
}