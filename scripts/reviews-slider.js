var slideIndex = 1;
showReview(slideIndex);

function plusReview(n){
  showReview(slideIndex += n);
}

function showReview(n){
  var i;
  var reviews = document.getElementsByClassName("review-card");

  if (n > reviews.length){
    slideIndex = 1;
  };

  if (n < 1) {
    slideIndex = reviews.length;
  };

  for (i = 0; i < reviews.length; i++){
    reviews[i].style.display = "none";
  };

  reviews[slideIndex - 1].style.display = "flex";
}