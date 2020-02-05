import React from "react"
import { Link, graphql } from "gatsby"
import Image from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityPost {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Portfolio</h1>
    <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'space-between', padding: 0 }}>
      {data.allSanityPost.edges.map(({ node: post }) => (
        <li key={post.slug.current} style={{ flex: '1 45%', maxWidth: '45%', margin: '1rem' }}>
      <Link to={post.slug.current}><h2>{ post.title }</h2></Link>
          <Image fluid={ post.mainImage.asset.fluid } ali={ post.title} />
        </li>
      
      ))}
    </ul>
  </Layout>
)

export default IndexPage
