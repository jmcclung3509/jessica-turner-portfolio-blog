---
description: Introduction to Nuxt UI
publishedAt: 2024-07-09 8:30:00
image: /images/icons8-nuxt-js-480.png
keywords:
  [
    "nuxt",
    "tailwind",
    "template",
    "nuxtui",
    "nuxt ui",
    "nuxt-ui",
    'customization',
    'theming',
    'colors',
    "troubleshooting",
  ]
toc: true
head:
meta:
  - name: "og:image"
content: /images/icons8-nuxt-js-480.png
---

# Customizing Nuxt UI component colors

## Introduction
Nuxt UI is a collection of pre-built, customizable components for Nuxt.js, designed to streamline the development of modern web applications.  Built with Tailwind CSS and Headless UI, these components help developers quickly build consistent and responsive user interfaces.  

## Customization Limitations

Although components are customizable, there may be limitations in achieving very specific designs or behaviors without extensive customization.  

## Customizing a Nuxt UI component

Customizing components in Nuxt UI is generally straightforward and flexible, allowing developers to tailor them to meet specific project requirements.  This customization is achieved through a combination of props, slots and scoped styles, enabling detailed control over the appearance and behavior of each component.  Additionally, Tailwind CSS offers utility-first styling, making it easy to apply consistent and responsive designs.

For example,  let's take a look at the Nuxt UI button component and see how easily it can be customized.

For documentation on Nuxt UI Button component [click here](https://ui.nuxt.com/components/button)

This a a simple Nuxt UI button with a solid background color of primary (Tailwind green #22c55e)

```vue
<template>
  <UButton color="primary" variant="solid">Button</UButton>
</template>
```
<div class="button-container">
<button class="btn solid  primary"> Button</button>
</div>

Nuxt UI buttons can be easily customized with Nuxt UI props. For example, changing the color prop to "blue", variant prop to "outline" and adding an icon  results in the following button style:
```vue
<template>
  <UButton color="blue" variant="outline" icon="i-heroicons-pencil-square" >Button</UButton>
</template>
```
<div class="button-container">
<button class="btn outline blue  flex justify-center items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
</svg>Button</button>
</div>

## Adding custom styles to a Nuxt UI component

Adding custom colors and styles to a Nuxt UI component can easily be achieved using  a combination of Tailwind CSS and scoped styles. 

### 1. First add the colors you want to tailwind.config.js 
Ensure your tailwind.config.js file is correctly set up in your Nuxt.js project root directory:
```javascript
module.exports = {
    content: ['./components/**/*.{vue,js}', './pages/**/*.{vue,js}' ],
    plugins: [],
    theme: {
      extend: {
        colors: {
          'bright-orange': "#FF5B00", 
          'dark-grey': "#363737"
          },
        },
      },
    
  };
  ```

### 2. Add a class to your UI component with you tailwind styles
Use the new colors in your component:
```vue
<template>
  <UButton class="bg-bright-orange rounded-lg text-dark-grey" variant="solid" label="button"/>
</template>
```
<div class="button-container">
<button class="btn solid orange"> Button</button>
</div>

### Using scoped styles
You can also use scoped styles to further customize your component
```vue
<template>
  <UButton class="custom-button" variant="solid">Button</UButton>
</template>


<style scoped>
.custom-button {
  background-color: #FF5B00;
  color: #363737;
  border-radius: 0.5rem;
}
</style>
```

## Troubleshooting
### Common Issues
 - **Tailwind classes not applying:** Ensure your `tailwind.config.js` file is properly configured and that Tailwind CSS is correctly set up in your project.
 - **Scoped styles not working:**  Verify that the  `<style scoped>` tag is used and the class names match your component's elements

## Additional Resources
 - [Nuxt.js Documentation](https://nuxt.com/) 
 - [Tailwind CSS Documentation](https://tailwindcss.com/docs/guides/nuxtjs)
 - [Blog post: Getting started with Nuxt.js and Tailwind CSS](https://jessica-turner-portfolio-blog.vercel.app/blog/nuxt-template)
 - [Nuxt UI Documentation](https://ui.nuxt.com/)
 - [Blog post: Getting started with Nuxt UI](https://jessica-turner-portfolio-blog.vercel.app/blog/nuxt-ui)


 By following these steps, you can effectively customize Nuxt UI components to fit your project's unique design requirements.