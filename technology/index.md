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

{% include slides/topquote-bottomimage.html
  id="key-on-server"
  quote="**PLENTY OF COMPANIES** brag that their communications app is encrypted. But that marketing claim demands a followup question: **WHO HAS THE KEY**?"
  author="<a href='https://www.wired.com/2014/11/hacker-lexicon-end-to-end-encryption/' target='_blank'><u>Wired</u></a>"
  classes="fade-6"
  imageClass="img-desk-key h300"
  imageCaption="Storing keys on the server is like locking a drawer but leaving the key on the desk. Pointless."
  background="/img/tech/desk-wood.jpg"
%}

{% include slides/tophead-bottom2iconboxes.html
  id="end-to-end"
  header="True Security and Privacy"
  box1imageClass="img-zero-visibility h100"
  box1head="Zero Knowledge"
  box1body='With IronCore, private keys stay on client devices. Servers never see private keys. Equally important, private keys are never shared with other devices, users or servers.'
  box2imageClass="img-padlock-inside h100"
  box2head="End-to-End"
  box2body="Encryption and decryption happen only at the point of use, on client devices like laptops and mobile phones. Data is locked through its full lifecycle: in-transit, at-rest and at every stage in-between including in-memory on the server."
  lightbackground="1"
  classes="fade-9"
  background="/img/tech/key-pile2.jpg"
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
  classes="fade-9"
  background="/img/tech/office-building.jpg"
%}

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
  footnote="* Coming soon. See <a href='/products/'>products section</a> for details on IronSDK."
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
  classes="fade-8"
  background="/img/tech/chicago-sunset.jpg"
%}
