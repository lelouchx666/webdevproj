var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


const rightSide = document.querySelector(".right-side");
const mobileNav = document.querySelector(".mobile-nav");

mobileNav.addEventListener('click', () => {
  const visibility = rightSide.getAttribute('data-visible');

  if(visibility === "false"){
    rightSide.setAttribute("data-visible", true);
  } else if (visibility === "true") {
rightSide.setAttribute("data-visible", false);
  }

});