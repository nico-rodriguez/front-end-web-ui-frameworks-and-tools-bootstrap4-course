$(document).ready(function() {
  $('#carousel').carousel({ interval : 2000 });
  $('#carouselButton').click(function() {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
      $('#carousel').carousel('pause');
    } else {
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
      $('#carousel').carousel('cycle');
    }
  });
});