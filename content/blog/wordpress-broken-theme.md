--- 
description: How I fixed 'This theme is broken. Template is missing.' error on my WordPress website.
publishedAt: 2024-05-06 14:00:00
keywords: ['wordpress', 'bug', 'fix', 'theme', 'template']
image: /images/wordpress-logo.png

head:
meta:
- name: 'og:image'
content: /images/wordpress-logo.png
---

#  WordPress Theme Error
<i class="fa-brands fa-wordpress"></i>

Today I spent all day trying to smash a WP bug.

## Background

Within a few minutes of starting work this morning I was notified that one of my WordPress sites I recently worked on was down.  It is an old site and last week I drafted all the the current pages except the homepage modified the homepage to be a simple "Company A is now Company B.  Please visit companyb.com to login". I also created a redirect for all of the subpages to redirect to the new redirect page.  Everything was working fine Wednesday, Thursday and Friday, but sometime over the weekend the site went down.

At first I couldn't even login to the wordpress editor.  Go Daddy reverted the site back to Friday (the last known day it worked) and I was able to login.  Once logged in, I found the error message 
``` console
This theme is broken. Template is missing. Standalone themes need to have a templates/index.html or index.php template file. Child themes need to have a Template header in the style.css stylesheet.
```

After trying various fixes the thing that finally worked for me was deleting the theme and then reinstalling it.  To do this:
1.  I first had to visit the website of the theme and download it. 
2.  Deactivate all plugins (but take a picture first of your plugin screen so you remember which ones are active and which ones aren't)  
3.  Next, go to appearances --> themes--> add new theme.  I encountered problem when i t came to uploading the new theme and  had go to  incognito mode in order to upload it.  
4. Once uploaded, activate the theme and then activate the plugins.  

Hopefully, that works for you.