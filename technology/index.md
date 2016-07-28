---
layout: slides
title: Technology
transition: cards
bodyClasses: whiteSlide
---

{% include slides/tophead-2coltext.html
  header="Technology"
  classes="fade-5"
  lightbackground="1"
  background="/img/tech/tech-lines.jpg"
%}

{% include slides/topquote-bottom2iconboxes.html
  id="end-to-end"
  header="End-to-End"
  quote="**PLENTY OF COMPANIES** brag that their communications app is encrypted. But that marketing claim demands a followup question: **WHO HAS THE KEY**?"
  author="<a href='https://www.wired.com/2014/11/hacker-lexicon-end-to-end-encryption/' target='_blank'><u>Wired</u></a>"
  box1imageClass="img-zero-visibility"
  box1head="Zero Knowledge"
  box1body='With IronCore, private keys stay on client devices. Servers never see private keys. Equally important, private keys are never shared with other devices, users or servers.'
  box2imageClass="img-padlock-inside"
  box2head="End-to-End Encryption"
  box2body="Encryption and decryption happen only at the point of use, on client devices like laptops and mobile phones. Data is locked through its full lifecycle: in-transit, at-rest and at every stage in-between including in-memory on the server."
  lightbackground="1"
  classes="fade-8"
  background="/img/tech/key-pile2.jpg"
%}

{% include slides/tophead-bottomimage.html
  id="desk"
  classes="fade-6"
  header="Storing Keys on the Server"
  subheader="Like locking a drawer but leaving the key on the desk."
  details="This is common, but really bad practice."
  imageClass="img-desk-key h400"
  background="/img/tech/desk-wood.jpg"
%}

{% include slides/tophead-bottom2iconboxes.html
  id="pki"
  header="Crypto Family"
  details="IronCore uses the more difficult to manage, but more secure public key approach."
  box1imageClass="img-no-mirror"
  box1head="Shared Secret Crypto"
  box1body="Also called symmetric key cryptography, many commercial products today use shared secret cryptography. The same key used to lock the data is also used to unlock it, which is fine when the data never leaves your possession, but terrible when sharing data. Most of the time, the problems are at best moved from one server or application to another."
  box2imageClass="img-pki"
  box2head="Public Key Crypto"
  box2body="Also called asymmetric encryption, with public key cryptography, every participant in the system has their own unique public/private key pair. For some IronCore products, each participant will have a key pair per device.  This allows data to be encrypted such that only that participant or device can decrypt it."
  lightbackground="1"
  background="/img/tech/office-building.jpg"
%}

{% comment %}

Make header smaller.

Use bullets.  Too many words.

Darken background.

Remove??


{% include slides/tophead-2coltext.html
  id="provable"
  header="<div class='h1em show-image img-fingerprint'></div>Provable Access Control"
  col1="IronCore's system has two levels of access control.  For read-access, the application tracks who should have access and acts as a gate keeper, but that gate keeping is double checked by cryptography.  The owner of any given piece of data determines who to share it with and explicitly encrypts it to that person or group. The owner can be assured that no others have access to that data, even if the application-level access controls are compromised or bypassed."
  col2="The other part of access control involves policy.  Things like write-access, sharing policies (limitations on who a piece of data can be shared with, for example), access pattern enforcement (stopping the wholesale download of a database) and so forth are managed entirely by the server and trust in the server is required for these access control elements to work."
  background="/img/tech/microscope.jpg"
%}

{% endcomment %}

{% include slides/left4iconboxes-rightimage.html
  id="standards-based"
  header="Standards-based Algorithms"
  details="IronCore uses standards-based encryption algorithms that have been widely scrutinized and are believed by experts to be <a href='https://safecurves.cr.yp.to/'>safe</a>.  In particular, IronCore relies on these:"
  box1head="Curve25519"
  box1body="<a href='https://cr.yp.to/ecdh.html'>Elliptic curve 25519</a> for key exchange and public/private key pairs."
  box2head="Salsa20"
  box2body="<a href='https://cr.yp.to/salsa20.html'>Salsa20</a> for fast encryption of streams of data."
  box3head="Poly1305"
  box3body="<a href='https://cr.yp.to/mac.html'>Poly1305</a> for validating the source integrity and identity of the author."
  box4head="Post-quantum"
  box4body="IronCore is experimenting with post-quantum crypto for future versions of its software."
  imageClass="img-standards h500"
  lightbackground="1"
  background="/img/tech/qbert.jpg"
%}

{% include slides/leftimage-right4iconboxes.html
  id="client"
  header="Cross Device"
  subheader="Support across platforms and devices"
  box1head="Android"
  box1body="SDKs available for Android phone and mobile devices."
  box1imageClass="fa fa-android"
  box2head="iOS"
  box2body="SDKs available for iPhone and iPad."
  box2imageClass="fa fa-apple"
  box3head="Web"
  box3body="JavaScript SDK available for web and other JavaScript environments such as node.js and Electron."
  box3imageClass="fa fa-desktop"
  box4head="Anywhere"
  box4body="C code and RESTful APIs allow integration from any Internet connected device."
  box4imageClass="fa fa-globe"
  image="/img/tech/multi-device.jpg"
  lightbackground="1"
%}

