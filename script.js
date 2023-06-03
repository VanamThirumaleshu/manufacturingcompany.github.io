


hamburger=document.querySelector(".hamburger");
hamburger.onclick=function(){
    navBar=document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}



document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    var navLinks = document.getElementsByClassName('nav-link');
  
    // Add click event listener to each link
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        // Remove 'active' class from all links
        for (var j = 0; j < navLinks.length; j++) {
          navLinks[j].classList.remove('active');
        }
  
        // Add 'active' class to the clicked link
        this.classList.add('active');
        navBar.classList.remove("active");
      });
    }
  });


