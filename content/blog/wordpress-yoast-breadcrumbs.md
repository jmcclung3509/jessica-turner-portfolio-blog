--- 
description: WordPress using Yoast SEO to add breadcrumbs.
publishedAt: 2024-05-09 09:00:00
keywords: ['wordpress', 'seo', 'yoast', 'breadcrumbs']
toc: true
image: /images/wordpress-logo.png
head:
meta:
- name: 'og:image'
content: /images/wordpress-logo.png
---

# All about breadcrumbs
<i class="fa-brands fa-wordpress"></i>





### What are breadcrumbs

Think of breadcrumbs on a website like a trail of breadcrumbs in a forest that helps you find your way back home. On a website, breadcrumbs are a navigation tool that shows you where you are on the site and helps you easily backtrack to previous pages.

They typically appear near the top of a webpage and show the hierarchy of the pages you've visited. For example, if you're on a product page for "Kid's Clothing" within the category "Clothing" on an online store, the breadcrumb trail might look like this:

Home > Clothing > Kid's Clothing

Each part of the trail is clickable, so you can quickly jump back to any level of the website hierarchy you want. It's a handy way to understand where you are on a site and move around without getting lost.

### Why are breadcrumbs important

Breadcrumbs are important for SEO (Search Engine Optimization) for a few reasons:

1. **Improved User Experience:** Breadcrumbs make navigation easier for website visitors. When users can easily understand where they are on a site and how they got there, they're more likely to stay longer and explore more pages. This positive user experience signals to search engines that your site provides valuable content, which can improve your SEO rankings.
2. **Reduced Bounce Rates:** Breadcrumbs can help reduce bounce rates by providing visitors with additional pathways to explore your site. If users can't find what they're looking for quickly and easily, they're more likely to leave your site. Breadcrumbs guide them to related content or higher-level categories, increasing the chances that they'll stay and engage with your site.
3. **Internal Linking:** Breadcrumbs serve as a form of internal linking, which is important for SEO. Internal links help search engines discover and index pages on your site, and they also pass authority (or "link juice") throughout your site. Breadcrumbs provide additional internal links to relevant pages, strengthening the overall internal linking structure of your site.
4. **Keyword-Rich Anchor Text:** Breadcrumbs often include keywords related to the content of the page and its location within the site's hierarchy. This keyword-rich anchor text helps search engines understand the context and relevance of the page, which can improve its ranking for those keywords.

Overall, breadcrumbs contribute to a better user experience and site structure, which can lead to improved SEO performance by increasing user engagement, reducing bounce rates, and enhancing internal linking and keyword optimization.

### How to add breadcrumbs using Yoast SEO

Setting up breadcrumbs with Yoast SEO is fairly straightforward. 
For more information check out [this article](https://yoast.com/help/how-to-implement-yoast-seo-breadcrumbs/) by Yoast

1. **Install and Activate Yoast SEO Plugin:**
If you haven't already, install and activate the Yoast SEO plugin on your WordPress website. You can do this by navigating to the "Plugins" section in your WordPress dashboard and searching for "Yoast SEO."

2. **Enable Breadcrumbs:**
 Once Yoast SEO is activated, go to the Yoast SEO settings. You can find these by clicking on "Yoast SEO" in the WordPress dashboard sidebar and then selecting "Settings."  Select "Advanced" at the bottom of the settings sidebar and select "Breadcrumbs"

3. **Configure your breadcrumbs.**
  This is how I set up mine:
![Breadcrumb setup example](/images/yoast-breadcrumbs.png)

4. **Add the script**

I only wanted the breadcrumbs on my homepage so I added it to my index.php file. Other common places are inside your single.php and/or page.php.
```javascript
<?php
if ( function_exists('yoast_breadcrumb') ) {
  yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
}
?>
```


5. **Style it**

```css
#breadcrumbs{
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    font-size: 12px;
    color: #707ca9;
    a{
        color: inherit;
        text-decpration: none;
        &:hover{
            color: #01AEFF
        }
    }
    span{
        padding-left: 5px;
        padding-right: 5px;
    }
}
```


That's it.  You should now see your breadcrumbs on your page.  








