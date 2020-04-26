module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");

    return {
        passthroughFileCopy: true,
        mardownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md", "liquid"],
        
        dir: {
            input: "src",

            output: "_site",
            includes: "includes",
            layouts: "includes/_layouts"
        }
    }
}