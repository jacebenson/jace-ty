let site = require("../_data/site.json");
module.exports = function() {
    var returnObj = {
        "layout": `/theme/${site.theme}/layouts/post-single.njk`,
        "tags": "tutorial",
        "imageName": "featured-640.webp",
        "imageWidth": "640",
        "imageThumbnail": "featured-100.webp",
        
        "authors": ["jace"],
        "featured": "false",
        "meta": [],
        "summary": "I am a summary, Set me on the post"
    }
    return returnObj;
}