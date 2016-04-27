/* Nav Bar Active Link Change */

$(document).ready(function () {
    $('.nav li').click(function(e) {

        $('.nav li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});

/* Log In */
/*
$(document).ready(function check(login) /*function to check userid & password*/ {
    /*the following code checkes whether the entered userid and password are matching*/
/*
    if (form.userid.value == "residentepg" && form.pswrd.value == "paseogales123") {
      window.open('dropDownMenu') /*opens the target page while Id & password matches*/
/*    } else {
      alert("Error Password or Username") /*displays error message*/
/*    }
  });
*/
/*
  var header = $('header');
  var range = 200;

  $(window).on('scroll', function () {

      var scrollTop = $(this).scrollTop();
      var offset = header.offset().top;
      var height = header.outerHeight();
      offset = offset + height / 2;
      var calc = 1 - (scrollTop - offset + range) / range;

      header.css({ 'opacity': calc });

      if ( calc > '1' ) {
        header.css({ 'opacity': 1 });
      } else if ( calc < '0' ) {
        header.css({ 'opacity': 0 });
      }
  });
8?
