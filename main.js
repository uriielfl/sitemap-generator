const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');

const routes = [

];

(async () => {
  const stream = new SitemapStream({ hostname: '' });
  const writableStream = createWriteStream('./public/sitemap.xml');

  routes.forEach(route => {
    stream.write({ url: route, changefreq: 'daily', priority: 0.7 });
  });

  stream.end();

  // Pipe the sitemap streams directly to the writable streams
  stream.pipe(writableStream);
})();