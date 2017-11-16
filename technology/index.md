---
layout: slides
title: Technology
transition: cards
bodyclasses: whiteSlide scroll smoothScroll
lightbackground: 1
excerpt: IronCore Labs is transforming how SaaS companies handle their customers' data. We help developers end-to-end encrypt the data in their apps so it remains secure no matter where it lives.
---

{% include slides/slideStart.html id="manifesto" classes="fade-9 autoHeight" %}
<div class="left" markdown="1">

# Technology
## Prelude: A Manifesto

_Software is fragile._

Data is the fuel that powers SaaS.  In the rare instances where the data is encrypted, it's typically just encrypted _"in transit and at rest,"_ which typically translates to _"HTTPS and Transparent Disk Encryption."_ Sadly, these protections lack cryptographic access controls.

Transparent disk encryption leaves data just as visible to an attacker as to a legitimate user. HTTPS isn't much better. It stops casual interception of data, but it doesn't ensure that the person receiving data should be allowed access. It also fails to secure the data at the endpoints.

In short, the standard approach to encryption handles two narrow threats: stolen hard drives and network-level snooping.

![](/img/tech/in-transit-and-at-rest.png)

Most SaaS companies ignore security concerns when they're small. As they grow, they add network perimeter technologies like firewalls and intrusion prevention appliances, security incident event management platforms, and staff to monitor them. For B2B SaaS, this evolution is driven by larger customers that demand more intense infosecurity reviews during the sales cycle.

Unfortunately, investing in network perimeter technologies was the solution for a bygone era. Outdated regulations and infosecurity standards assume a network environment of decades past.

