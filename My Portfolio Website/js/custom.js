$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$(document).ready(function() { //when document is ready
    $(window).scroll(function() { //when webpage is scrolled
      if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
        $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
      } else { //if not
        $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
      }
    });
  });