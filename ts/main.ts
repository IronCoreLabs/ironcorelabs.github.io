/// <reference path="refs/jquery/jquery.d.ts" />
/// <reference path="refs/stickyfill.d.ts" />

declare var disqus_shortname: string; 
declare var disqus_identifier: string; 
declare var disqus_title: string; 
declare var disqus_url: string; 


// Redirect if someone access github.io directly
// Don't even wait for DOM
var hostname = window.location.hostname;

if (/\.local$/.test(hostname)) {
  hostname = "local";
}
switch(hostname) {
    case 'ironcorelabs.com':
    case 'localhost':
    case 'local':
      break;
    default:
      if (window.location.replace) {
        window.location.replace('https://ironcorelabs.com/');
      } else {
        window.location.href = 'https://ironcorelabs.com';
      }
      break;
}

// After load...
$(function() {
  $('nav').Stickyfill();

  var form:HTMLFormElement = <HTMLFormElement>document.getElementById('mc-embedded-subscribe-form');
  
  form.reset = function() {
    // override the reset function -- its the only way we know
    // mailchimp had success submitting the form.
    $('#mc-embedded-subscribe-form .input-group').hide(1000);
  }
  
  // De-obfuscate email address
  var email = $('#contactemail').text() + '@' + window.location.hostname;
  $('#contactemail').text(email);
  $('#contactemail').attr('href', 'mailto:'+email);
  
  // De-obfuscate phone number
// to obfuscate, start with a number and do this:
  // "123-456-789".split('').map(function(v, idx) { return v.charCodeAt(0) ^ idx; }).join("-");
  var phone = $("#contacttel").text().split('-').map(function(v, idx) { 
    return String.fromCharCode(parseInt(v, 10) ^ idx); 
  }).join('');
  $('#contacttel').attr('itemprop', 'telephone')
    .attr('href', "tel:+1"+phone.replace(/-/g,''))
    .text(phone);

  if ($('#disqus_thread').length && disqus_shortname) {
    var dsq = document.createElement('script'); 
    dsq.type = 'text/javascript'; 
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }
  
  if ($('#twitter-container').length) {
    var tw = document.createElement('script'); 
    tw.type = 'text/javascript'; 
    tw.async = true;
    tw.id = "twitter-wjs";
    tw.src = '//platform.twitter.com/widgets.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(tw);
  }
  

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