![Graphical timeline of increasing complexity of networks from the 80's until now](/img/tech/data-sharing-complexity-history.png)

We've evolved from walking floppy disks between computers to a world of cloud services, remote employees, mobile devices, IoT, and no clear perimeter that contains the data. **The complexity of managing access in this environment is beyond the point where a human can reason about it**.

</div>
{% include slides/slideEnd.html background="/img/tech/tech-lines.jpg"%}

{% include slides/slideStart.html id="vision" classes="fade-8 autoHeight" %}
<div class="left" markdown="1">

## First Principles

If we were starting over and building a ground-up model of security, we'd start by securing the data, and we'd finish by making physical storage of the data irrelevant to its security. Here are the other key parts of how the digital world would work if it were built on a foundation of security and an understanding of the challenges of today's environment:

* **Access Decisions:** data owners, not partners or vendors, would determine who can read their data.
* **Borderless Control:** data would be owner-controlled even when stored with third parties or offline.
* **Monitoring:** owners would monitor how their data is used and by whom and could detect abuses of access.
* **True End-to-End Encryption:** data would be encrypted at all times other than when actively in use.
* **Simplicity:** no special knowledge or actions would be required of users or data owners.
* **Adding and Revoking Access:** owners would add or remove authorized users at any time without touching the data.
* **Zero-knowledge:** no trusted middle-man determines access, and no unauthorized service or user can view the data.
* **Scale:** there would be no limitation on the number of files or users; changing access and rotating keys would be a constant-time operation.
* **Provable:** security would be knowable, provable, and not based on assumptions about the workings and interactions between complex and disparate access control systems.

In this perfect world, the owner of the data retains full control at all times, uses third-party services without reservation, and defends against threats from insiders and sophisticated adversaries.

Users and data owners need not know about encryption or keys because the security is built into their applications, which seamlessly handle the details under the hood.

**This is what IronCore brings to modern applications.**

</div>
{% include slides/slideEnd.html background="/img/tech/boy-pilot.jpg"%}

{% include slides/slideStart.html id="customer-control" classes="fade-6 autoHeight" %}
<div class="left" markdown="1">

## Customer Controlled Data

**In the future, we will all control who can access our data.** 

Imagine granting your doctor access to your medical records, then revoking that access when you switch doctors. More importantly, suppose you could track other parties with whom your doctor shared data, including insurers, billing companies, cloud software companies, outsourced labs, research institutions, and so on. **You wouldn’t need to just trust these folks with your data: you could monitor how they use it, and you could revoke their access if they abuse the privilege.**

Businesses, Governments, and other organizations need to control their data every bit as much as we do. Trusting sensitive data to yet another cloud service provider is a huge leap of faith. Each new service complicates an organization's ability to understand their risks and who has access to their data. Without that understanding, they can't meet contractual and regulatory requirements around privacy and security.

This is why large organizations demand extensive infosec reviews, with lengthy spreadsheets, before purchasing and why, in many cases, they don't even consider a service that might otherwise make them more competitive.

![Provable security: the difference between 'I think' and 'I KNOW'](/img/tech/i-think-vs-i-know.png)

In a world of **customer-controlled data**, organizations no longer need to hope their partners have good-enough security. The security travels with the data, and the usage of that data is monitored. With control comes trust, and trust brings options, flexibility, and, for SaaS vendors who embrace it, more sales.

</div>
{% include slides/slideEnd.html %}

{% include slides/tophead-2coltext.html 
  header="How It Works"
  classes="fade-9 autoHeight"
  background="/img/tech/gears.jpg"
  id="how-it-works"
  details="We bring customers control of their data and allow them to govern access no matter where it is stored."
  col1="We do this with zero-knowledge, meaning we never see user's private keys and never have the ability to decrypt data. We use a <strong>public key infrastructure</strong> that's <strong>based on elliptic curve cryptography</strong>. Every user -- in fact, every device -- has its own public and private key pairs that are generated locally. Backend servers and services that need to access sensitive data also have their own keys, which can be segmented by service, region, or whatever makes sense."
  col2="We manage public keys, enforce access controls with cryptography, and never gain access to the unencrypted data. But the real magic of IronCore's technology lies in our ability to <strong>separate the decision of who we encrypt to from the decision of who can decrypt.</strong> We call this, \"Cryptographic Orthogonal Access Control\" and it greatly simplifies problems of key management, revocation, and changing access after a file is already encrypted."
%}

{% include slides/slideStart.html id="orthogonal-access" classes="fade-6 autoHeight" %}
<div class="left" markdown="1">

## Orthogonal Access Control

With orthogonal access control, the decision of who to encrypt to is separated from the decision of who can decrypt.  To do this, we abstract classes of users and services into groups, encrypt to the appropriate group, and determine at another point in time who the members of the group are. Only the group members' private keys can unlock the data.

For example, a company might have an SSN-Readers group consisting of employees authorized to see social security numbers. The group is owned by an administrator who holds the group's private key and can use that key to add and remove members.  When a document is encrypted to this group, members can decrypt the data with their private keys, but no one else can. Even the administrator can't read the data if they aren't a member of the group.

We do this at scale and without shared secrets. Groups can be any size, even millions of users, and adding and removing members are constant time operations regardless of how many documents or users there are.

</div>
{% include slides/slideEnd.html %}

{% include slides/slideStart.html id="cryptographic-transform" classes="fade-9 autoHeight" %}
<div class="left" markdown="1">

## Cryptographic Transformation

We use a technique that's long been discussed in academia that allows delegation of access. **Academia calls it "proxy re-encryption," but we prefer the more intuitive name, "cryptographic transformation."**  In our case, we use a variant that is unidirectional, multi-hop, and adds multi-party computation to protect group private keys.

In academia, the focus is on delegation, such as when an assistant is granted permission to read the boss's encrypted emails. Our improvements optimize for use cases that revolve around access control at scale. Our approach ensures that only certain classes of users can read specific classes of data.

For example, consider the case where we have a Top Secret document and only want users with Top Secret clearance to read it. Suppose Alice and Bob both are members of the TopSecret group. Alice shares a document with the TopSecret group by encrypting the document directly to that group's public key. We use envelope encryption, so an AES-256 symmetric key encrypts the document and that key is itself encrypted to the TopSecret group public key.

When Bob wants to decrypt the document, he has to send the document envelope to IronCore for transformation. IronCore's service takes the encrypted document key and transforms it so that Bob will be able to decrypt it with his key. At no point in that process does IronCore have access to the unencrypted document key. Nor could IronCore perform the transformation for a user who isn't a member of the TopSecret group. When Bob gets the transformed data back, he decrypts it locally with his private key and gets the AES key that decrypts the document. All of this happens in a fraction of a second.

### Group Management

**Step 1:** An Administrator creates a group. That administrator possesses the secret key for that group and can securely share that key with other administrators if desired.

![](/img/tech/orthogonal-member-key-generation.png)

**Step 2:** The Administrator adds a member to the group. She does this by taking the private key of the group, and the public key of the desired user, and combines them into a member key that allows the transformation of encrypted data from the group to the user. This member key is generated locally and then sent to IronCore's servers.

![](/img/tech/orthogonal-membership.png)

**Step 3:** Administrator can revoke access at any time by telling IronCore to delete a member key.

### Encryption and Decryption

Securely sharing a document is independent of managing group membership. Encrypting a document only requires the public keys of the users or groups that should be granted access. With IronCore's SDK, this is handled automatically for the developer.

Decrypting has an extra step that's handled automatically: the document originally encrypted to some group must be transformed as if it were encrypted to a user.

![](/img/tech/orthogonal-transformation.png)

After the transformation, the document is decrypted locally by IronCore's SDK. In fact, all of the calls to the IronCore service, transformations, encryption, decryption, key generation, public key management, etc., are handled automatically by IronCore's SDK so that developers can just get to work.
</div>
{% include slides/slideEnd.html %}

{% include slides/slideStart.html id="dev-experience" classes="fade-7 autoHeight" %}
<div class="left" markdown="1">

# Simple Developer Experience

Developers can elect to either store documents with IronCore or to store them in the location most convenient for the application.  In either case, the developer interface is much the same.

The SDKs make working with secure data painless and handle all details of key management, sharing, groups, group membership, revocation, encryption, and decryption for the developer. SDKs can be used by server-side services and client-side applications, including web applications. The IronWeb SDK is implemented using JavaScript that is compatible with a wide range of browsers and browser versions.

When using IronCore's optional storage service, the interface is similar to a NoSQL key/value store, but with some optional extra features. In a Javascript environment, fetching a document looks like:

```javascript
ironsdk.document.decryptFromStore("docID")
   .then(function (document) {
      var data = JSON.parse(fromBytes(document.data));
      // do something with the data
  }).catch(notifyFetchFailureFn);
```

Users and groups are identified using IDs that are provided by the system that embeds the IronCore SDK; IronCore uses these provided IDs, so you don’t need to perform any mapping between systems. To create a document and then share it with one or more users or groups, the code works like this:

```javascript
ironsdk.document.encryptToStore("docID", toBytes(data))
    .then(function(docDetails) {
      ironsdk.document.grantAccess("docID", [userAndGroupIds])
        .then(function(shareResult) {
          // handle success
      });
    }).catch(function(error) {
        // handle failure
    });
```

## Integration

IronCore integrates with existing applications and hooks into existing username and password systems.

On initialization of the IronCore SDK, the calling application signs an assertion establishing the identity of the current user. The calling application chooses an identifier that makes sense and then uses that identifier later when sharing protected data. IronCore integrates seamlessly with almost any existing app and authentication scheme.

To add controlled data into an application, the developer only needs to consider the points of use of the data. Before saving data, the app calls the IronCore SDK, and after fetching data, the app calls the SDK. Or, optionally, a single call will handle encryption, decryption, and storage operations.

</div>
{% include slides/slideEnd.html background="/img/tech/abstract-boxes.jpeg"%}

{% include slides/tophead-bottom2iconboxes.html
  id="end-to-end"
  header="True Security, Privacy, and Control"
  box1imageClass="img-zero-visibility h100"
  box1head="Zero-Knowledge"
  box1body='All participants, servers, and services, including IronCore, are zero-knowledge unless they\'ve been expressly granted access. IronCore never sees decrypted private keys and is never able to decrypt data. But group owners can decide who has access to data encrypted to a group, and they have full visibility into who\'s using that access. Data owners are the opposite of zero-knowledge: they have full knowledge of who is using their data and where and when.'
  box2imageClass="img-padlock-inside h100"
  box2head="End-to-End"
  box2body="Encryption and decryption happen only at the point of use, on client devices like laptops and mobile phones, or in backend services that have been granted access. Data is locked through its full lifecycle: in-transit, at-rest and at every stage in-between if not actively in use."
  classes="fade-9 autoHeight"
  background="/img/tech/chicago-sunset.jpg"
%}

{% include slides/mailchimp.html 
  id="waitlistsignup" 
  header="Waitlist Signup" 
  classes="fade-8" 
  background="/img/tech/laptop-cliff.jpg" 
  hidecheckboxes=true
  subhead="Get Early Access"
  header="Join Waiting List"
%}
