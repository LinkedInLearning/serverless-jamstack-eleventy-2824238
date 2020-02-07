const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/images');
  eleventyConfig.addPassthroughCopy('./_site/css');
  eleventyConfig.addLayoutAlias('base', 'pageTemplates/base.njk');
  eleventyConfig.addLayoutAlias('page', 'pageTemplates/page.njk');
  eleventyConfig.addLayoutAlias('page-hero', 'pageTemplates/page-hero.njk');
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents))

  eleventyConfig.addShortcode('clientTag', function(name) {
    return `<a class="badge badge-secondary mr-2" href="/clients/${name}">${name}</a>`
  })

  eleventyConfig.addPairedShortcode('pairedClient', function(data, name) {
    return `${data} <a class="badge badge-secondary" href="/clients/${name}">${name}</a>`
  })

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist'
    }
  }
}