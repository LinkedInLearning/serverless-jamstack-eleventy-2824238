module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/images');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      output: 'dist'
    }
  }
}