$(function() {
  var guitarAudio = document.getElementById('so-soundtrack');
  var played = false;

  guitarAudio.addEventListener('loadeddata', () => {
    // When character container is clicked
    $('#toggle-guitar').on('click', function () {
      if (!played) {
        // FIRST CLICK
        // Play the guitar and set that the guitar has played already
        guitarAudio.play();
        played = true;

        // toggle classes
        $(".so-bounding-box").addClass("so-bounding-box--show-guitar");
        $(".so-body").addClass("so-body--cursor--no-guitar");

      } else {
        // SECOND CLICK
        // When guitar has played already, pause guitar audio
        guitarAudio.pause();
        played = false;

        // toggle classes
        $(".so-bounding-box").removeClass("so-bounding-box--show-guitar");
        $(".so-body").removeClass("so-body--cursor--no-guitar");
      }
    });
  });

  $('body').on('click', '#toggle-overlay', function(e) {
    e.preventDefault();
    $(".so-overlay-page").toggleClass("so-overlay-page--open");
    $(".so-button").toggleClass("so-button--open");
  });
});
