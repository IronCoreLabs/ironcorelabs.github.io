/// <reference path="refs/jquery/jquery.d.ts" />
/// <reference path="refs/stickyfill.d.ts" />
// Redirect if someone access githubpages.io directly
var hostname = window.location.hostname;
if (/\.local$/.test(hostname)) {
    hostname = "local";
}
switch (hostname) {
    case 'ironcorelabs.com':
    case 'localhost':
    case 'local':
        break;
    default:
        if (window.location.replace) {
            window.location.replace('https://ironcorelabs.com/');
        }
        else {
            window.location.href = 'https://ironcorelabs.com';
        }
        break;
}
$(function () {
    $('nav').Stickyfill();
    var email = $('#contactemail').text() + '@' + window.location.hostname;
    var form = document.getElementById('mc-embedded-subscribe-form');
    form.reset = function () {
        // override the reset function -- its the only way we know
        // mailchimp had success submitting the form.
        $('#mc-embedded-subscribe-form .input-group').hide(1000);
    };
    // De-obfuscate email address
    $('#contactemail').text(email);
    $('#contactemail').attr('href', 'mailto:' + email);
    function poormanStickyfill() {
        var header = document.getElementById('header');
        var origOffsetY = header.offsetTop;
        function onScroll(e) {
            window.scrollY >= origOffsetY ? header.classList.add('sticky') : header.classList.remove('sticky');
        }
        document.addEventListener('scroll', onScroll);
    }
});
