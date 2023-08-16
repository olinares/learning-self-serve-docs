---
title: Workday
description: Workday Guide
---

# LinkedIn Learning and Workday Deep Integration Guide

## What this Document Tells You

The following steps outline the Workday and LinkedIn Learning integration process:

:::image type="content" source="media/workday/workday-process-flow.png" alt-text="Workday process flow diagram":::

## Workday Deep Integration Functionality

**Authentication**: N/A

**Content Discovery**: Automated Catalog Sync (All languages)

**Reporting**: xAPI

**Requirements**:

The **LinkedIn Learning and Workday integration** involves the following requirements:

- An active Workday LMS instance

- An active LinkedIn Learning account

- Admin access to LinkedIn Learning

- Admin privileges to your Workday LMS instance

## Integration Overview



### Single Sign-On (SSO)

SSO authentication reduces friction for users and administrators by eliminating the
need for manual user registration. **SSO ensures learners spend more of their time watching content and less of their time trying to remember usernames and passwords**.

We recommend SAML SSO for all enterprise learning platform integrations. You can
configure SSO authentication in your **LinkedIn Learning Admin settings**. Most
organizations have a centrally-managed identity management solution like Azure
AD, Okta, or ADFS, which can be configured to authenticate users into enterprise
applications like LinkedIn Learning.

To configure SAML SSO with your identity management solution, share the [LinkedIn Learning SSO Implementation Guide](../../sso-auth/sso-docs/sso-implementation.md) with your organization’s IT team.

### Automated Content Catalog Sync

The LinkedIn Learning library contains over 14,000 courses, with 20-30 courses
added per week at no extra cost. Workday automates this process using the
LinkedIn Learning content APIs, so LMS admins do not have to manually upload new
content packages at regular intervals. After the initial setup, Workday will
dynamically refresh the content library on an automated basis. This ensures
new LinkedIn Learning content is available to learners within 24 hours of
release. All content titles and  descriptions are aggregated and indexed to
accommodate keyword searches and support efficient discoverability. Workday supports automatic syncing of **All languages** content libraries.

### Reporting

LinkedIn Learning captures all content viewed on its platform in robust usage
reports accessible from the LinkedIn Learning administrative interface. In
addition to generating reports, LinkedIn Learning uses xAPI to communicate a
learner’s activity back to Workday when the learner completes a LinkedIn Learning course. All LinkedIn Learning course completions will be reported both in LinkedIn Learning and in Workday.

## Configuration – Steps Performed in LinkedIn Learning

To configure the Workday deep integration on the LinkedIn Learning side, take the following steps:

### Provision API Keys for Content Catalog Sync

For Workday to sync LinkedIn Learning content, you must provision API keys in LinkedIn Learning and complete the content sync on the Workday side.

For Workday to sync LinkedIn Learning catalog metadata, you first must provision API keys in the LinkedIn Learning admin settings.

1. After you log in, if you are not already in the **Admin** screen, select **Go to Admin**, then click **Me > Integrate**.

    :::image type="content" source="media/workday/welcome-back-integrate.png" alt-text="Integrate drop-down menu":::

2. From the side navigation menu, select **Access content and reports via API**.

3. Click **Add application**.

   :::image type="content" source="media/workday/add-newapp.png" alt-text="Add new API application":::

4. In the **Add LinkedIn Learning API application** screen, provide the name of your learning platform (e.g., "Workday Content Sync"), as the application name.

5. Provide a short description of the integration use case in the application description field. For example, "Workday content catalog sync".

6. Under **Choose keys**, there are two checkboxes – **Content** and **Report**. Select **Content**.  

7. Click **Next** and accept the "Terms and Conditions".

    :::image type="content" source="media/workday/api-content.png" alt-text="{Configure API application":::

8. Copy the generated **Client Id** and **Client Secret**. Use these values later in the "Steps Performed in Workday" section below.

    :::image type="content" source="media/workday/client-id-secret.png" alt-text="Copy Client ID and Client Secret":::

## Configuration – Steps Performed in Workday

You must complete several steps in Workday prior to enabling the LinkedIn Learning provider in Workday; LinkedIn Learning support cannot help you with these steps. Please complete the section "[Set Up Cloud Connect for Learning](#set-up-cloud-connect-for-learning)" prior to contacting LinkedIn support. If you require assistance with the ISA or the "Configuration Steps Performed in Workday" tasks below, please reach out to [Workday support](https://signin.resourcecenter.workday.com/).

To configure the Workday deep integration on the Workday side, take the following steps:

### Set Up Cloud Connect for Learning

Please follow the steps provided on the [Workday Community site](https://doc.workday.com/r/gJQvxHUyQOZv_31Vknf~3w/lMqAv1uvFsMteUI_nGhyiQ) under "Steps: Set Up Cloud Connect for Learning":

Once you can visit the “Configure External Content Provider” task and add the LinkedIn Learning external tool, you have successfully completed the necessary setup work.

To configure the LinkedIn Learning Provider in Workday, take the following steps:

1. From the "Configure Content Cloud Provider" task in Workday, add a new external provider and choose "LinkedIn Learning".

2. In the setup screen, paste in your **Client Secret** and **Client ID**, [generated in LinkedIn Learning](#provision-api-keys-for-content-catalog-sync).

    :::image type="content" source="media/workday/content-cloud.png" alt-text="Configure external content provider":::

3. Once you have the API keys, you can choose what sub-sections of the LinkedIn library are imported into Workday. Choose your settings and click **OK**.

    :::image type="content" source="media/workday/content-provider.png" alt-text="Import content channels":::

4. From the task, “Configure External Content”, map the LinkedIn Learning content to topics in Workday. Specify a default topic that you can use for all content without a specified topic.

    :::image type="content" source="media/workday/external-content.png" alt-text="Map topics to tags":::

5. To view the progress of the course content import, view the **Process Monitor**. The import takes a varying amount of time depending on the content you choose to import.

    :::image type="content" source="media/workday/process-monitor.png" alt-text="Workday process monitor":::

### Enable xAPI Learner Activity Tracking in LinkedIn Learning

Please follow the steps provided on the Workday Community site to generate the necessary xAPI credentials:
[https://community.workday.com/node/875090](https://community.workday.com/node/875090)

Using the information you acquired in Workday, follow the instructions below to configure LinkedIn Learning:

1. After you log in, if you are not already in the **Admin** screen, select **Go to Admin**, then click **Me > Integrate**.

    :::image type="content" source="media/workday/welcome-back-integrate.png" alt-text="Integrate menu selection":::

2. From the side navigation menu, select **Configure reporting integrations**.

3. Expand the **Configure xAPI** section.

4. Click **Add integration**.

    :::image type="content" source="media/workday/add-xapi.png" alt-text="Add xAPI integration":::

5. In the **Integration name** field, enter "Workday Reporting".

6. In the **User Type** drop down, select **Email**. This value must match the email address value in Workday; please reach out to Workday support if you need help identifying this value.

7. Copy and paste the **Auth URL**, **Tracking URL**, **Client ID** and **Client Secret** provided by Workday into LinkedIn Learning.

8. Click **Enable**.

    :::image type="content" source="media/workday/wd-xapi-enable.png" alt-text="Enable xAPI integration":::

    You have enabled the Workday xAPI connection in LinkedIn Learning.

    :::image type="content" source="media/workday/wd-xapi-enabled.png" alt-text="Active xAPI connection":::

**Congratulations! Your learners now can access LinkedIn Learning content via their Workday instance**.

### Workday Troubleshooting

For further assistance, contact [Workday’s customer support](https://signin.resourcecenter.workday.com/). **You must register as a Workday member to receive technical support.**
