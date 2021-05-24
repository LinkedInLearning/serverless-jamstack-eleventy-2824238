module.exports = function(eleventyConfig) {

      eleventyConfig.addPassthroughCopy('./_site/images');
      eleventyConfig.addPassthroughCopy('./_site/css');
      eleventyConfig.addLayoutAlias('base', 'pageTemplates/base.njk');
      eleventyConfig.addLayoutAlias('page', 'pageTemplates/page.njk');
      eleventyConfig.addLayoutAlias('baseHome', 'pageTemplates/baseHome.njk');
      eleventyConfig.addLayoutAlias('page-1', 'pageTemplates/page-1.njk');
      eleventyConfig.addLayoutAlias('page-2', 'pageTemplates/page-2.njk');
      eleventyConfig.addLayoutAlias('page-3', 'pageTemplates/page-3.njk');
      eleventyConfig.addLayoutAlias('playlist', 'pageTemplates/playlist.njk');

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