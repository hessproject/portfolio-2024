---
title: "Building A Personal Portfolio For 2024"
pubDate: 2024-04-08
description: "Building a portfolio can be a daunting task, especially if you have been out of the front-end game for a while"
author: 'Nick Hess'
image:
    url: ../../assets/img/blog/astro.png
    alt: "Astro.js Logo"
tags: ["astro", "javascript", "portfolio", "software", "learning"]
---
The last time I updated my portfolio website was in 2017. A quick visit to my old domain showed a server that could not be reached, and an attempt to run the existing package led to more than a dozen deprecation related errors. I was forced to face a cold reality - I had to build a new one. Though I started my career as a front-end developer, subsequent jobs saw me shifting more into back-end work and further away from the front-end I had once made my focus as a developer. But when it comes to a portfolio, a tool for standing out in a crowded market, first impressions matter. So I set out to brush up on the front-end I had neglected for the past 7 years. 

## Exploring Modern JavaScript

The landscape of JavaScript and associated frameworks has evolved dramatically since my last foray into front-end development. When I made my last portfolio website, jQuery dominated the DOM and frameworks like the original AngularJS were standard tools. At the time, there were rumblings of a new tool called React that was set to become the new king. Today, the field is saturated by a whole new array of frameworks and libraries like Vue.js, Svelte, and Next.js. The sheer amount of choices available made even getting started feel overwhelming, so I took some time to solidify the requirements for my site. 

For a portfolio site, it would largely serve static content. I wanted to have individual pages for each part of my brand - engineering, music, and photography, as well as a blog for engineering and creative topics. For the blog, I wanted to prioritize the ability to easily add new content. I figured most people would find the site through my business cards or a link from my resume, so SEO and searchability were nice to haves but not necessary. As I was currently in the middle of a job search speed of development was also a factor. Taking all of these things into account, I started to narrow down my choices.

## Making Decisions

A few days of analysis paralysis and a half dozen "Top JS Frameworks" Youtube videos later, I had a frontrunner in the website tool race. I had my eyes set on Astro, which describes itself as a "framework for content-driven websites". Astro doesn't lock itself in to any one way of creating UI components, instead allowing you to install and use many other JS libraries like React or Vue, or use the built in .astro filetype to create templates using what looks like standard HTML. Additionally, Astro has built-in markdown support making it ideal for the blog, and it automatically sets up site routes to any newly created markdown files, and has a dead simple method to pass metadata information to your templates. In the event that Astro for some reason ceases to exist in the future, markdown files are easy to convert to other formats and fit to other frameworks.

The combination of easy routing, markdown support, speed of development, and flexibility made Astro appear very enticing, so I started with the official tutorial, which just so happened to be building a blog - nice. Within an hour, I had a prototype blog up and running with routing, content tagging support, and templates which formatted and served any newly created markdown files as HTML.

## New Deployment Options

Along with the influx of new libraries and frameworks there are also a host of new deployment options for developers. While the tried and true methods still exist - you can still host your own server and build and deploy manually, new services like Vercel and Netlify offer build and deploy methods that simplify the process down to essentially a git push. Of course, this comes with steep operating costs at scale, but for a relatively low traffic portfolio site emphasizing development speed these services were a perfect match. 

## Site Launch

Overall, I was pretty blown away by the developments in the front-end space over the past 7 years. Speed of development alone has come such a long way and its easier than ever to get full applications built and deployed. You are reading the fruit of this labor via this post right now - a simple markdown file routed via Astro and deployed with Vercel, and a development time of less than a week from concept to deployment.