---
description: Customization of Nuxt UI components
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
    "components",
    "ui prop"
    ":ui"
  ]
toc: true
head:
meta:
  - name: "og:image"
content: /images/icons8-nuxt-js-480.png
---

# Customization of Nuxt UI components

## Introduction
Nuxt UI is a collection of pre-built, customizable components for Nuxt.js, designed to streamline the development of modern web applications.  Built with Tailwind CSS and Headless UI, these components help developers quickly build consistent and responsive user interfaces.  

## Customization Limitations

Although components are customizable, there may be limitations in achieving very specific designs or behaviors without extensive customization.  

## Customizing a Nuxt UI component

Customizing components in Nuxt UI is generally straightforward and flexible, allowing developers to tailor them to meet specific project requirements.  This customization is achieved through a combination of props, slots and scoped styles, enabling detailed control over the appearance and behavior of each component.  Additionally, Tailwind CSS offers utility-first styling, making it easy to apply consistent and responsive designs.

For example,  let's take a look at the Nuxt UI button component and see how easily it can be customized.

For documentation on Nuxt UI Button component [click here](https://ui.nuxt.com/components/button)
 ### Basic Button Example
This a a simple Nuxt UI button with a solid background color of primary (Tailwind green #22c55e)

```vue
<template>
  <UButton color="primary" variant="solid">Button</UButton>
</template>
```
<div class="button-container">
<button class="btn solid  primary"> Button</button>
</div>

### Customizing the Button with Built-in Props

You can easily change the button’s color, variant, and add an icon using Nuxt UI props. For example, changing the color to "blue", variant to "outline", and adding an icon results in:
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

## Advanced Customization Techniques

There are several ways to add custom colors and styles to a Nuxt UI component.  In some cases, simply adding a unique class or tailwind classes directly to the Nuxt UI component works.
For example, to style the UButtton  I was able to add tailwind classes directly to the button.

### 1. Adding custom colors with tailwind classes

#### Ensure your tailwind.config.js file is correctly set up in your Nuxt.js project root directory:
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


#### Use the new colors in your component:
```vue
<template>
  <UButton class="bg-bright-orange rounded-lg text-dark-grey" variant="solid" label="button"/>
</template>
```
<div class="button-container">
<button class="btn solid orange"> Button</button>
</div>
 
### 3. Using scoped styles 
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
## Customizing with the **UI Prop**
If the above techniques are not working you can try customizing your Nuxt UI component with the UI prop.

### 1. Check the Component Config

Nuxt UI components are based on a primary color and a grey color by default. You can find the default classes for each component in the component's Config section at the bottom of each page. For example, check out the Nuxt UI Input box documentation [here.](https://ui.nuxt.com/components/input#config)  


For example, the default classes for an Input box colors looks like this:
```vue
{
 color: {
    white: {
      outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
    },
     gray: {
      outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
    },
 }
}
```

By default the 'white' styles are applied, resulting in an input box like this:

<div class='input-container'>
<input type="text" id="search" name="search" placeholder="Search..."/>
</div>

### 2. Add styles to the UI Prop

### Example 1: Customize the color

```vue
<template>
  <UInput 
  v-model="value"  
  placeholder="Search..."
  :ui="{color: 'bg-blue-100'}"
  />
</template>
```
<div class='input-container blue'>
<input type="text" id="search" name="search" placeholder="Search..."/>
</div>

### Example 2:  Customize the Border Radius and Placeholder Styles

Similarly I can change the border radius and placeholder styles:


```vue
{
  rounded: 'rounded-md',
  placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
}
```

```vue
<template>
  <UInput 
  v-model="value"  
  placeholder="Search..."
  :ui="{
    color: 'bg-blue-100', 
    rounded: 'rounded-2xl', 
    placeholder: 'placeholder-gray-800'
    }"
  />
</template>
```

<div class='input-container blue rounded'>
<input type="text" id="search" name="search" placeholder="Search..."/>
</div>

These steps allow for extensive customization of Nuxt UI components using the UI prop, providing detailed control over design elements.

## Troubleshooting
### Common Issues
 - **Tailwind classes not applying:** Ensure your `tailwind.config.js` file is properly configured and that Tailwind CSS is correctly set up in your project.
 - **Scoped styles not working:**  Verify that the  `<style scoped>` tag is used and the class names match your component's elements
 - **UI prop not reflecting changes:** Ensure that the properties and values being passed through the ui prop match the component's configuration options and are correctly formatted.

## Additional Resources
 - [Nuxt.js Documentation](https://nuxt.com/) 
 - [Tailwind CSS Documentation](https://tailwindcss.com/docs/guides/nuxtjs)
 - [Blog post: Getting started with Nuxt.js and Tailwind CSS](https://jessica-turner-portfolio-blog.vercel.app/blog/nuxt-template)
 - [Nuxt UI Documentation](https://ui.nuxt.com/)
 - [Blog post: Getting started with Nuxt UI](https://jessica-turner-portfolio-blog.vercel.app/blog/nuxt-ui)


