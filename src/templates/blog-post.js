import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'react-emotion'

import Link from '../components/Link'
import Layout from '../components/layout'
import Section from '../components/Section'
import { Tagline, Meta } from '../components/Text'

const FeaturedImg = styled.img`
  ${tw`mx-auto flex`};
`
const Content = styled.div`
  p {
    ${tw`leading-loose text-grey-darkest max-w-md mx-auto`};
  }
  img {
    ${tw`max-w-md mx-auto block`};
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = post.excerpt
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      />
      <Section small>
        <Tagline>{post.frontmatter.title}</Tagline>
        <Meta>{post.frontmatter.date}</Meta>
      </Section>
      <FeaturedImg src="https://cdn-images-1.medium.com/max/2000/1*9EYY227bsAyra10tzPGJRA.jpeg" />
      <Section small>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />

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
    </Layout>
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
      }
    }
  }
`
