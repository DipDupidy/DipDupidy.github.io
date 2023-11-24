function showBurgerMenu(){
  var menuBackground = document.getElementById("mobile-navi-container");
  var button = document.getElementById("burger-button");
  var itemTop = document.getElementById("burger-item-top");
  var itemCenter = document.getElementById("burger-item-center");
  var itemDown = document.getElementById("burger-item-down");
  var orderBtn = document.getElementById("burger-order-btn");
  var menuList = document.getElementById("mobile-navi-list");

  menuBackground.style.backgroundColor = menuBackground.style.backgroundColor === "rgb(70, 191, 118)" ? "rgba(70, 191, 118, 0)" : 'rgba(70, 191, 118, 1)';
  menuBackground.style.maxWidth =  menuBackground.style.maxWidth === "none" ? '1440px' : 'none';
  menuBackground.style.height =  menuBackground.style.height === "100vh" ? '81px' : '100vh';

  button.style.boxShadow = button.style.boxShadow === "none" ? '0px 0px 10px 0px rgba(0, 0, 0, 0.10)' : 'none';

  itemCenter.style.opacity = itemCenter.style.opacity === "0" ? '1' : '0';

  itemTop.style.top = itemTop.style.top === "21px" ? '13px' : '21px';
  itemTop.style.left = itemTop.style.left ===  "7px" ? '50%' : '7px';
  itemTop.style.transform = itemTop.style.transform === "rotate(45deg)" ? 'translate(-50%, -50%)' : 'rotate(45deg)';

  itemDown.style.top = itemDown.style.top === "21px" ? '33px' : '21px';
  itemDown.style.left = itemDown.style.left === "7px" ? '50%' : '7px';
  itemDown.style.transform = itemDown.style.transform === "rotate(135deg)" ? 'translate(-50%, -50%)' : 'rotate(135deg)';

  orderBtn.style.paddingLeft = orderBtn.style.paddingLeft === "0px" ? '20px' : '0px';

  menuList.style.display = menuList.style.display === "flex" ? 'none' : 'flex';
}