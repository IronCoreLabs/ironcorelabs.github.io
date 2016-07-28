# TODO

This is a list of outstanding items for the website.

## Top Priority

- Add integrity hash to default.html generated after javascript is generated
- Home page review
    - Remove Thoreau quote
    - Put data is everywhere before fortress
    - After fortress, explain breach disclosure laws
    - "primary features" -> "core value proposition"
- Tech page review
    - s/off device//
    - s/at the point of use --/at the point of use,/
    - s/Data is encrypted through/Data is locked through/
    - s/full lifecycle,/full lifecycle:/
    - s/in memory/in-memory/
    - Can I put the desk key quips on the same slide as the Wired quote and have 0K and E2E on the next slide under a heading like, "Better Key Handling"?
    - s/take this approach/use shared secret cryptography/
    - s/which is fine if/which is fine when/
    - s/Typically/Frequently"
    - s/another one./another./
    - s/pair (for some IronCore products, each participant will have a key pair per device)./pair. For some IronCore products, each participant will have a key pair per device./
    - s/such that only that participant/such that only that participant or device/
    - s/it (provided their private key stays private)./it./
    - s/and authenticating/and identity of/
    - s/with post-quantum crypto/\1 for future versions of its software/
    - Cross device slide -- add a footnote saying that these are coming with the IronSDK product and link to products page.
    - s/in the enterprise/in the enterprise, at scale, and with big data./
    - s/Stolen and compromised devices/Stolen phones/
    - s/No more spreadsheets.*./No more spreadsheets being cast off via email./
    - s/who has access to where the data is stored/who controls your servers/
    - s/who can decrypt/who can decrypt and read the contents of files./
    - Provided your adversary hasn't broken the strongest encryption algorithms, you can be assured....
- Product page
    - Highlight SFTP as an acronym with expansion.
    - s/retrieved/downloaded/
    - s/on server/at the server/
- About us page
    - s/or a the/or the/
    - what we might want to build next: cloud CRM, ERP, electronic medical record store, blockchain-backed markets or a next-gen e-bank, ...
    - Why we're here second paragraph lead sentence: Tomorrow's security foundations need to be far stronger than today's and require much more than just network-based [perimeter protections].
    - s/Sensitive data/Confidential documents/
    - s/life isn't/life aren't/
    - s/access to an office/\1 to stumble-upon and read or copy/
    - s/it's put/they're placed/
    - s/inside locked/inside layers of/
    - s/or safes/and safes/
    - s/We need digital safes for all of our sensitive data./The digital world needs equivalent and equally usable safes for sensitive data./
    - s/super user/full/
    - s/all of its data/all of a user's data/
    - s/can lead to massive data downloads/can lead to sensitive data access/
    - s/We're building a next generation of/We're building a better foundation for/
    - s/highly usable security/highly usable interfaces/
    - s/that gets out of the way/that get out of the way/
    - s/scales/scale/
    - s/and amounts of data/and large amounts of data/
    - s/solid and demonstrably correct/solid and reliable/
    - s/that use referential transparency, eschew global state and side effects/that use principles of math  to make software more testable, understandable, and less prone to unforeseen errors/
    - s/more competitive companies/more successful companies/
    - s/less sucept.*/with fewer bouts of theft and espionage/
- IronSFTP
    - First sentence: s/An open-source/IronSFTP is an open-source/
    - s/command-line SFTP, IronSFTP/command-line SFTP. IronSFTP/
    - s/optionally encrypted to other/optionally to other/
    - s/is compatible/are compatible/
    - s/filesystem permissions/filesystem permissions or group memberships/
    - s/to sensitive data./to sensitive data. That's why we built IronSFTP./
    - s/reduces potential problems/risk of theft/


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
