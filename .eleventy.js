module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('asset');
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('_redirects');
  eleventyConfig.addPassthroughCopy('robots.txt');

  // Config BrowserSync
  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false
  });
};
