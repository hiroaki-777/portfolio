module.exports = {
  layout: "base.njk",
  pagination: { data: "categories", size: 1, alias: "cat" },
  permalink: (data) => `/works/${data.cat.slug}/index.html`,
  eleventyComputed: {
    title: (data) => `${data.cat.name} — Hiroaki Sasaki`,
    headStyle: (data) => data.cat.headStyle,
  },
};
