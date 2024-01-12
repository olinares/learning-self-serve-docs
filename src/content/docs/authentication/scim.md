---
title: User Provisioning via SCIM
description: Configure automated user management via SCIM.
sidebar:
  order: 2
---

### Automate provisioning via SCIM

The System for Cross-domain Identity Management (SCIM) specification is designed to make managing user identities in cloud-based applications and services like LinkedIn Learning easier. By utilizing SCIM, you can automate user provisioning and de-provisioning and keep user attributes and group memberships up to date with your internal systems.

LinkedIn Learning currently supports SCIM integrations with the following Identity Providers:

* [SCIM provisioning via Azure Active Directory](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/azure-ad-auto-provisioning)
* [SCIM provisioning via Okta](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/okta-scim)
* [SCIM provisioning via OneLogin](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/onelogin-scim)

### Benefits and capabilities supported via SCIM

Enabling SCIM via your SSO will provide the additional benefits and features to your organization:

* Create user profiles and assign licenses in LinkedIn Learning
* Remove user licenses in LinkedIn Learning when they do not require access anymore
* Keep user attributes synchronized between your Identity Provider and LinkedIn Learning
* Provision groups and group memberships in LinkedIn Learning

[Benefits and Features](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/scim)

### Prerequisites to use SCIM

Before implementing SCIM for LinkedIn Learning, you must already have the following prerequisites:

* A supported Identity Provider (Azure AD or Okta)
* Admin access to your Identity Provider
* LinkedIn Learning admin access
* Accurate user data in LinkedIn Learning. See the appendix for instructions on [cleaning up your user data](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/scim#user-list-clean-up) if necessary for existing Learning accounts.
* Single Sign-on enabled in LinkedIn Learning (preferred)
