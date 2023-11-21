function showPasswordOverlay(overlayId){
  var overlay = document.getElementById(overlayId);
  overlay.style.display = "flex";
}

function closePasswordOverlay(overlayId){
  var overlay = document.getElementById(overlayId);
  overlay.style.display = "none";
}