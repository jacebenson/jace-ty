let now = new Date();

module.exports = {
    environment: process.env.ELEVENTY_ENV,
    menu: [
        {
            link: "https://github.com/jacebenson/jace-ty/",
            text: "GitHub",
        },
        {
            link: "/post",
            text: "Posts",
        },
        {
            link: "/talk",
            text: "Talks",
        },
        {
            link: "/resources",
            text: "Resources",
        },
    ],
    twitter: "jace-ty",
    github: "https://github.com/jace-ty",
    linkedin: "https://linkedin.com/in/jace-ty",
    baseURL: "https://jace-ty.netlify.app",
    title: "Jace-ty",
    patreon: {
        footerMessage: "Become a Patron and you'll get access to my posts in progress, polls, thoughts and other things I want to share.  A monthly happy hour with me and access to my PDI.",
        link: "https://www.patreon.com/bePatron?u=23597006",
        text: "Become a Patron!",
        active: true
    },
    description: "An 11ty Starter for your site featuring RSS, Search, and Comments",
    subtitle: "This is a subtitle about your amazing 11ty site.",
    author: "Your Name",//used all over
    email: "youremailforrss@example.com",//used specificly for rss feed
    utterancesRepo: "jacebenson/jace-ty",//used for comments//if commented, doesnt load
    lastBuildDate: now.toLocaleString('en-CA',{hour12:false}).replace(',',''),
    lastBuildYear: now.getFullYear()
}