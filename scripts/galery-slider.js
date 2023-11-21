var imageIndex = 1;
showImage(imageIndex);

function plusImage(n){
  showImage(imageIndex += n)
}

function currentImage(n){
  showImage(imageIndex = n)
}

function showImage(n){
  var i;
  var images = document.getElementsByClassName("galery-image");
  var dots = document.getElementsByClassName("counter-dot");

  if (n > images.length){
    imageIndex = 1;
  }
  
  if (n < 1){
    imageIndex = images.length;
  }

  for (i = 0; i < images.length; i++){
      images[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active","");
  }

  images[imageIndex - 1].style.display = "block";
  dots[imageIndex - 1].className += " active";
}