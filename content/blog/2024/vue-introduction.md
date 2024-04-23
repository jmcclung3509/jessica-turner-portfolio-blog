--- 
description: A beginner's guid to getting started with Vue 3.
image: image/blog/2024/icons8-vue-js-480.png
head:
meta:
- name: 'og:image'
content: image/blog/2024/icons8-vue-js-480.png
---

# Introduction to Vue 3

![Vue 3 Introduction](/images/blog/2024/icons8-vue-js-480.png)


## What is Vue 3?

Vue.js 3 is a progressive JavaScript framesork for building user ingerfaces on the web. It's designed to be incrementally adoptable and can easily scale between a lobrary and a full-featured framework.

## Why choose Vue?

## Getting Started with Vue 3

Here's a basic Vue 3 application setup:

```javascript
const {createApp } = Vue
const app = createApp({
    data() {
        return{
            message: 'Hello Vue 3!'
        }
    }
})
app.mount('#app')
```