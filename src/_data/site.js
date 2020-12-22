const dotenv = require('dotenv').config()
let now = new Date();

module.exports = {
    
    environment: process.env.ELEVENTY_ENV,
    twitter: "jace-ty",
    github: "https://github.com/jace-ty",
    linkedin: "https://linkedin.com/in/jace-ty",
    baseURL: "https://jace-ty.netlify.app",
    title: "Jace-ty",
    //patreon: "https://www.patreon.com/bePatron?u=23597006",//if uncommented adds a link to header and footer
    description: "An 11ty Starter for your site featuring RSS, Search, and Comments",
    subtitle: "This is a subtitle about your amazing 11ty site.",
    author: "Your Name",//used all over
    email: "youremailforrss@example.com",//used specificly for rss feed
    utterancesRepo: "jacebenson/jace-ty",//used for comments//if commented, doesnt load
    lastBuildDate: now.toLocaleString('en-CA',{hour12:false}).replace(',',''),
    lastBuildYear: now.getFullYear(),
}