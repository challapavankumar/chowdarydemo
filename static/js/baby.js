const slideshowImages=document.querySelectorAll(".siri .slideshow-image");
const nextImageDelay=1000;
let currentImageCounter=0;
slideshowImages[currentImageCounter].style.display="block";
setInterval(nextimage,nextImageDelay)
function nextimage(){

slideshowImages[currentImageCounter].style.display="block";
currentImageCounter= (currentImageCounter+1) % slideshowImages.length;
slideshowImages[currentImageCounter].style.display="block";
}