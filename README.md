# IronCore Labs Website

This is the source for the IronCore Labs website and blog hosted by github.

# Writing Posts

Start by adding your post to the `_drafts` directory (create it if you don't have it) using its working title as the name of the file, for example, `my-post-title.md`.  You can feel free to check this in if you want to collaborate with others before it is posted.

Every post will need to start with "front matter" and then a proper title.  Here are the elements you will want to consider adding:

    ---
    title: The Inevitable Demise of Perimeter Security
    author: Patrick Walsh
    tags: security trends stats internet-of-things perimeter firewall
    category: Security
    image: /img/rockclimb.jpg
    ---

* title
  * This should align with the filename for the most part
* author
  * Published posts will default to "Staff Writer" if you forget this.
* tags
  * Please use tags liberally for SEO and browsability (we'll increase browsability later)
  * Separate tags with spaces - they must be one word.  If you need to put two together, use a dash, like: `internet-of-things`.
  * tag just about every topic hit in the post and be thorough
* category
  * Choose one category
  * While this seems very similar to tags in some ways, it may in the future be used to separate different blogs.  There is a much smaller number of categories than tags.
  * For right now, assume we use these categories:
    * **Security** - for blogging on our product or the state of the industry
    * **Startup** - for blogging about our status as a company or thoughts on building a startup, venture capital, etc.
    * **Engineering** - for blogging about technical topics and tools
    * **Good-Reads** - for references to other articles we find on the net
* thumbnail
  * Always use full URL
  * Used to make a thumbnail representing this page on twitter.
  * They will either crop it to 120x90px or 120x120px.
  * Must be under 1mb.
  * Probably best to generate these thumbnails ourselves.
* image
  * Always use full URL
  * Used to make a larger image on twitter and elsewhere.  This is generally preferred.
  * Must be under 1mb.
  * Must be at least 280px x 150px in size

## Embedding Media

### Video

When embedding video into a post, you will need to drop in some HTML.  If you're using youtube, go to the video on youtube, click on `share`, then click `embed` then copy and paste.  But wait, you need to modify that.  You'll get something like:

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

    grunt optimize

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
