module.exports = 
{
    twitter: "https://twitter.com/jacebenson",
    github: "https://github.com/jace-ty",
    linkedin: "https://linkedin.com/in/jace-ty",
    baseURL: "https://jace-ty.netlify.app",
    title: "Jace-ty",
    
    //patreon: "https://www.patreon.com/bePatron?u=23597006",//if uncommented adds a link to header and footer
    subtitle: "This is a subtitle about your amazing 11ty site.",
    author: "Your Name",//used all over
    email: "youremailforrss@example.com",//used specificly for rss feed
    utterancesRepo: "jacebenson/jace-ty",//used for comments//if commented, doesnt load
    lastBuildDate: (()=>{
        var now = new Date();
        return now.toISOString().split('T')[0]
    })(),
    lastBuildYear: (()=>{
        var now = new Date();
        return now.getFullYear();
    })(),
}