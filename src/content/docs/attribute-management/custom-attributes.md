---
title: Manage custom attributes data
description: Learn how to manage and sync user's custom attribute data.
---

Custom attributes allow admins to customize data entry points for their learners. Admins can create custom attributes for their learners by either uploading them to CSV, or adding the attribute using the SSO setting.

## Managing custom attributes

Admin functionality for custom attributes is available only on desktop devices.
Attributes are case sensitive (i.e., "Sydney Office" is recognized as a different attribute than "Sydney office").

* [Attribute management overview](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/user-management-overview)

### Create custom attributes via CSV

* [Manage custom attributes via CSV](https://www.linkedin.com/help/learning/answer/a704884)

### Manage custom attributes via SSO

From your SSO custom attributes, you can dynamically create groups and assign members to those by selecting Assign Groups during the custom attribute creation process. When you select this feature, a new group will be created for each unique value of that custom attribute, and the newly created groups will contain learners who have the same corresponding values.

If you select Assign Groups, the system will automatically create a new group for each unique value. Be sure to uncheck this option for attributes that are specific to a single learner, such as username or email address.

Please work with your SSO provider to send LinkedIn Learning the learner values for your custom attribute through a SAML assertion. Users need to login via SAML SSO after the setup is complete in order for the new custom attribute value to be entered into the learner profile.

* [Use SSO custom attributes to create groups in Learning](https://www.linkedin.com/help/learning/answer/a700917)
* [Manage custom attributes via SSO](https://www.linkedin.com/help/learning/answer/a704884)

### Automate custom attribute management via CSV/SFTP/HTTPS

Large organizations frequently need to add custom attribute data in bulk. One of the most efficient methods of performing this task is administering user data using comma-separated values (CSVs). For example, you can add users in bulk via LinkedIn Learning CSV. You can manage custom attributes in a similar way.

* [Add and manage learners automatically via SFTP](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/add-sftp)
* [Add and manage learners automatically via Workday](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/org-sync-workday)
* [Add and manage learners automatically via SuccessFactors](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/org-sync-successfactors)
* [Add and manage learners automatically via HTTPS Protocol](https://learn.microsoft.com/en-us/linkedin/learning/user-and-attribute-management/user-attribute-mgmt-docs/add-https)
