module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/images');
  eleventyConfig.addLayoutAlias('base', 'pageTemplates/base.njk');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      includes: '_layouts',
      output: 'dist'
    }
  }
}