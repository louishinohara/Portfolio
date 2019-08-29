$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});
/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() { //when document(DOM) loads completely. 
  // Transition effect for navbar 
  $(window).scroll(function() { //function is called while you scrolls 
    // checks if window is scrolled more than 300px, adds/removes solid class
    if($(this).scrollTop() > 300) { 
        $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
    } else {
        $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
    }
  });
});

/*========== SMOOTH SCROLL ==========*/
$(document).ready(function()    {
  $("a").on('click', function(event)  {
      if (this.hash !== "")   {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate(    {
              scrollTop: $(hash).offset().top
          },  850, function() {
              window.location.hash = hash;
          });
      }
  });
});


//  TOP SCROLL
$(document).ready(function() { //when document is ready
    $(window).scroll(function() { //when webpage is scrolled
      if ($(this).scrollTop() > 300) { //if scroll from top is more than 500
        $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
      } else { //if not
        $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
      }
    });
  });