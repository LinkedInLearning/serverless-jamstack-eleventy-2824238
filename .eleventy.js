const yaml = require('js-yaml');
const { DateTime } = require('luxon');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/images');
  eleventyConfig.addPassthroughCopy('./_site/css');
  eleventyConfig.addLayoutAlias('base', 'pageTemplates/base.njk');
  eleventyConfig.addLayoutAlias('page', 'pageTemplates/page.njk');
  eleventyConfig.addLayoutAlias('page-hero', 'pageTemplates/page-hero.njk');
  eleventyConfig.addLayoutAlias('page-post', 'pageTemplates/page-post.njk');
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents))

  eleventyConfig.addShortcode('clientTag', function(name) {
    return `<a class="badge badge-secondary mr-2" href="/clients/${name}">${name}</a>`
  })

  eleventyConfig.addPairedShortcode('pairedClient', function(data, name) {
    return `${data} <a class="badge badge-secondary" href="/clients/${name}">${name}</a>`
  })

  eleventyConfig.addFilter('courseDate', dateObj => {
    return DateTime.fromFormat(dateObj, 'LLL d, yyyy').toFormat('yyyy-LL-dd')
  })

  eleventyConfig.addFilter('simpleDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc'}).toFormat('LLL dd, yyyy')
  })

  eleventyConfig.addCollection('articles', function(collection){
    return collection.getFilteredByGlob('_site/posts/*.md').reverse();
  })

  eleventyConfig.addFilter('limit', (array, qty) => (qty < 0 ? array.slice(qty): array.slice(0, qty)))

  eleventyConfig.addPlugin(eleventyNavigationPlugin)


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