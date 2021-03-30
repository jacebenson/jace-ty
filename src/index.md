---
description: "#11ty #Simple #Quick"
imageName: "screenshot.jpg"
eleventyComputed:
  layout: "/theme/{{ site.theme }}/layouts/home.njk"
  title: "Jace-ty using {{ site.theme }} theme"
---

What is this? 

1. Data driven theme, you update `src/_data/site.js`'s theme, and it will use the theme folder in `src/_includes/theme` as indicated.
2. If you want to change a file about the theme, instead of modifying the file, it will prefer the file in `src/_includes/layouts/` first, if not found, it will look in `src/_includes/theme/<theme_name>/layouts/`
3. Generators.  I never was a fan of creating the individual files and folders for my posts, but I do like the organziation of it.  
4. There's more details in the readme, here's an copy/pasta

# Jace-ty

[See this live here](https://jace-ty.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fc9177c3-21b0-4f2b-8ab4-2f46df6b77ae/deploy-status)](https://app.netlify.com/sites/jace-ty/deploys)

Jace's opinionated template for 11ty.

This project scaffold includes:

- [Eleventy](https://11ty.dev)
- [RSS](#rss)
- [Syntax highlighting](#syntax-highlightling)
- Header Links for Markdown files
- [Comments](#comments-powered-by-utteranc.es)
- [A folder structure for each post with proper passthrough for files](#a-folder-structure-for-each-post-with-proper-passthrough-for-files)
- [Theme files take a backseat to local files meaning](#theme-files-take-a-backseat-to-local-files-meaning)
- Two themes
    {% details 'jace-ty', 'font-size:2em;', 'open' %}
    <img src="./assets/img/jace-ty.jpg" style="width:50%"/> 

    - [Simple Site Search](https://github.com/jacebenson/jace-ty/blob/main/src/_includes/base.njk) <sup>see searchPosts function</sup>
    
    {% enddetails %}

    {% details 'jace-simple', 'font-size:2em;', 'open' %}
    <img src="./assets/img/jace-simple.jpg" style="width:50%"/>
    
    - 100% semantic - at least that's the thought.  Inspired by https://www.erikkroes.nl/blog/i-made-this-website-with-html/
    - [Comments](https://github.com/jacebenson/jace-ty/blob/main/src/_includes/layouts/post-single.njk#L56) powered by [https://utteranc.es/](https://utteranc.es/)
    {% enddetails %}




### Update `./src/_data/site.js` to have your details

This file controls the features of this site.

| Detail | Comments |
| --- | --- |
| theme | dictates the theme used |
| menu | an array of links to have on top of site | 
| baseURL | the public base url used for the site | 
| utterancesRepo | the github project where utteranc.es works for this |


## Features

Each feature is important, so I want to detail them here.

### Syntax Highlightling

I use the PrismJS theeme `prism-a11y-dark.css` with [`@11ty/eleventy-plugin-syntaxhighlight`](https://www.11ty.dev/docs/plugins/syntaxhighlight/) for this feature.  You can change that template by updating `base.njk` with a link to your file.

### Simple Search

This feature allows for title, subtitle, summary, and meta field searches on your posts.  It's accomplished by making a javascript object and searching that from its definition in `base.njk`

### RSS
I've added a Atom 1.0 valid feed from `feed.njk`.  This is outside of the the theme folder as it's shared.  It stands alone.  `/src/_includes/feed.njk` renders to `index.xml` for the rss feed.

### A folder structure for each post with proper passthrough for files
What does this mean?  Each post gets a folder.  You don't have to do this but this is how I've built this theme.  It means you can keep your assets relative to your content.  
The folder structure is like this
```
src/
├── ...
└── post/
    ├── my-first-post
    |   ├── featured-100.webp
    |   └── index.md
    └── my-second-post
        ├── featured-100.webp
        └── index.md
```
### Comments powered by utteranc.es
If you've set up utteranc.es on your repo, set that in the `_data/site.js` file.

### Theme files take a backseat to local files meaning

In the template files instead of a strait `includes layouts/simple.njk` I use a function called  `site.getFile("layouts/simple.njk")`.  This looks for the file outside of the theme, then inside the theme.

Let's walk through the example file given above.  If we had the `site.theme` set to jace-simple, here's where it would look.
1.  `./src/_includes/layouts/simple.njk`
2.  `./src/_includes/theme/jace-simple/layouts/simple.njk`

If the file is not found in either case, it logs it out on build.

## Creating Posts

This template uses generators to make the files and images for posts.  You can change how this works by modifying the code in ./generators.

One of the calls will generate the index.md, all the different image sizes needed for the templates.

```bash
yarn g post "This is the title of my post"
```

## Generators

I've added generator scripts to help build files.

### Generic 

The main generator is `./generators/generic.js`

This will create or replace the index.md, and featured-*.webp files.

This searches pixabay for the title, if it doesn't find a result, it 
defaults to some random colors and objects until it finds something.

You call it by running this;

```bash
yarn g collection title #
#  1-^ 2-^        3-^
# 1 - g or generate
# 2 - so post or services or talk
# 3 - title the title of the post.  
# This renames the title to yyyy-mm-dd-title + title
# also replaces non-alphanumerics with `-`s
```

### DownloadImages

If you have a post and you want a different image but dont want to have resize them

```bash
yarn downloadImage ./src/post/my-first-post/ "search query"
#                   1-^                       2-^
# 1 - this is the folder that we'll be targeting to replace the images in
# 2 - search query to pass to pixabay, you dont need quotes if one word
#     if more than one word, you'll need to quote it.
```

### BuildImages

If you already have an image but you dont want to convert it this script is for you.

```bash
yarn buildImages ./src/post/my-first-post/featured.jpg
#                    1-^
# 1 - this is the image we'll be resizing and converting
#     this takes the image, creates a webp for the following
#     sizes, 100, 200, 320, 360, 640, 720, 960, 1280
#     These are specically used in the following templates
#     ./src/_includes/footer.njk
#     ./src/_includes/layouts/post.njk
#     This is also used in ./src/post/post.json
```


## Prerequisites

- [Node and NPM](https://nodejs.org/)

## Running locally

```bash
# install the dependencies
yarn # or npm i # if you dont have yarn

# It will then be available locally for building with
yarn serve # or npm run serve if you dont have yarn
```