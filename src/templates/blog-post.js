import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

import Link from '../components/Link'
import Section from '../components/Section'
import { Tagline, Meta } from '../components/Text'
import { flex, mx, maxW, lh, color } from '../styles'

const p = css([lh(2), color('#3d4852')])
const a = css(color('#22292f'))

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = post.excerpt
  const { previous, next } = pageContext

  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      />
      <Section small>
        <Tagline>{post.frontmatter.title}</Tagline>
        <Meta>{post.frontmatter.date}</Meta>
      </Section>
      {post.frontmatter.featured_image &&
        (post.frontmatter.featured_image.childImageSharp ? (
          <Img sizes={post.frontmatter.featured_image.childImageSharp.sizes} />
        ) : (
          <img
            css={[mx('auto'), flex]}
            alt={post.frontmatter.title}
            src={post.frontmatter.featured_image.publicURL}
          />
        ))}
      <Section small>
        <div
          css={[maxW('40em'), { p, a }]}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Section>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featured_image {
          publicURL
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
