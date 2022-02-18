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

