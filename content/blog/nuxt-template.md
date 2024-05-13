--- 
description: How to setup a basic Nuxt app with Tailwind, scss and Nuxt DevTools.
publishedAt: 2024-05-02 00:30:00
image: /images/icons8-nuxt-js-480.png
keywords: ['nuxt', 'tailwind', 'template', 'scss', 'devtools']
toc: true
head:
meta:
- name: 'og:image'
content: /images/icons8-nuxt-js-480.png
---

# Introduction to Nuxt 3
<div class="image-container flex justify-start">
<img src="/images/icons8-nuxt-js-480.png" alt="Nuxt icon" class="top-blog-image not-prose"/>
</div>




## What is Nuxt 3?


Nuxt.js is a development framework that enhances the capabilities of Vue.js, a popular JavaScript framework for building user interfaces. It simplifies the process of creating server-side rendered (SSR) and static web applications. Nuxt.js provides a structured environment with opinionated conventions, allowing developers to focus on writing code rather than handling configuration complexities. It offers built-in solutions for SSR, routing, state management, and more, along with support for modular architecture through modules and plugins. This empowers developers to create high-performance, scalable web applications with SEO-friendly features while leveraging the power and simplicity of Vue.js.

## Why choose Nuxt?

- What sets Nuxt apart is its ability to handle everything from the front end to the back end, making full-stack development a piece of cake. Plus, it's open source, so there's a whole community backing it up and adding cool features all the time.

- One of the biggest perks of using Nuxt is its intuitive nature. You don't have to be a coding whiz to get started; its user-friendly approach makes it accessible to developers of all levels. And when it comes to performance, Nuxt shines bright. It optimizes your code for speed, ensuring your creations load lightning-fast and keep users engaged.

- Nuxt is all about scalability and reliability. Whether you're building a small blog or a complex e-commerce platform, Nuxt has your back. It's built to handle heavy traffic and complex functionalities without breaking a sweat.

## Getting Started with Nuxt 3

Here's is the  basic setup  I use for getting started with a  Nuxt 3 application.

In the terminal:
1. **Create a new project**
```console
npx nuxi@latest init "project name"
```

2. **Change into your new project** 
```console
cd "project name"
```

3. **Install dependencies**
```console
 npm install
 ```

 4. **Install Tailwind**
 ```console
 npx nuxi module add @nuxtjs/tailwindcss
 npx tailwindcss init
 ```


 5. **Install DevTools**
 ```console
 npm i -D @nuxt/devtools
 ```

 6. **Install Sass**
 ```console
 npm install sass sass-loader --save-dev
 ```

 7.  **Open in Visual Studio Code**
 ```console
code .
```



 8. **In nuxt.config add:** 
```console
  modules: ["@nuxt/devtools", "@nuxtjs/tailwindcss"],
  css: ["@/assets/main.scss"], //Make sure to adjust this to the location of your scss file(s)
  ```
 

9. **Start dev server**
```console
npm run dev
```




## Create a GitHub Repo with your new Project

1. **Add and commit**

In the terminal of your project**
```console
1. git add .
2. git commit -m "Initial commit"
```

2. **Create new repo**

Go to your GitHub and create new Repo
![Screenshot of creating a new repo](/images/new-repo.png)

3. **Push to your new repo**

Copy  the code under "…or push an existing repository from the command line"
```console
git remote add origin https://github.com/{{username}}/{{repo_name}}.git
git branch -M main
git push -u origin main
```
![Screenshot of pushing new repo](/images/push-repo.png)

 That's it. You now have a starter template for working with Nuxt, Tailwindcss and Sass

Find my **starter template** [here](https://github.com/jmcclung3509/nuxt-template)
 

