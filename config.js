const config = {
	"gatsby": {
		"pathPrefix": "/technical.site/",
		"siteUrl": "https://ohiro18.github.io/technical.site/",
		"gaTrackingId": null,
		"trailingSlash": true
	},
	"header": {
		"title": "<a href='https://ohiro18.github.io/technical.site/'><img class='img-responsive' src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/TechnicalSite_2.png' alt='Learn logo' /></a>",
		"githubUrl": "https://github.com/ohiro18/technical.site/",
		"helpUrl": "",
		"tweetText": "",
    "social": `<li>
    <a href="https://twitter.com/sbcloud_pr" target="_blank" rel="noopener">
      <div class="twitterBtn">
        <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/twitter.svg' alt={'Twitter'}/>
      </div>
    </a>
        </li>
        <li>
    <a href="https://www.facebook.com/SBCloud/" target="_blank" rel="noopener">
      <div class="twitterBtn">
        <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/facebook.svg' alt={'facebook'}/>
      </div>
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/channel/UCLI7MTGFxKxjsEUH-oNvy8w" target="_blank" rel="noopener">
      <div class="twitterBtn">
        <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/youtube.svg' alt={'youtube'}/>
      </div>
    </a>
  </li>
  <li>
    <a href="https://www.slideshare.net/sbcloud" target="_blank" rel="noopener">
      <div class="twitterBtn">
        <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/slideshare.svg' alt={'slideshare'}/>
      </div>
    </a>
  </li>
  <li>
  <a href="https://ohiro18.github.io/technical.site/rss.xml" target="_blank" rel="noopener">
    <div class="twitterBtn">
      <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/rss.svg' alt={'RSS'}/>
    </div>
  </a>
</li>`,
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
      enabled: true,
      indexName: 'technical.site.algolia',
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
      "/01-introduction",
      "/02-product_service",
      "/03-advisory",
      "/04-Hands-on-Training-Kubernetes",
      "/05-Hands-on-Training-DataWorks",
      "/06-Hands-on-Training-DataLake Analytics",
      "/07-Hands-on-Training-Elasticsearch",
      "/08-migration",
      "/09-usecase-web-application",
      "/10-usecase-serverless",
      "/11-usecase-kubernetes",
      "/12-usecase-network",
      "/13-usecase-datav",
      "/14-usecase-iot",
      "/15-usecase-data-analytics",
      "/16-NYC-Taxi-tutorial",
      "/17-developer-tools",
      "/18-Terraform"
		],
    	"collapsedNav": [
        "/01-introduction",
        "/02-product_service",
        "/03-advisory",
        "/04-Hands-on-Training-Kubernetes",
        "/05-Hands-on-Training-DataWorks",
        "/06-Hands-on-Training-DataLake Analytics",
        "/07-Hands-on-Training-Elasticsearch",
        "/08-migration",
        "/09-usecase-web-application",
        "/10-usecase-serverless",
        "/11-usecase-kubernetes",
        "/12-usecase-network",
        "/13-usecase-datav",
        "/14-usecase-iot",
        "/15-usecase-data-analytics",
        "/16-NYC-Taxi-tutorial",
        "/17-developer-tools",
        "/18-Terraform"
    	],
		"links":[{ text: 'お問い合わせ', link: 'https://www.sbcloud.co.jp/contact_jp/' },{ text: 'よくある質問はTSSへ', link: 'https://www.sbcloud.co.jp/service/about/ts/' }],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
    "title": 'SBクラウド - AlibabaCloudテクニカルリファレンス',
    "description": 'SBクラウドによるAlibabaCloudテクニカルリファレンスです',
    "ogImage": null,
    "docsLocation": 'https://github.com/ohiro18/technical.site/tree/master/content',
    "favicon": 'https://www.sbcloud.co.jp/icon/favicon',
	},
	"pwa": {
		"enabled": true, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Alibaba Cloud technical.site",
			"short_name": "AliCloud-technical.site",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
