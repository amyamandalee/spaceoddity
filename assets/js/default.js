$(function() {
  $('body').on('click', '#toggle-guitar', function(e) {
    e.preventDefault();
    $(".so-bounding-box").toggleClass("so-bounding-box--show-guitar");
    $(".so-body").toggleClass("so-body--cursor--no-guitar");
  });
  $('body').on('click', '#toggle-overlay', function(e) {
    e.preventDefault();
    $(".so-overlay-page").toggleClass("so-overlay-page--open");
    $(".so-button").toggleClass("so-button--open");
  });
});
