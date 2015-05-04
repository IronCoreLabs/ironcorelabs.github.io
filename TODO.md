# TODO

This is just a list of outstanding items for the website.

## Testing / Linting

- [ ] Add pre-commit script to run `grunt dist` and abort if any issues are found
- [ ] On dist, lint scss
- [ ] On dist, lint html
- [ ] Check all generated files for broken links, inaccessible content
    - Use https://www.npmjs.com/package/grunt-check-pages in `grunt dist`
- Cross browser and OS checks
  - [ ] Verify display of quotes on narrow and wide 
  - [ ] Verify svg logo display 
- make sure i'm using the plugins.js file

### Validation post-deploy

- [ ] https://dev.twitter.com/docs/cards/validation/validator
- [ ] https://developers.facebook.com/tools/debug
- [ ] http://www.google.com/webmasters/tools/richsnippets
- [ ] http://developers.pinterest.com/rich_pins/validator/
- [ ] Test RSS feed to make sure it works properly


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

## Templates

## Content

### Images and Animations


### Interactive Content

- [ ] Breach data dashboard

## Integrations

- [ ] Facebook: see 
  - https://www.facebook.com/insights/
  - https://developers.facebook.com/docs/platforminsights/domains

