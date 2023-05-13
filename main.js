
    // Run the JavaScript code after the document has finished loading
    document.addEventListener('DOMContentLoaded', function() {
      // Add event listeners to each .nav-link element
      var navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent the default link behavior

          var targetId = link.getAttribute('href'); // Get the target section ID from the link's href attribute
          var targetSection = document.querySelector(targetId); // Find the target section element

          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly
          }
        });
      });
    });
  