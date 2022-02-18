const settings = {
  "name": "demofrontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Belgium",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ],
            [
              "Sitemap",
              "/sitemap.xml"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://watchrepairco.com/"
        }
      }
    },
    
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

export const server = ({ app }) => {
  app.use(
    get("/sitemap-*.xml", async ctx => {
      const origin = ctx.settings.state.sitemap.orign;
      const frontityUrl = ctx.settings.state.frontity.url;
      // Get the original sitemap from the WordPress site.
      const response = await fetch(`${origin}/${ctx.path}`);
      const body = await response.text();
      // Replace the URLs of WordPress for URLs of Frontity.
      ctx.body = body.replaceAll(origin, frontityUrl);
      // Do not cache this.
      ctx.set("cache-control: no-cache");
    })
  );
};