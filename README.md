# Jace-ty

[See this live here](https://jace-ty.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fc9177c3-21b0-4f2b-8ab4-2f46df6b77ae/deploy-status)](https://app.netlify.com/sites/jace-ty/deploys)

Jace's opinionated template for 11ty.

This project scaffold includes:

- [Eleventy](https://11ty.dev)
- [Syntax highlighting](https://github.com/jacebenson/jace-ty/blob/main/.eleventy.js#L21)
- [Simple Site Search](https://github.com/jacebenson/jace-ty/blob/main/src/_includes/base.njk) <sup>see searchPosts function</sup>
- [RSS](https://github.com/jacebenson/jace-ty/blob/main/.eleventy.js#L4)
- A folder structure for each post with proper passthrough for files
- [Comments](https://github.com/jacebenson/jace-ty/blob/main/src/_includes/layouts/post-single.njk#L56) powered by [https://utteranc.es/](https://utteranc.es/)
- Theme files take a backseat to local files meaning
  - `./src/_includes/layouts/header.njk` will be used if exists, 
    otherwise, use 
    `./src/_includes/theme/${theme}/layouts/header.njk`

![Eleventy screenshot](./src/_includes/theme/jace-ty/screenshot.jpg)


## Instructions

To get your own instance of this 11ty starter project cloned and deploying to Netlify click the button below and follow the instructions.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jacebenson/jace-ty)

### Wait, what happens when I click that button?

Good question. Here's what it will do...

1. Netlify will clone the git repository of this project into your Github account. It will be asking for permission to add the repo for you.
2. We'll create a new site for you in Netlify, and configure it to use your shiny new repo. Right away you'll be able to deploy changes by pushing code to your repo.
3. That's it.

### Update `./src/_data/site.js` to have your details

This file controls some features of the site

They should all be self explanatory.  A call out I have is;

Utteranc.es requires the repository to be public on github to work



## Features

Each feature is important, so I want to detail them here.

### Syntax Highlightling

I use the PrismJS theeme `prism-a11y-dark.css` with [`@11ty/eleventy-plugin-syntaxhighlight`](https://www.11ty.dev/docs/plugins/syntaxhighlight/) for this feature.  You can change that template by updating `base.njk` with a link to your file.

### Simple Search

This feature allows for title, subtitle, summary, and meta field searches on your posts.  It's accomplished by making a javascript object and searching that from its definition in `base.njk`

### RSS
I've added a Atom 1.0 valid feed from `feed.njk`.

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
### Comments powered by https://utteranc.es/
If you've set up utteranc.es on your repo, set that in the `_data/site.js` file.  It's added to posts in the `post-single.njk` file.

### Theme files take a backseat to local files meaning
This is great but still needs some work.

When you use this starter you'll notice most the template files are in `src/theme/jace-ty/`.  This is on purpose.  If you make a file in `src/layouts/` with the same name as a file in `src/theme/jace-ty/`, you're layouts file is used.  If you want to revert to this theme, rename or delete your file.

How does this work?  Well, in `site.js` you define a theme near the top, that builds the proper path for the starter njk files.  If you want a new theme, you can create a sibling folder to `jace-ty`.  In site.js I've added a function to look at what file exists based on a simple path.  If /layouts/file.njk exists, return that, otherwise, return the theme file.

The problem I have with this is the top level collection *.md file.  Look at `./src/post/post.md`.  There it's hardcoded to jace-ty theme, you can change that but I've not figured out how to do that part. 

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