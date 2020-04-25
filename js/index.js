//Code by jobanjit
var header = document.getElementById("myHeader-leg");
var header2 = document.getElementById("myHeader-per");
var sticky = header.offsetTop;
var sticky2 = header2.offsetTop;

window.onscroll = function() {myFunction()};

function myFunction() {
  console.clear();
  console.log(window.pageYOffset);
  console.log(sticky);
  if (window.pageYOffset+75 > sticky && window.pageYOffset <3650 ) {
    header2.classList.remove("sticky");
    header.classList.add("sticky");
  }
  else if(window.pageYOffset > 3651 )
  {
    header.classList.remove("sticky");
    header2.classList.add("sticky");  
  } 
  else {
    header.classList.remove("sticky");
  }
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.getElementById("myBar").style.width = scrolled + "%";
}

//For mobile view navigation
function mynavFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//Code by Jobanjit Singh and Nishant Malik
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("header-nav").style.zIndex="1";   

 }, false);
