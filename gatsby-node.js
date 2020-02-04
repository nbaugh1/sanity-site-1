/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
    const results = await (graphql(`
    {
        allSanityPost {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `));
    
    const posts = results.data.allSanityPost.edges.map(({ node }) => node);
    posts.forEach(post => {
        actions.createPage({
            path: post.slug.current,
            // template : 
            context: {
                slug: post.slug.current
            }
        })
    })
}