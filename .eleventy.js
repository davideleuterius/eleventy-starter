const { DateTime }  = require('luxon');
const yaml = require('js-yaml');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets'});
    
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });
  
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents));

  return {
      dir: {
          input: 'src/',
          output: '_site',
          data: 'data',
          includes: 'includes',
          layouts: 'layouts'
      },
      templateFormats: ['html', 'njk'],
      htmlTemplateEngine: 'njk',
      passthroughFileCopy: true
  };
};
