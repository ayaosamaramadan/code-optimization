// top button
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

// darkmode
document.addEventListener('DOMContentLoaded', (event) => {
  let darkk = document.getElementById('darkM');
  let header = document.querySelector('header');
  let footer = document.querySelector('footer');
  let aside = document.querySelector('aside');
  let body = document.body;
 let cardd= document.querySelectorAll('.card');
  darkk.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    cardd.forEach(card => {
      card.classList.toggle('dark-mode');
    });
    aside.classList.toggle('dark-mode');

  
    let icon = darkk.querySelector('i');
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon-o');
      icon.classList.add('fa-sun-o');
    } else {
      icon.classList.remove('fa-sun-o');
      icon.classList.add('fa-moon-o');
    }
  });
});