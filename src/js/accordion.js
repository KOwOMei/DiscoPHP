document.addEventListener('DOMContentLoaded', function() {
  var acc = document.getElementsByClassName("accordion");
  
  for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
      });
  }
});