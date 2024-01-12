---
title: Adding and removing user licenses
description: Learn how to manage provisioning and de-provisioning user licenses.
---

## Provisioning users

LinkedIn Learning gives you options to automate user provisioning, onboarding in different ways:

### Automate provisioning via SSO

Once you have enabled SSO, you can automatically assign licenses to your employees by toggling Automatically assign licenses to "On". When you enable this option, users are automatically granted a license when they are authenticated for the first time.

* [Assigning licenses automatically](https://learn.microsoft.com/en-us/linkedin/learning/sso-auth/sso-docs/sso-implementation#assigning-licenses)

### Automate provisioning via SCIM

The System for Cross-domain Identity Management (SCIM) specification is designed to make managing user identities in cloud-based applications and services like LinkedIn Learning easier. By utilizing SCIM, you can automate user provisioning and de-provisioning and keep user attributes and group memberships up to date with your internal systems.

LinkedIn Learning currently supports SCIM integrations with the following Identity Providers:

* [SCIM provisioning via Azure Active Directory](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/azure-ad-auto-provisioning)
* [SCIM provisioning via Okta](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/okta-scim)
* [SCIM provisioning via OneLogin](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/onelogin-scim)

[Benefits and Features](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/scim)

### Automate provisioning via CSV/SFTP/HTTPS

Large organizations frequently need to revoke multiple licenses (i.e., for ex-employees and -learners) in bulk. The most efficient method of performing this task is administering user data using comma-separated values (CSVs). For example, you can add users in bulk via LinkedIn Learning CSV. You can revoke user licenses in a similar way.

* [Add and manage learners automatically via SFTP](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/add-sftp)
* [Add and manage learners automatically via Workday](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/org-sync-workday)
* [Add and manage learners automatically via SuccessFactors](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/org-sync-successfactors)
* [Add and manage learners automatically via HTTPS Protocol](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/add-https)

## De-provisioning users

Large organizations frequently need to revoke multiple licenses (i.e., for ex-employees and -learners) in bulk. The most efficient method of performing this task is administering user data using comma-separated values (CSVs). For example, you can add users in bulk via LinkedIn Learning CSV. You can revoke user licenses in a similar way.

* [Revoke user licenses in bulk via CSV file](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/revoking-users-in-bulk)

### Automate de-provisioning via SCIM

You can remove user licenses in LinkedIn Learning when they do not require access anymore and automate this process via your SSO and SCIM.

The System for Cross-domain Identity Management (SCIM) specification is designed to make managing user identities in cloud-based applications and services like LinkedIn Learning easier. By utilizing SCIM, you can automate user provisioning and de-provisioning and keep user attributes and group memberships up to date with your internal systems.

LinkedIn Learning currently supports SCIM integrations with the following Identity Providers:

* [SCIM provisioning via Azure Active Directory](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/azure-ad-auto-provisioning)
* [SCIM provisioning via Okta](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/okta-scim)
* [SCIM provisioning via OneLogin](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/onelogin-scim)
