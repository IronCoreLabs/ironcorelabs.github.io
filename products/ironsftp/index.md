---
layout: slides
title: IronSFTP End-to-End Encrypted SFTP
lightbackground: 1
transition: cards
bodyclasses: whiteSlide
---

{% include slides/tophead-bottomimage.html
  header=page.title
  imageClass="img-ironsftp h300"  
%}

{% include slides/tophead-bottomimage.html
   header="Overview"
   id="overview"
   details="
IronSFTP is an open-source [fork of OpenSSH][ironssh] and drop-in replacement for command-line SFTP. **IronSFTP** brings painless end-to-end encryption to existing servers running SSH. Encryption keys are automatically derived from the SSH key and the public keys are published to the server.  Uploaded files are encrypted to the person uploading and optionally to other users. Key files and encryption are compatible with [GPG 2.1+][gpg21] and uses the \"[safe][safecurves]\" elliptic curve Curve25519.

The user experience with IronSFTP is nearly identical to standard SFTP with new commands for sharing files with other users.
   "
   image="../../img/products/ironsftp/ironsftp-demo8.gif"
   imageAlt="Demo of sftp and ironsftp side-by-side"
%}
{% include slides/tophead-3coltext.html
  id="least-privilege"
  header="The Power of Least Privilege"
  col1="In security, the principle of least privilege says, for any piece of data, only those users, components or systems who must have access should have it. When uploading files to servers, **it's hard to know who may have access** to a file now or in the future -- who has root, can get root, and how might filesystem permissions or group memberships change?"
  col2="SSH is terrific for encrypting communications between client and server, but once files are uploaded, that protection is gone. The server is assumed to be a secure and fully trusted environment, but in practice, servers are hacked and malicious or curious users with access poke around at files that they shouldn't. **It makes sense to take reasonable precautions when it comes to sensitive data.** That's why we built IronSFTP."
  col3="When dealing with sensitive data such as customer data, employee data, product designs, etc., using IronSFTP reduces the risk of theft by making sure only users who have a need to read the files will have the capability to do so. Encrypting files with IronSFTP is easier than just about any other approach and much simpler than manually encrypting and decrypting files when uploading and downloading."
%}

{% include slides/lefthead-rightimage.html
  id="easy"
  header="Easy to use"
  details="When logging in, uploading, downloading and otherwise using SFTP, nothing is visibly changed except for a small lock icon beside progress bars. However, uploaded files are kept encrypted on the server after the transfer. Downloading the files transparently decrypts them if the file is shared with or owned by the user."
  imageClass="img-power-button w100pct h500"
%}

{% include slides/slideStart.html id="installation" %}
<div class="left" markdown="1">

## Install

### RedHat, CentOS, Debian and Ubuntu

IronSFTP requires OpenSSL 1.0.2 or above. This means it will only work on newer operating systems including RedHat Enterprise 7; CentOS 7; Fedora 23, 24; Debian Stretchy; and Ubuntu Wily, Xenial, Yakkety.  Packages for these operating systems are hosted on packagecloud.io.  To install deb and rpm packages:

1. Add the [packagcloud.io repository][packagecloud]
2. For Debian and Ubuntu: `sudo apt-get install ironssh`. <br>For RedHat and CentOS: `sudo yum install ironssh`.

### MacOS

Homebrew installation will be coming soon. In the meantime, see instructions for building from source.

### Building From Source

To build from source, make sure you have a version of OpenSSL that is 1.0.2 or greater, then follow these instructions, modified as needed to locate dependencies:

{% highlight bash %}
    > git clone git@github.com:IronCoreLabs/ironssh.git
    > cd ironssh
    > autoreconf
    > ./configure --with-ssl-dir=/usr/local/opt/openssl
    > make && make install
{% endhighlight %}


</div>
{% include slides/slideEnd.html %}

{% include slides/header-hero-button-centered.html
  header="Docs"
  details="Documentation is on the repository with GitHub and in the man pages."
  buttonUrl="https://github.com/IronCoreLabs/ironssh"
  buttonText="<i class='fa fa-github'></i> View GitHub Repo"
%}

[ironssh]: https://github.com/IronCoreLabs/ironssh
[safecurves]: https://safecurves.cr.yp.to/
[gpg21]: https://www.gnupg.org/faq/whats-new-in-2.1.html
[packagecloud]: https://packagecloud.io/ironcorelabs/ironssh/install
