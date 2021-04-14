/*
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          metaTitle
          metaDescription
        }
        excerpt(format: PLAIN)
      }
    }
  }
}

*/

/*
query MyQuery($formatString: String = "YYYY/MM/DD") {
  allMarkdownRemark(limit: 1000, sort: {fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: $formatString)
          metaDescription
        }
      }
    }
  }
}
*/

// -------------------------------------------

/*
{
  resolve: `gatsby-plugin-feed`,
  options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map(edge => {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ "content:encoded": edge.node.html }],
            })
          })
        },
        query: `
          {
              allMarkdownRemark(limit: 1000, sort: {fields: frontmatter___date}) {
                  edges {
                  node {
                      frontmatter {
                      title
                      date(formatString: "YYYY/MM/DD")
                      metaDescription
                      }
                  }
                  }
              }
          }
        `,
      },
    ],
  },
},
*/


