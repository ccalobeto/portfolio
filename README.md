# Public Template

If you wanna use this site as a base for building your own, I highly recommend basing it off [Mat Fantinel SvelteKit blog template](https://github.com/matfantinel/sveltekit-static-blog-template) instead! It is better documented and there is way less stuff to remove.
> [!IMPORTANT]
> Follow the commits I've done to perform how to change foreground or background colors, social links, site logo and build other svelte components or routes.

# [carlosleon.dev](https://www.carlosleon.dev/)

This is my own personal website, built with SvelteKit.

<p align="center">
    <img src="static/images/projects/personal-website-transparent.png" alt="Screenshot" />
</p>

It was built with a few goals in mind:

- Responsive design: the website looks and behaves well on screens of all sizes;
- Fast: it only loads what's needed for it to work;
- Adaptive: it supports dark mode from most operating systems by default (desktop and mobile);
- Optimized images: use enhanced image package for better performance;
- Pretty: have a pleasant design that is both accessible and pleasing to the eye.
- Use CDN in cloudflare: to speed up your static site. 

# Building & Running Locally

To run it locally, you simply have to run:

```shell
# First, install dependencies
npm install
# Then, run it on dev mode
npm run dev
```

The site should now be available at http://localhost:5173/ on your local machine, and your local machine's IP address on your network—great for testing on mobile OSes.

# Image Optimization

This website uses [enhanced images](https://kit.svelte.dev/docs/images#sveltejs-enhanced-img) to automatically optimize images used in the site. This means that even if you use non-optimal image formats (like lossless PNGs), it will go over the images and convert images to WebP and AVIF for you, as long as you use the `<Image />` component instead of `<img />`. This is done on build, so it doesn't change anything when running the website locally.

# Managing Posts

All posts are Markdown files that are processed with [svelte-markdown](https://github.com/pablo-abc/svelte-markdown) so that the renderers can be customized. In order to make it easier to manage posts, I highly recommend the [Front Matter VS Code extension](https://frontmatter.codes/), which gives you a nice CMS-like UI.

# Hosting

This site is hosted on [Cloudflare](https://www.cloudflare.com/).

# Markdown Syntax

I've recently updated the Markdown syntax to match [Obsidian's](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax). With a few added goodies.

| Effect | Syntax | Example |
| ---- | ---- | ---- |
| Bold | ** or __ | \*\*example\*\* |
| Italic | * or _ | \*example\* |
| Strikethrough | ~~ | \~\~example\~\~ |
| Highlight | == | \=\=example\=\= |
| Links | \[\]\(\) | \[text\]\(url\) |
| Blockquotes | \> | \> Quote |
| Sparkling Highlight | @@ | \@\@example\@\@ |
| Button | \[text\](url 'button prop=value') | \[Example\](url 'button color=secondary href=url') |
| Callout | > \[!type\] | > \[!info\]<br>> Example |
| Image | !\[Alt text \|\| custom-class\](url 'figcaption') | !\[Example image \|\| full-bleed\](/test.jpg 'A sample image'\]
