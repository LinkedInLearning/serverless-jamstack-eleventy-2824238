module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/images');

  return {
    dir: {
      input: '_site',
      output: 'dist'
    }
  }
}