# TODO

This is a list of outstanding items for the website.

## Top Priority

- Add integrity hash to default.html generated after javascript is generated
- mailchimp test

## Medium Priority

- UTM

## Testing / Linting


## Optimization

- [ ] Mailchimp javascript http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js
    - Download and strip out the leading jquery crap
        - Save the file and minify
        - Combine with other JS files needed on every page
        - Ideally, make a grunt task to do this so updates and bug fixes can be fetched and tested
        - Also in the mailchimp.html include, there's some raw script.  Add that back in.
- [ ] Strip out unused CSS
    - Ideally do this as a build step and generically.
- [ ] Reduce web fonts
    - Use a custom font that includes the bits of fontawesome and other collections that we actually use.
    - See https://icomoon.io/app/#/select/font
- Combine some of the meta like on stackexchange.  Example:

    <meta name="twitter:description" property="og:description" itemprop="description" content="It ..." />
