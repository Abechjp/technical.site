const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://ohiro18.github.io/technical.site/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    title:
      "<a href='https://ohiro18.github.io/technical.site/'><img class='img-responsive' src='https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/TechnicalSite_2.png' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
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
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
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
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
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
