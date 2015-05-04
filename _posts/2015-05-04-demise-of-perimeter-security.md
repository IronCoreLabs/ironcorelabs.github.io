---
tags: security trends stats internet-of-things firewall byod byoa mobile 
title: The Inevitable Demise of Perimeter Security
author: Patrick Walsh
category: Security
image: https://ironcorelabs.com/img/posts/demise-of-perimeter-security-900.jpg
---




Computer security today follows classic real-world military approaches: make a perimeter; fortify that perimeter; ensure that only authorized, trusted people can enter that perimeter through well defined entrance points; and quickly detect and eject anyone who breaches the perimeter before they can do any harm.  

In computer security, the perimeter is made up of firewalls.  The controlled entrance points are VPNs, WiFi and physical access.  The monitoring happens with intrusion detection systems and behavioral analysis -- the equivalent to motion detectors and video cameras and with the same shortcomings.  As another layer of security (we like layers), servers themselves are typically similarly protected with their own firewall and access controls.  

This model has served us reasonably well for quite some time.  The major issues in the past have been a lack of thorough cameras or un-monitored cameras (aka intrusion detection), unintentionally opened entrances (backdoors), and untrusted individuals impersonating trusted ones to gain access (password theft or social engineering).

In a perfect world, this is a reasonable approach with known and well understood risks and challenges.  But things are no longer so simple, nor controllable. Perimeters today are no more effective than a picket fence in the suburbs. So many things are let in and out of the perimeter, that it might as well not exist.  Below we break down these trends and make the case.

> Perimeters today are no more effective than a picket fence

![Picket fence](/img/posts/picket-fence-min.jpg)


## Major Trends Impacting Perimeter Security

### Cloud Services

