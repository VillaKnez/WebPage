//Share Button ---------------------------------------------------------------------------------------------------------------------------------
const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => {
      alert('URL copied to clipboard!');
    })
    .catch((error) => {
      console.error('Failed to copy URL: ', error);
    });
});
//----------------------------------------------------------------------------------------------------------------------------------------------


//Recenzije ------------------------------------------------------------------------------------------------------------------------------------
const reviewsButton = document.getElementById('reviews-button');
const placeId = 'ChIJATEXTfUiNRMR8IMgUvDYmhw';

reviewsButton.addEventListener('click', () => {
  const url = `https://www.google.com/maps/place/?q=place_id:ChIJATEXTfUiNRMR8IMgUvDYmhw#reviews`;
  window.open(url, '_blank');
});
//----------------------------------------------------------------------------------------------------------------------------------------------


//Overlays -------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    var overlay1 = document.getElementById("overlay1");
    var overlay2 = document.getElementById("overlay2");
  
    var showOverlay1Buttons = document.querySelectorAll("#show-overlay1-button");
    var showOverlay2Buttons = document.querySelectorAll("#show-overlay2-button");
  
    var closeOverlay1Button = overlay1.querySelector(".close");
    var closeOverlay2Button = overlay2.querySelector(".close");
  
    function showOverlay1() {
      overlay1.style.display = "block";
    }
  
    function hideOverlay1() {
      overlay1.style.display = "none";
    }
  
    function showOverlay2() {
      overlay2.style.display = "block";
    }
  
    function hideOverlay2() {
      overlay2.style.display = "none";
    }
  
    for (var i = 0; i < showOverlay1Buttons.length; i++) {
      showOverlay1Buttons[i].addEventListener("click", function() {
        showOverlay1();
      });
    }
  
    for (var i = 0; i < showOverlay2Buttons.length; i++) {
      showOverlay2Buttons[i].addEventListener("click", function() {
        showOverlay2();
      });
    }
  
    closeOverlay1Button.addEventListener("click", function() {
      hideOverlay1();
    });
  
    closeOverlay2Button.addEventListener("click", function() {
      hideOverlay2();
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == overlay1) {
        hideOverlay1();
      }
  
      if (event.target == overlay2) {
        hideOverlay2();
      }
    });
});
//----------------------------------------------------------------------------------------------------------------------------------------------


//Picture Slider -------------------------------------------------------------------------------------------------------------------------------
var images = document.querySelectorAll('.SlideshowImage');
        var currentIndex = 0;

        images[currentIndex].classList.add('active');

        function updateSlide() {
            var currentImage = images[currentIndex];
            var nextIndex = (currentIndex + 1) % images.length;
            var nextImage = images[nextIndex];

            currentImage.style.opacity = '0';
            nextImage.style.opacity = '1';

            currentIndex = nextIndex;
        }

        setInterval(updateSlide, 2000); // Change slide every 2 seconds
//----------------------------------------------------------------------------------------------------------------------------------------------