---
layout: slides
title: About
lightbackground: 1
---

{% include slides/tophead-3coltext.html
  id="why"
  header="Why we're here"
  classes="fade-8"
  details="We believe the current generation of cloud applications are fundamentally insecure."
  col1="When we think about what we might want to build next -- the next great business productivity solution, an internet-connected gutter cleaner or a the next big social network -- first we need a foundation for security."
  col2="Today's threat model requires more than just [perimeter security][perimsec].  Sensitive data in real life isn't left out in the open for anyone with access to an office, it's put inside locked offices, drawers or safes.  We need digital safes for all of our sensitive data."
  col3="[90% of security incidents][worseningsecurity] are due to application vulnerabilities. Typically the application has super user access to all of its data so hacking the app can lead to massive data downloads. **We're here to change that equation.**"
  background="/img/about/space.jpg"
%}


{% include slides/tophead-bottom2iconboxes.html
  id="what"
  classes="fade-8"
  header="What we do"
  box1head="Foundation for the future"
  box1body="We're building a next generation of application security for the next generation of enterprise could applications. IronCore is focused on highly usable security that gets out of the way and scales to massive numbers of users and amounts of data. We're building access controls and identities that don't rely on shared secrets and trusted servers, or even trusted applications. **This is the future of digital data.**"
  box2head="Modern, Solid Engineering"
  box2body="We're very opinionated about what constitutes _good software_. We're craftspeople building solid and demonstrably correct software using [functional programming][funcprog] paradigms that use referential transparency, eschew global state and side effects. Contrast this to the [outdated software][shoddysoftware] underlying many existing security libraries. **We build for security and reliability.**"
  background="/img/about/rock-climbing.jpg"
  backgroundTop="1"
%}


{% comment %}

Second sentence too wordy.

{% endcomment %}

{% include slides/slideStart.html id="future" header="Where we're going" classes="fade-8" %}
<div markdown="1">
## Where we're going

Our goal is to eliminate the daily breaches seen in the news. If sensitive data is well protected, then [breaches are non-events][breachdisclosure] and public disclosure isn't required. Strong data security will bring us to a world with stronger national security, better privacy, and safer intellectual property leading to more competitive companies less susceptible to corporate or government espionage.

</div>
{% include slides/slideEnd.html background="/img/about/trains.jpg" %}


{% include slides/slideStart.html id="press" header="Press Releases" classes="fade-8" %}
<div markdown="1">

## Press Releases

* [IronCore Finds Major Drop in Application Security]({{ site.baseurl }}/press/ironcore-finds-major-drop-in-app-security/), July 1, 2016

</div>
{% include slides/slideEnd.html background="/img/about/writing.jpg" %}


{% comment %}

Really ugly.

{% endcomment %}

{% include slides/slideStart.html id="tweets" header="Recent Tweets" classes="fade-8" %}

<h2 class="ae-1">Recent Tweets</h2>
<div id="twitter-latest" class="ae-2"></div>
<div class="center">
  <a href="https://twitter.com/ironcorelabs" class="button round uppercase deepRed ae-5 fromCenter cropBottom">All Tweets</a>
</div>

{% include slides/slideEnd.html background="/img/about/birds.jpg" %}



{% include slides/slideStart.html id="contact" header="Contact Us" classes="fade-8" %}
<div markdown="1">
## Contact us

You can find us across social media, on github, phone and via email.

<ul class="contactButtons">
  <li class="ae-1 fromLeft">
    <a href="https://twitter.com/{{ site.follow-us.twitter }}">
      <i class="fa fa-twitter"></i>
      <span class="contactLabel">Twitter</span>
      <span class="contactAddress">@{{ site.follow-us.twitter }}</span>
    </a>
  </li>
  <li class="ae-2 fromLeft">
    <a href="https://linkedin.com/company/{{ site.follow-us.linkedin }}">
      <i class="fa fa-linkedin"></i>
      <span class="contactLabel">LinkedIn</span>
    <span class="contactAddress">/company/{{ site.follow-us.linkedin }}</span></a>
  </li>
  <li class="ae-3 fromLeft">
    <a href="https://facebook.com/{{ site.follow-us.facebook }}">
    <i class="fa fa-facebook"></i>
    <span class="contactLabel">Facebook</span>
    <span class="contactAddress">{{ site.follow-us.facebook }}</span></a>
  </li>
  <li class="ae-4 fromLeft">
    <a href="https://github.com/{{ site.follow-us.github }}">
    <i class="fa fa-github"></i>
    <span class="contactLabel">Github</span>
    <span class="contactAddress">{{ site.follow-us.github }}</span></a>
  </li>
  <li class="ae-5 fromLeft">
    <i class="fa fa-envelope"></i>
    <span class="contactLabel">Email</span>
    <span class="contactAddress"><a href="" class="contactemail">info</a></span>
  </li>
  <li class="ae-6 fromLeft">
    <i class="fa fa-phone"></i>
    <span class="contactLabel">Phone</span>
    <span class="contactAddress"><a href="" class="contacttel">52-48-55-46-61-51-62-42-49-63-58-60</a></span>
  </li>
</ul>

</div>
{% include slides/slideEnd.html background="/img/about/using-mobile-phone.jpg" %}



[perimsec]: https://blog.ironcorelabs.com/the-inevitable-demise-of-perimeter-security-9863ef372294
[worseningsecurity]: https://blog.ironcorelabs.com/the-worsening-state-of-application-security-c50a49f00652
[funcprog]: https://en.wikipedia.org/wiki/Functional_programming
[breachdisclosure]: https://blog.ironcorelabs.com/breach-disclosure-laws-and-consequences-f7e14edca29e
[shoddysoftware]: http://queue.acm.org/detail.cfm?id=2602816
