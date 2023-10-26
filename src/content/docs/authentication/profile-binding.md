---
title: Connect your LinkedIn profile
description: Connect your personal LinkedIn profile with your Learning account.
---

LinkedIn Learning supports multiple ways to authenticate users. You can find all the information you need below on your options. Enterprise Single Sign-On (SSO) allows your company's employees to sign into supported LinkedIn applications using their corporate credentials instead of their LinkedIn credentials.

Using SSO and integrating with an SSO provider is not required to use LinkedIn applications. If SSO is not configured, your employees can authenticate themselves using their current personal LinkedIn credentials or create a new member account.

## LinkedIn Learning Admin Course

If you want an in depth overview on how to get started as an Admin with LinkedIn Learning, we recommend the following course:

:::tip[Video Course]
Enroll in the [Getting Started as a Technical Admin course](https://www.linkedin.com/learning-login/share?account=104&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fgetting-started-as-a-technical-admin-for-linkedin-learning%3Ftrk%3Dshare_ent_url%26shareId%3DlthUDRpeTvqjeC2dLu%252B5Ww%253D%253D).
:::

## LinkedIn Profile binding

**Access LinkedIn Learning and connect your LinkedIn profile.**

The way you access LinkedIn Learning will depend on the configuration choices made for your organization.
Organizations can choose whether to enable Single Sign-On (SSO) for LinkedIn Learning, or not, and whether to
require, make optional, or not allow learners to connect their LinkedIn profile to their LinkedIn Learning account.

### Benefits of connecting your LinkedIn profile to your LinkedIn Learning account

When you connect your LinkedIn profile to your LinkedIn Learning account, you will get personalized and
interactive learning experiences. Benefits to connecting your LinkedIn profile include:

* Share your learning achievements: Add Certificates of Completion and skills to your LinkedIn profile and
share LinkedIn Learning videos with your network.
* Watch courses with your connections and colleagues: See who else is learning with you and build
connections.
* Receive customized content recommendations: Get recommendations based on what your connections and
similar professionals are viewing, as well as recommendations based on your LinkedIn profile.
* Join learning groups: Deepen your learning by engaging other like-minded learners who have similar career
aspirations.
* Ask questions and get answers: Use Q&A to continue the conversation beyond the course with peers and
instructors.

### LinkedIn Learning Login Flows

What type of login experience your users can expect depending on your authentication method. [Login Flows](https://training.talent.linkedin.com/page/linkedin-learning-customer-resources?q=login%20flow#language_english).

## Provisioning users

LinkedIn Learning gives you options to automate user provisioning, onboarding in different ways:

### Single Sign On Providers

We have documentation for all major IDP SSO providers. Choose your IDP provider below:

* Standard SAML integration
* Okta
* Azure AD
* ADFS

### Automate provisioning via SSO

Once you have enabled SSO, you can automatically assign licenses to your employees by toggling Automatically assign licenses to "On". When you enable this option, users are automatically granted a license when they are authenticated for the first time.

* [Assigning licenses automatically](https://learn.microsoft.com/en-us/linkedin/learning/sso-auth/sso-docs/sso-implementation#assigning-licenses)

### Automate provisioning via SCIM

The System for Cross-domain Identity Management (SCIM) specification is designed to make managing user identities in cloud-based applications and services like LinkedIn Learning easier. By utilizing SCIM, you can automate user provisioning and de-provisioning and keep user attributes and group memberships up to date with your internal systems.

LinkedIn Learning currently supports SCIM integrations with the following Identity Providers:

* Azure Active Directory
* Okta

[Benefits and Feautures](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/scim)