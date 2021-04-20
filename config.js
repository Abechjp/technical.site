const config = {
  gatsby: {
    pathPrefix: '/technical.site/',
    siteUrl: 'https://ohiro18.github.io/technical.site/',
    gaTrackingId: 'UA-85904527-10',
    trailingSlash: false,
  },
  header: {
    title:
      "<a href='https://ohiro18.github.io/technical.site/'><img class='img-responsive' src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/TechnicalSite_2.png' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/ohiro18/technical.site/',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/sbcloud_pr" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		        </li>
            <li>
        <a href="https://www.facebook.com/SBCloud/" target="_blank" rel="noopener">
          <div class="twitterBtn">
            <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/facebook.svg' alt={'Twitter'}/>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCLI7MTGFxKxjsEUH-oNvy8w" target="_blank" rel="noopener">
          <div class="twitterBtn">
            <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/youtube.svg' alt={'Twitter'}/>
          </div>
        </a>
      </li>
      <li>
		    <a href="https://www.slideshare.net/sbcloud" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/file-ppt.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'technical.site.algolia',
      algoliaAppId: "30W9NDLS74",
      algoliaSearchKey: "674bf7246af6173941be756c2140d3e4",
      algoliaAdminKey: "b7246a81dcaccffe5979dd4aa9155f91",

    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/product_service',
      '/advisory',
      '/migration',
      '/usecase-web-application',
      '/usecase-data-analytics',
      '/usecase-serverless',
      '/usecase-kubernetes',
      '/usecase-network',
      '/usecase-iot',
      '/usecase-datav',
      '/developer-tools',
      '/developer-terraform',
    ],
    collapsedNav: [
      '/introduction',
      '/product_service',
      '/advisory',
      '/migration',
      '/usecase-web-application',
      '/usecase-data-analytics',
      '/usecase-serverless',
      '/usecase-kubernetes',
      '/usecase-network',
      '/usecase-iot',
      '/usecase-datav',
      '/developer-tools',
      '/developer-terraform',
    ],
    links: [{ text: 'お問い合わせ', link: 'https://www.sbcloud.co.jp/contact_jp/' },{ text: 'よくある質問はTSSへ', link: 'https://www.sbcloud.co.jp/service/about/ts/' }],
    frontline: false,
    ignoreIndex: true,
    //title:
    //  "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'SBクラウド - テクニカルリファレンス',
    description: 'SBクラウドによるテクニカルリファレンスです',
    ogImage: null,
    docsLocation: 'https://github.com/ohiro18/technical.site/tree/master/content',
    favicon: 'https://www.sbcloud.co.jp/icon/favicon',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'SBC technical.site',
      short_name: 'SBC-tech.site',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