>> ## 69% 
>> of enterprises had at least one application or a portion of their computing infrastructure in the cloud in 2014.
>>
>> *Source: [IDG](http://www.idgenterprise.com/report/idg-enterprise-cloud-computing-study-2014)*

In an electronic world of borders, the borders are there to protect data.  But what if the data lives outside of the borders? The accelerating move to the cloud by enterprises means that company data is also moving to the cloud and outside of the established perimeter.  

To generate trust, the cloud providers show that they, too, employ best practices for perimeter security and intrusion detection, but still the interfaces are public and the data now resides inside two perimeters and the surface area of the perimeter is greatly increased.  

### Mobile (aka Bring Your Own Device)

>> - **76%** of enterprises have plans to expand access to corporate resources from mobile devices.
>>
>> *Source: [PEW Internet](http://www.pewinternet.org/2015/04/01/us-smartphone-use-in-2015/)*
>>
>> - **96%** of working Americans have a smartphone, laptop or tablet with Internet access and a third of those people frequently do work outside of office hours on those devices.
>>
>> *Source: [Gallup](http://www.gallup.com/poll/168794/workers-upside-staying-connected-work.aspx)*
>>
>> - **3.1m** smart phones were stolen in the U.S. in 2013.
>> - **1.4m** smart phones were lost and never recovered.
>>
>> *Source: [Consumer Reports](http://www.consumerreports.org/cro/news/2014/04/smart-phone-thefts-rose-to-3-1-million-last-year/index.htm)*

The so-called BYOD movement is generally intended to mean mobile phones, but really we're talking about any device that an employee owns and manages, but uses to connect to company servers.  This includes laptops, mobile phones, tablets and even home computers.

The vast majority of working Americans (estimated at 90% by Gallup) have mobile, Internet-connected devices such as laptops, tablets and mobile phones.  Around a third of this group "frequently" uses these devices for work outside of the office and regular work hours.  

For companies, this behavior is desirable as it means increased productivity from those employees, so IT policies generally encourage employees to use their own devices and work outside of the office.  The consequence is that the perimeter needs to open up pathways to certain services such as intranet or email and calendar so these devices can stay connected.  Even with a VPN, an uncontrolled device could very easily be infected with malware and could be the conduit to the corporate network.

In short, defending the perimeter in the face of unmanaged devices is an epic challenge and the result is something that really cannot be fully controlled -- and that's before we start talking about theft of those devices.



### App Explosion (aka Bring Your Own App)

Even on company controlled devices, it is standard procedure for employees to install their own apps.  In a company provided cell phone, an employee will very likely want to install their preferred set of applications.  The same is true of laptops and any other device.

Employees today use the apps that they want to use or that make them productive even if it is against corporate policy.  For example, in my time at Oracle, it was against policy to use cloud services, but I commonly saw people using Evernote and Google Docs as effective ways to be productive and collaborate.  I don't have statistics on this trend, but I am quite certain that those services host treasure troves of company data for companies that don't sanction it.

> I commonly saw people using Evernote and Google Docs

### Outsourcing and Other Partnerships

>> ## 15%
>> of breaches in 2014 were the result of a subcontractor or third party
>>
>> *Source: [ID Theft Resource Center](http://www.idtheftcenter.org/ITRC-Surveys-Studies/2014databreaches.html)*

Companies do not work in isolation.  Enterprises inevitably open up their perimeter or share their data with auditors, outsourcers, strategic partners, and others.  Often this means sending sensitive data via email to uncontrolled areas.  Other times it means granting accounts to specific people who are employed by a partner.  Unfortunately, controls for managing what happens when that employee leaves the partner's employment are poor.  In the best case, someone notifies someone else to remove their account.  

Sharing information with partners at a minimum requires trusting their networks and devices and the channels between them.  In a worst case, the perimeter is opened up to breaches by way of the partners -- or if the perimeter isn't breached, the data is accessed anyway since it was sent outside the perimeter, defeating the purpose of the perimeter in the first place.

The trend towards specialization in consulting, auditing, and increased outsourcing just compound the issue.

### Zero-day or Unpatched Vulnerabilities

The perimeter can be breached any time a connected device or perimeter device is vulnerable to attack.  This means even a week's delay on installing the latest Adobe/Java/Microsoft updates can lead to a toe-hold inside a company's perimeter.  Even the best run ships are hard pressed to make sure that all devices that connect are patched within a day of patches coming out.  Typically they want to test the patches first and that requires time and time gives windows of attack to hackers.  This is a battle that is difficult to win and even more difficult when employees delay installing updates due to the inconvenience of rebooting or losing control of their computer for a time.

### Connected Devices (aka Internet of Things/IoT)

>> ## 50 billion
>> internet connected devices by 2020 (compared to 15 billion today)
>>
>> *Source: [Cisco](http://blogs.cisco.com/news/cisco-connections-counter)*


The final trend is the the most explosive.  Just a few years ago, it was primarily computers that were connected to the Internet.  Mobile phones have changed that, but they are the tip of the iceberg.  Networked printers have been a source of network compromise for a number of years now, but almost daily more things get connected to the Internet.  In the home these might be lights or remote controls, but in the office, this involves remote updating and support for manufacturing devices, HVAC systems, 

one where more and more devices connect to the Internet.  Many corporate printers have had Internet access for years (and have been a source of breaches of corporate networks), but now the number and diversity of devices joining their ranks is growing daily.  Manufacturers want to be able to provide support and updates to the devices they deliver and they want to provide services or features related to management and control of devices.  These range from physical security systems to heating/cooling systems to vending machines.  Each of these represents another chink in the perimeter model of security.

![Visual trend summary](/img/posts/demise-of-perimeter-security-900.jpg)

## Trend Summary

In short, we have a number of fast growing trends including:

* Cloud services
* Remote employees
* Mobile devices
* Apps
* Outsourcing / Partners
* Security vulnerabilities
* Internet of Things

Any of these issues by themselves weakens the ability of a perimeter security model to work effectively and be well controlled, but taken together, the complexities and necessary openings in the perimeter lead to a virtual certainty that the perimeter will be breached in one way or another.  In addition, we conclude the following:

1. Perimeters are now unmanageably complex.
2. The model where actors inside the perimeter are trusted is broken.
3. Data frequently resides outside the company's perimeter anyway stored on mobile devices (including laptops as well as phones), apps, cloud services, etc.
4. Firewalls aren't useless, but it is imprudent to believe they are sufficient security in themselves.  Combining them with after-the-fact detection of breaches leads to a reactive model that is undesirable.

## The Future

We believe a better world is possible.  In this better world, each actor in the system can only access the data they are entitled to see and even servers cannot access data that they store and operate on.  A breached perimeter would yield zero data.  Even a breached device would yield zero data or, in the worst case, just the data explicitly shared with the person using that device.

This vision relies on simple to use, mostly invisible cryptography where servers have zero trust, individuals and specific devices can have their access revoked, data can be shared between organizations in a controlled manner, and breaching any given computer or network perimeter does not lead to a data-palooza for an attacker or rogue insider.

Here at IronCore, we're building a future that does just that.  Stay tuned and join our infrequent [mailing list](#contact) (below) if you'd like to hear more.


