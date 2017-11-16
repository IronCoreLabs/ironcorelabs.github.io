/// <reference path="refs/jquery/jquery.d.ts" />
/// <reference path="refs/stickyfill.d.ts" />
/// <reference path="refs/svg4everybody.d.ts" />
/// <reference path="refs/twitter-fetch.d.ts" />
// Redirect if someone accesses github.io directly
// Don't even wait for DOM
var hostname = window.location.hostname;
if (/\.local$/.test(hostname) || window.location.protocol == "file:") {
    hostname = "local";
}
switch (hostname) {
    case 'ironcore-website-beta.herokuapp.com':
    case 'ironcorelabs.com':
    case 'localhost':
    case '127.0.0.1':
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
// Break out of any wrapping frames
if (top.location != location) {
    top.location.href = document.location.href;
}
// After load...
$(function () {
    if ($('.sticky').Stickyfill) {
        $('.sticky').Stickyfill();
    }
    svg4everybody();
    var form = document.getElementById('mc-embedded-subscribe-form');
    if (form) {
        form.reset = function () {
            // override the reset function -- its the only way we know
            // mailchimp had success submitting the form.
            $('#mc-embedded-subscribe-form .input-group').hide(1000);
        };
    }
    // De-obfuscate email address
    $('.contactemail').each(function (idx, emailEl) {
        var email = $(emailEl).text() + '@' + window.location.hostname;
        $(emailEl).text(email);
        $(emailEl).attr('href', 'mailto:' + email);
    });
    // De-obfuscate phone number
    // to obfuscate, start with a number and do this:
    // "123-456-789".split('').map(function(v, idx) { return v.charCodeAt(0) ^ idx; }).join("-");
    $(".contacttel").each(function (idx, phoneEl) {
        var phone = $(phoneEl).text().split('-').map(function (v, idx) {
            return String.fromCharCode(parseInt(v, 10) ^ idx);
        }).join('');
        $(phoneEl).attr('itemprop', 'telephone')
            .attr('href', "tel:+1" + phone.replace(/-/g, ''))
            .text(phone);
    });
    if ($('#disqus_thread').length && disqus_shortname) {
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
    if ($('#twitter-latest').length) {
        var config = {
            "id": "594367675494600704",
            "maxTweets": 6,
            "domId": "twitter-latest",
            "enableLinks": true,
            "showUser": false,
            "showImages": true,
            "showTime": true,
            "lang": "en"
        };
        twitterFetcher.fetch(config);
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
    var prevMenuItem = $('nav.sidebar .mainMenu li.active').prev();
    var nextMenuItem = $('nav.sidebar .mainMenu li.active').next();
    $(window).on("keydown", function (e) {
        if (e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA") {
            /* [ ← ] */
            if (e.keyCode === 37) {
                if (prevMenuItem.length) {
                    e.preventDefault();
                    window.location.href = prevMenuItem.children('a').attr('href');
                }
            }
            else if (e.keyCode === 39) {
                if (nextMenuItem.length) {
                    e.preventDefault();
                    window.location.href = nextMenuItem.children('a').attr('href');
                }
            }
            else if (e.keyCode === 32) {
                e.preventDefault();
                changeSlide('increase');
            }
        }
    });
});