{% include slides/tophead-bottom4iconboxes.html
  id="misc"
  box1head="Crypto at Scale"
  box1body="Unlimited group sizes, unlimited numbers of records and the ability to easily remove users from groups without performance impact. In short, IronCore's tech is game changing for public key encryption in the enterprise, at scale and with big data."
  box1imageClass="img-lock-everywhere"
  box2head="Revocation"
  box2body="Stolen phones, employees who leave the company and other events bring us to the issue of removing granted access. IronCore has built access revocation in such that revoking access is painless."
  box2imageClass="img-id-revoke"
  box3head="Share Between Orgs"
  box3body="No more silos. Control data even as it gets shared outside of your company. Revoke access at will. No more spreadsheets being cast off via email."
  box3imageClass="img-corp-sharing"
  box4head="Encryption-backed Access"
  box4body="No matter who accesses your servers, you can verify who can decrypt and read the contents of files. Provided your adversary hasn't broken the strong encryption algorithms, you can be assured that no one else has access to the data."
  box4imageClass="img-fingerprint"
  lightbackground="1"
  background="/img/tech/chicago-sunset.jpg"
%}









{% comment %}

MOVE OR REFACTOR THESE

{% include slides/slideStart.html id="sharing" %}
<div markdown="1">
## Sharing

Today most access control schemes are confined to a specific domain. In other words, within a company, employees can share things with each other, because they all have company accounts.  However, in order to share things with someone at a partner company, either that person needs to be provisioned with access to a corporate account (fraught with difficulties for how and when to remove that access) or information gets copied into spreadsheets and emailed over (or similarly byzantine approaches to sharing information).

IronCore brings cross-organization data sharing to a practical place where the owner of the data can decide how and when it is shared and when and if the access gets revoked.  This model brings with it huge benefits for an organization looking to better control and secure its data and to software companies building applications that share data.

</div>
{% include slides/slideEnd.html %}


{% include slides/slideStart.html id="integration" header="Integration" %}
<div markdown="1">
## Integration

IronCore consists of servers for managing parts of the access control and storing data and client-side encryption/decryption/validation.  All encryption and decryption are done on clients.  IronCore is building web, iOS and Android SDKs to accelerate development of applications with strong data security and authentication.


</div>
{% include slides/slideEnd.html %}

{% include slides/big-header-hero-button-centered.html
  id="drop-in"
  header="Drop-in Encryption"
  details="Software development organizations find it difficult and expensive to build applications that handle sensitive data or are subject to compliance regulations such as <abbr title='Health Insurance Portability and Accountability Act - requires secure handling of protected health information'>HIPAA</abbr> or <abbr title='Payment Card Industry Data Security Standards - requires secure handling of credit card related information'>PCI DSS</abbr>.
  The IronCore service provides simple APIs for handling data encryption and sharing for sensitive data. We provide drop-in end-to-end encryption that's transparent to client-side code, works in JavaScript, iOS and Android apps, and keeps data secure at rest, in transit and in-application."
  background="/img/home/dev-tools-icon.svg"
%}

{% include slides/big-header-hero-button-centered.html
  id="differentiator"
  header="Differentiator for Cloud Applications"
  details="Companies building applications for Government, the financial sector, the health industry, retail companies and privacy-conscious consumers can set themselves apart with fully encrypted cloud data. Incumbent solutions rely on plain text data being available to the application at the server.  Consequently, IT admins, developers, customer support representatives, other legitimate users and hackers have access to all of their customers data. With a fully encrypted system, your application will be more desirable to liability-conscious and privacy-concerned customers."
  background="/img/home/differentiate-icon.svg"
%}

{% include slides/big-header-hero-button-centered.html
  id="perimeter"
  header="Perimeter Security Problems"
  details="Mobile devices, cloud computing, partner data sharing, remote workers, the Internet of Things and other trends are eroding the effectiveness of perimeter security models.  Firewalls and intrusion detection systems are insufficient to protect sensitive data including customer data."
  buttonText="Read more"
  buttonUrl="https://blog.ironcorelabs.com/the-inevitable-demise-of-perimeter-security-9863ef372294"
  background="/img/home/demise-of-perimeter-security-icon.svg"
%}

{% include slides/big-header-hero-button-centered.html
  id="breach-disclosure"
  header="Breach Disclosure Laws"
  details="47 states require companies to disclose if unencrypted customer data was potentially accessed by unauthorized persons including insiders.  In the U.S., on average it costs $201 per record accessed to disclose breaches and untold millions in lost customer trust."
  buttonText="Read more"
  buttonUrl="https://blog.ironcorelabs.com/breach-disclosure-laws-and-consequences-f7e14edca29e"
  background="/img/posts/states-with-breach-disclosure-laws-400-gray.png"
%}

<!--<i class="fa fa-cubes"></i> <i class="fa fa-key"></i> <i class="fa fa-puzzle-piece"></i> <i class="fa fa-shield"></i> <i class="fa fa-terminal"></i> <i class="fa fa-lock"></i> <i class="fa fa-code"></i>-->

{% include slides/left4iconboxes-rightimage.html
  id="so-called-best-practices"
  header="So-called Best Practices"
  details='Today encryption "best practices" amount to a phrase we hear a lot: "encrypted at rest and in-transit."  In practice this means using SSL when transferring information and using transparent disk encryption on servers.  However, this provides zero protection against wholesale data breaches since the data is fully accessible on the running server.  Compromising the server or one of the applications that access the data is sufficient to view all data. In our view, this is a case of poor practice and achieving a minimum level of security.'
  imageClass="img-data-on-screen h500"
%}

{% endcomment %}
