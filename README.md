# IronCore Labs Website

This is the source for the IronCore Labs website and blog hosted by github.

# Writing Posts

All blog posts should now be written on Medium.

## Embedding Media

### Video

When embedding video into a page, you will need to drop in some HTML.  If you're using youtube, go to the video on youtube, click on `share`, then click `embed` then copy and paste.  But wait, you need to modify that.  You'll get something like:

    <iframe width="420" height="315" src="https://www.youtube.com/embed/war0gHL26ns" frameborder="0" allowfullscreen></iframe>

First thing to do is delete the width and height.  We want our videos to be responsive.  Next, you don't need that frameborder stuff.  Next, we need to make it more XML like, so make `allowfullscreen="1"`.  Then we need to add classes and wrap in a div.  So it should end up looking like this if it is a **wide-aspect video:**

    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/war0gHL26ns" allowfullscreen="1">
      </iframe>
    </div>

If this were a **4:3 aspect ratio**, you'd do this instead:

    <div class="embed-responsive embed-responsive-4by3">
      <iframe class="embed-responsive-item" src="..."></iframe>
    </div>

Note: don't indent that code or it might be treated like a code block to display instaead of html.

If github allowed custom plugins, this would be way easier.  But if you follow these instructions, you're all set.

# Local Dev and Testing

To test locally, do the following:

    rvm use 2.1
    cd ~/path/to/project
    gem install bundler
    bundle install
    pip install Pygments
    npm install -g grunt-cli
    npm install tsd@0.5.7 -g
    npm install
    bower install

Then from the repo root, run grunt for local dev:

    grunt dev

And to package everything up nicely to get ready to push to github:

    grunt dist

You must run `grunt dist` before checking things in and make sure you check in the generated CSS and JS files that aren't in .gitignore.

Final step: make sure you install the git pre-commit hook:

    ln -s pre-commit.sh .git/hooks/pre-commit

This will force run grunt dist when you try to commit something.  So yeah, it'll slow down your committing and be annoying if you've already done things right.  But its the right thing to do, so do it.

## Explanation of Dependencies

The dependencies seem a little out of control for such a small, static site, so its worth a few words on what's being used and why:

* Jekyll manages the blog pages and building the static html files as well as compiling sass.
  * Sass is just way better than regular css for improved syntax, variables, code reuse, etc.
  * We use markdown for blog posts and some other pages for simplicity.
  * Jekyll is a ruby thing and is responsible for the various gem commands above.  For coloring code, it uses Pygments, a python project.
* TypeScript brings classes and typed parameters to JS, which is a massive improvement.
  * This requires more pre-processing, but this time, Github Pages won't do it for us, so we need to save the original files and also commit the generated files to the repo.
* We have chosen to use bootstrap for responsive grids and some other features.
  * To make the most of this, we want to be able to directly call the same mixins, change variables used in generating themes, etc.  Consequently we use the sass port of bootstrap and include those files directly in our sass.
  * We install these files via bower, which manages client-side javascript and sass dependencies and will allow us to upgrade later.
  * Because github pages will compile sass, we check in the raw bootstrap files.
      * We may yet yank this from the repo and just process css before pushing changes back to github.  That way we can control minification and combination of files.  But it will be needed to build.
* Grunt is like make for node.js apps and we use it to manage our build stuff.
* Immutable-js and Underscore bring reasonable functional programming tools to JavaScript -- installed via bower.  TBD if we commit to repo.

## Other tools

I use `svgo` to optimize the svg files.  I'm just checking files in optimized instead of making a build step for that.

For png files I'm using the `optipng` command.

I'm also spell checking with `ispell` which can be installed with home brew (`brew install ispell`) like this:

    ispell -p .ispell_english *.html news/*.html _posts/*.md _drafts/*.md

Sadly, I can't make that work from grunt since grunt doesn't pass along a tty and ispell requires one.

You can use `grunt checkPages:production` to scan the live site and make sure the links there are in good shape.

## Browser compatibility

I used [browserstack.com](https://www.browserstack.com/) while testing.  That worked very well and I'd seriously consider purchasing to do more cross-device, operating system and browser testing.

For support, we currently do not support IE8 and below.  On Windows 7, the SVG files show as broken.  In Windows XP, the TLS connection cannot be made and no connection to the site is possible.

These are both fixable.  We could allow in-secure connections over http and we could give a backup image for when SVG isn't available.  That said, this is a security product.  Anyone using IE8 is probably beyond our help.

In the world of odd, we style based on nth-child CSS selectors so that, for example, odd rows have a gray background and images on the right instead of the left.  Alas, browsers are wildly inconsistent in what they think is even and what is odd:

| Browser | First Stripe Div Considered Odd |
| ------- | ------------------------------- |
| Chrome  | No                              |
| Safari  | Yes                             |
| Firefox | Yes                             |
| Opera   | No                              |

So much for consistency with webkit.  Some standards funkiness here.  I resolved the problem by putting an extra div wrapper around the stripe divs and that seems to have tamed the craziness.
