let canSlide = true;

document.getElementById('next').onclick = function () {
   let list = document.querySelectorAll('.item');
   document.getElementById('slide').appendChild(list[0]);
   canSlide = false;
}
document.getElementById('prev').onclick = function () {
   let list = document.querySelectorAll('.item');
   document.getElementById('slide').prepend(list[list.length - 1]);
   canSlide = false;
}

setInterval(() => {
   if (!canSlide) {
      canSlide = true;
      return;
   }
   (() => {
      let list = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(list[0]);
   })();
}, 5000);

function ToggleMenu() {
   const menu = document.getElementById('menu');
   menu.style.left = (menu.style.left === '0px') ? '-300px' : '0px';
}



