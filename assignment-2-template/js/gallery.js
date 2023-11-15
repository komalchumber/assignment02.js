// js/gallery.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the thumbnail list
    var thumbnails = document.getElementById('thumbnails');
    
    //Add the titles
    var imageTitles = [
        'Market in Münster',
        'Sentmaring Park',
        'Poppies in cornfield',
        'Daffodils in Sentmaring park',
        'Sunflowers in the hamlet Dernekamp'
      ];
  
    // Attach click event listeners to thumbnails
    thumbnails.addEventListener('click', function (event) {

      // Check if the clicked element is an image
      if (event.target.tagName === 'IMG') {

        // Get the clicked thumbnail image
        var thumbnailSrc = event.target.src;

        var index = Array.from(thumbnails.children).indexOf(event.target.parentNode);
  
        // Update the image and title
        updateImage(thumbnailSrc, imageTitles[index]);
      }
    });
  
    // Function to update image and title
    function updateImage(thumbnailSrc,title) {
      
      var largeImage = document.querySelector('#gallery figure img');
      var caption = document.querySelector('#gallery figure figcaption');
  
      // Set the large image to the clicked thumbnail
      largeImage.src = thumbnailSrc;
  
      // Set the titles below the large image
      caption.textContent = title;
    }
  });
  