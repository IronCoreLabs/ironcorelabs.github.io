---
title: Breach Disclosure Laws and Consequences
tags: security law breaches costs stats
author: Patrick Walsh
category: Security
image: https://ironcorelabs.com/img/posts/states-with-breach-disclosure-laws.png
---


A lot of the press that we see and a lot of the data we have about companies that have been hacked is the result of breach disclosure laws.  In essence, these laws say that any _**unencrypted personal information**_ for customers that is accessed by an unauthorized person (who could also be an insider) must be disclosed to the affected customers.

![Breach Disclosure Law Map Showing All States but New Mexico, South Dakota and Alabama](/img/posts/states-with-breach-disclosure-laws-655.png)

As of right now, forty-seven states, D.C., Guam, Puerto Rico and the Virgin Islands have breach disclosure laws as does the European Union and other countries.  Only New Mexico, South Dakota and Alabama in the U.S. don't require notice be given to consumers whose data has been inappropriately accessed.

These laws vary a lot in terms of what they consider to be personal information, reporting requirements, mechanisms and time lines for disclosure, etc.  For example, California defines an email address as personal information, but many states limit the definition to just things like social security numbers, credit cards and health information.

>> ## $201
>> per customer is the average cost in the U.S. for notifying those affected by stolen data. Germany is the second highest in the world with $195 per customer on average.
>>
>> *Source: [Ponemon Institute](http://www-935.ibm.com/services/us/en/it-services/security-services/cost-of-data-breach/)*

The first state breach disclosure law went into effect in 2003.  In 2005 other states began to follow. Now virtually all states have these laws and a federal law to unify them (and consequently reduce the costs of disclosure) is in the works.

If a company is breached, they will need to hire lawyers to help figure out what they have to do.  In some cases a company will have to do different things for different groups of customers depending on where the customer lives.  Often the disclosure time lines are at odds with the time required to fully investigate a breach to understand what may have been accessed.  This is not always easy to discern.  If a company is unsure, but knows that an attacker *might* have had access and can't prove that they didn't access data -- they still have to disclose to customers.


In addition to state laws, in the U.S., the Health Insurance Portability and Accountability Act (HIPAA) requires breaches of medical data to be disclosed to affected patients.

> HIPAA covered entities and their business associates [must] provide notification following a breach of unsecured protected health information. Similar breach notification provisions implemented and enforced by the Federal Trade Commission (FTC), apply to vendors of personal health records and their third party service providers 
> -- [US Dept. of Health and Human Services](http://www.hhs.gov/ocr/privacy/hipaa/administrative/breachnotificationrule/)

Part of the cost of the notifications, in addition to the legal costs and the more obvious costs of physical mailings, is the addition of some kind of identity theft monitoring and insurance for impacted customers.  This is not required by law, but is standard practice in order to head off class action lawsuits. By providing monitoring and insurance, individual damages are limited and it becomes hard to form a class to sue the impacted company.

Information security compliance standards such as [PCI DSS](https://www.pcisecuritystandards.org/security_standards/) (the payment card industry standards for holding credit card and related data), [FISMA](http://en.wikipedia.org/wiki/Federal_Information_Security_Management_Act_of_2002) (the federal information security management act that applies to the US Government and its contractors), [GLBA](http://en.wikipedia.org/wiki/Gramm%E2%80%93Leach%E2%80%93Bliley_Act) (the Financial Services Modernization Act requires financial institutions to have policies in place to protect sensitive information from foreseeable threats), [ISO 27001](http://www.iso.org/iso/home/standards/management-standards/iso27001.htm) (a best practices standard for enterprise information security protection) and HIPAA all require network monitoring, firewalls, auditing, and other best practices or "best efforts" around data security and encryption.  

>> ## 1.02 billion
>> customer records breached in 2014, **up 78%** from 575m.
>>
>> *Source: [Breach Level Index](http://breachlevelindex.com/pdf/Breach-Level-Index-Annual-Report-2014.pdf)*

Unfortunately, the requirements from these standards, as onerous as they frequently are, just aren't sufficient and are quite often left open to interpretation.  For example, HIPAA does not require encryption (though you have to document why you aren't using it), but requires, "reasonable and appropriate administrative, technical, and physical safeguards."  In practice, companies frequently point to SSL plus disk encryption as sufficient protection for sensitive data.  In this scenario, IT folks, servers and applications still have full access to all of the data in its decrypted form. A person needs only to have or steal credentials or to exploit a bug in an application to gain access to the data.  **And this happens all the time.**  The result is plain to see: more breach disclosure notifications all the time.

