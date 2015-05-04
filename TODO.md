# TODO

This is a list of outstanding items for the website.

## Top Priority

- Linkcheck
- [x] Webmaster tools
- [x] Fix FB
- SVG fallback?  - just gen images and do onerror trick
- UTM
- Use "summary" front matter when available for meta description and link
  - Add to news page and home page and try to make each unique.
- git commit script
- test the share links

## Testing / Linting

- [ ] Add pre-commit script to run `grunt dist` and abort if any issues are found
- [ ] On dist, lint scss
- [ ] On dist, lint html
- [ ] Check all generated files for broken links, inaccessible content
    - Use https://www.npmjs.com/package/grunt-check-pages in `grunt dist`
- make sure i'm using the plugins.js file


## Optimization

- [ ] Mailchimp javascript http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js
    - Download and strip out the leading jquery crap
        - Save the file and minify
        - Combine with other JS files needed on every page
        - Ideally, make a grunt task to do this so updates and bug fixes can be fetched and tested
        - Also in the mailchimp.html include, there's some raw script.  Add that back in.
- [ ] Strip out unused CSS
    - Ideally do this as a build step and generically.
    - Specifically ditch the glyphicon stuff including the loading of the fonts
- [ ] Reduce web fonts
    - Use a custom font that includes the bits of fontawesome and other collections that we actually use.
    - See https://icomoon.io/app/#/select/font
- Move disqus javascript to site-wide javascript conditional upon #disqus_thread being on the page (so it loads at the end of the page)
- Combine some of the meta like on stackexchange.  Example:

    <meta name="twitter:description" property="og:description" itemprop="description" content="It ..." />

## Content

- [ ] Breach data dashboard
- [ ] Encryption blog article 

## Integrations

- [x] Facebook: see 
  - https://www.facebook.com/insights/
  - https://developers.facebook.com/docs/platforminsights/domains

