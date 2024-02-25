function toggleNav() {
   var sidenav = document.getElementById("sidenav");
   var main = document.querySelector(".main");
   var menuIcon = document.getElementById("menuIcon");
 
   if (sidenav.style.width === "250px") {
     sidenav.style.width = "0";
     main.style.marginLeft = "0";
     menuIcon.classList.remove("fa-times");
     menuIcon.classList.add("fa-bars");
   } else {
     sidenav.style.width = "250px";
     main.style.marginLeft = "250px";
     menuIcon.classList.remove("fa-bars");
     menuIcon.classList.add("fa-times");
   }
}
   var links = document.querySelectorAll(".sidenav a");
links.forEach(function(link) {
   link.addEventListener("click", function() {
      links.forEach(function(item) {
      item.classList.remove("active");
   });
   link.classList.add("active");
   });
});
