let TopBtn = document.getElementById("topbtn");
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    TopBtn.style.display = "block";
  } else {
    TopBtn.style.display = "none";
  }
};
TopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
