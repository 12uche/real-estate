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