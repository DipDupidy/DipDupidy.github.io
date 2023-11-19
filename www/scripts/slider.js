var rooms = document.getElementsByClassName("room-info-block");
var roomsId = [];
var slides = document.getElementsByClassName("img-slides");

rooms_base();

function rooms_base(){

    for (i=0;i<rooms.length;i++){
        roomsId.push(rooms[i].id);
    };

    var currentRoomId = "room-index-1";
    showRoom(currentRoomId);
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

function currentSlide(r_index, s_index){
    showSlide(r_index, s_index);
}

function showSlide(room, currentSlide){
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
        if (j==currentSlide-1){
            slidesId[j].style.display = "block";
        }
    };
}