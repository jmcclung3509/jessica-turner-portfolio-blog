---
description: Introductoin to Nuxt UI
publishedAt: 2024-06-03 11:30:00
image: /images/icons8-nuxt-js-480.png
keywords:
  [
    "nuxt",
    "tailwind",
    "template",
    "nuxtui",
    "nuxt ui",
    "nuxt-ui",
    "nuxt-icons",
    "icons",
    "troubleshooting",
  ]
toc: true
head:
meta:
  - name: "og:image"
content: /images/icons8-nuxt-js-480.png
---

# Introduction to Nuxt UI

<div class="image-container flex justify-start">
<img src="/images/icons8-nuxt-js-480.png" alt="Nuxt icon" class="top-blog-image not-prose"/>
</div>

## What is Nuxt UI?

NUXT UI is a user interface framework for building user-friendly and efficient web apps with NUXT.js. It comes with a bunch of ready-made UI components and tools that make development quicker and easier. Plus, it works perfectly with NUXT.js features like server-side rendering, static site generation, and dynamic routing, making your web development process smooth and seamless.

### Benefits of Nuxt UI

- **Built-in Dark Mode:** Easily switch between light and dark themes.
- **Language Support:** Accommodates both LTR and RTL languages.
- **Customizable Keyboard Shortcuts:** Enhance usability with personalized shortcuts.
- **Bundled Icons:** Access a variety of ready-to-use icons.
- **TypeScript Support:** Benefit from full type safety.
- **Figma Kit:** Maintain consistent design with the provided Figma kit.

### Drawbacks of Nuxt UI

- **Customization Limits:** Predefined components might restrict design flexibility.
- **Potential Overhead:** Using a framework can add unnecessary complexity for very simple projects.
- **Community and Support:** As a specialized tool, it might have less community support compared to more established UI frameworks.

## Getting started with Nuxt UI

1. In the terminal of your Nuxt project

```console
npm i @nuxt/ui
```

2. Add the module to your nuxt.config file

```console
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

 **Alternatively,** you can install nuxt/ui and import the module to nuxt.config.ts with

```console
npx nuxi@latest module add ui
```

## Important Notes:

Nuxt UI automatically installs @nuxtjs/tailwindcss, @nuxtjs/color-mode and nuxt-icon modules
You will need to remove these modules before installing Nuxt UI.

I had to copy my tailwind.config file to my notes app. Delete it from the project along with the tailwind module from my project.json and from the modules section of my nuxt.config.

Once, Nuxt UI was installed I created a tailwind.config file and copied the contents back in. I also had to reformat the contents section from this:

```javascript
    content: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
      ],
```

to:

```javascript
content: [
  "./assets/**/*.{vue, js, css}",
  "./components/**/*.{vue, js}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js.ts}",
];
```

## Using a Nuxt UI component

Adding a Nuxt UI component to your web project is incredibly easy. For example, to add a simple Nuxt UI button:

```vue
<template>
  <UButton>Button</UButton>
</template>
```

<div class="nuxt-button">Button</div>

The button component, like most Nuxt UI components, come with build it props which allows for customization.

```vue
<template>
  <UButton
    icon="i-heroicons-pencil-square"
    size="sm"
    color="primary"
    variant="solid"
    label="Button"
  />
</template>
```

[Click here](https://ui.nuxt.com/components) for a list of available components.

## Nuxt UI Icons

Using Nuxt UI Icon component you can display any of Iconify's 100, 000+ icons with this simple template:

```vue
<template>
  <UIcon name="i-heroicons-light-bulb" />
</template>
```

Heroicons is the default icon library and work by following this pattern:

```console
i-{collection_name}-{icon_name}.
```

To use an icon library other than Heroicon you need to do a few additional steps: 
For example to use Material Design Icons.

1. Install Material Design Icons

```console
npm i @iconify/icons-mdi
```

2. Add it to your nuxt.config

```vue
ui: { icons: ['mdi'] },
```

3. Add the **dynamic** prop to the component

```vue
<template>
  <UIcon name="i-mdi-home" dynamic />
</template>
```



4. Customize it
Change the color or size with props
```vue
   <template>
        <UIcon name="i-mdi-home" dynamic color="green" size=lg />
   </template>
```


This is a very brief run down on what is possible with Nuxt UI. To learn more please check out the [documentation](https://ui.nuxt.com/getting-started)