module.exports = function (eleventyConfig) {
  // Pass static assets straight through
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "src/site.js": "site.js" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/uploads": "uploads" });

  // Works collection (data files in src/works/)
  eleventyConfig.addCollection("works", function (api) {
    return api.getFilteredByTag("works");
  });

  // Return works for a category, sorted by `order`
  eleventyConfig.addFilter("worksIn", function (works, slug) {
    return (works || [])
      .filter((w) => w.data.category === slug)
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // Count works in a category
  eleventyConfig.addFilter("countIn", function (works, slug) {
    return (works || []).filter((w) => w.data.category === slug).length;
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
