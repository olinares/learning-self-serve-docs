---
title: AICC Integrations
description: A guide in my new docs site.
---

# [Editing/Updating LinkedIn Learning docs](https://app.tango.us/app/workflow/194c0a69-78ee-4c1e-8687-0092f6e46163?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)

__Creation Date:__ April 23, 2023  
__Created By:__ Oscar Linares  
[View most recent version on Tango.us](https://app.tango.us/app/workflow/194c0a69-78ee-4c1e-8687-0092f6e46163?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)



***




## # [Github](https://github.com)


### 1. Open your favorite Command Terminal

Navigate to your local repository location and type: git checkout main

If you are adding a brand new document, please [review this doc](https://review.learn.microsoft.com/en-us/help/get-started/add-new-article?branch=main&pivots=learn-authoring-pack-yes) first

![Step 1 screenshot](https://images.tango.us/workflows/194c0a69-78ee-4c1e-8687-0092f6e46163/steps/b0734801-b9e7-42f1-96fc-4052de35aaf3/f0193c8d-c4ad-49da-9b41-3cd623209604.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=2&mark-y=1257&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05MjEmaD02MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 2. Let's now update our local copy with the remote files

Run the following command: git pull upstream main

![Step 2 screenshot](https://images.tango.us/workflows/194c0a69-78ee-4c1e-8687-0092f6e46163/steps/4d264ffa-fcdd-4670-89e7-562c42312576/a8a9cde1-b600-4164-8057-8ab149e86f78.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=217&mark-y=50&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDEmaD0zMiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 3. When making new changes always create a new working copy from the main branch

We are now creating a new working copy for our changes: git checkout -b <branch-name.

![Step 3 screenshot](https://images.tango.us/workflows/194c0a69-78ee-4c1e-8687-0092f6e46163/steps/ae9d156a-2113-464c-9d51-5410a995c8ab/6fb77cab-c243-4ced-93a3-7efa2f91cec3.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=284&mark-y=39&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05MDcmaD01NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 4. Open up VS Code in your Terminal by typing: code . 

Open the file you want to edit, you can click on the preview pane to see a live preview. You can also view your working git branch on the bottom left as well as Code Markdown elements. Our documents are build using the [Markdown](https://review.learn.microsoft.com/en-us/help/platform/markdown-reference?toc=%2Fhelp%2Fget-started%2Ftoc.json&bc=%2Fhelp%2Fget-started%2Fbreadcrumb%2Ftoc.json&branch=main) language.

![Step 4 screenshot](https://images.tango.us/workflows/194c0a69-78ee-4c1e-8687-0092f6e46163/steps/3cfbf3a4-1453-4a0b-9d17-b61b17b9e513/fbe1c78b-8e84-41de-b782-32ddbf1e75f6.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n)


### 5. In this example we added a Note Ma element to the document. You will see the live preview on the right hand panel. 

Save your changes and switch back to your Terminal command prompt

![Step 5 screenshot](https://images.tango.us/workflows/194c0a69-78ee-4c1e-8687-0092f6e46163/steps/439b7124-370b-4983-b946-38e25f277df1/673d66cf-d698-48c7-964e-86ebfbee8fea.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=258&mark-y=351&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NTUmaD04OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 6. You are ready to commit and push your new changes to GitHub

Once your changes are saved type the following:

git status (this will show you if you have changes to commit)

git add . (this will stage all your changes)

git commit -m "meaningful message describing your changes" (this saves your changes to your local repository)

![Step 6 screenshot](https://images.tango.us/workflows/194c0a69-78ee-4c1e-8687-0092f6e46163/steps/8dc34605-0b29-4e5b-8f07-02c132ff2f87/f457f10b-fc44-44ec-8acf-7ed32eab2242.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=543&mark-y=150&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMzAmaD0yNyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 7. Push your local working branch to the remote branch in your GitHub fork

This step pushes your changes to the new repo and you are now ready to create a Pull Request and get your changes reviewed and approved

Git command: git push origin <your-working-branch-name>

![Step 7 screenshot](https://images.tango.us/workflows/194c0a69-78ee-4c1e-8687-0092f6e46163/steps/1edcf5e3-13d3-4519-8204-6f2192c95ef5/25c421a9-738f-4d07-97de-df13c852f0d1.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=653&mark-y=75&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01NDMmaD00MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

<br/>

***
Created with [Tango.us](https://tango.us?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)