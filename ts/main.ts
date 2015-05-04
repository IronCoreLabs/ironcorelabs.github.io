/// <reference path="refs/jquery/jquery.d.ts" />
/// <reference path="refs/stickyfill.d.ts" />

$(function() {
  $('nav').Stickyfill();
  var email = $('#contactemail').text() + '@' + window.location.hostname;

  var form:HTMLFormElement = <HTMLFormElement>document.getElementById('mc-embedded-subscribe-form');
  
  form.reset = function() {
    // override the reset function -- its the only way we know
    // mailchimp had success submitting the form.
    $('#mc-embedded-subscribe-form .input-group').hide(1000);
  }
  
  // De-obfuscate email address
  $('#contactemail').text(email);
  $('#contactemail').attr('href', 'mailto:'+email);

  function poormanStickyfill() {
    var header = document.getElementById('header');
    var origOffsetY = header.offsetTop;

    function onScroll(e) {
      window.scrollY >= origOffsetY ? header.classList.add('sticky') :
                                      header.classList.remove('sticky');
    }
    document.addEventListener('scroll', onScroll);
  }
 
});