window.onscroll = function() {myFunction()};
function myFunction() {
    console.log('in fn');
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  console.log(scrolled);
  document.getElementById("myBar").style.width = scrolled + "%";
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("header-nav").style.zIndex="1";
       

 }, false);

 