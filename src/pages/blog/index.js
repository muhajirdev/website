import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'
import Link from '../../components/Link'
import { Tagline } from '../../components/Text'

import Layout from '../../components/layout'
import Section from '../../components/Section'

// const Container = styled.div`
//   ${tw`max-w-md pl-32 py-20`};
// `
const Post = styled.li`
  ${tw`font-bold text-grey-darkest py-2`};
`
const AllPosts = styled.ul`
  ${tw``};
`

const index = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  date
                }
              }
            }
          }
        }
      `}
      render={data => {
        const allPost = data.allMarkdownRemark.edges.map(({ node }) => ({
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          slug: node.fields.slug,
        }))
        return (
          <Section>
            <Tagline>Writings</Tagline>
            <AllPosts>
              {allPost.map(post => (
                <Link to={post.slug} key={post.slug}>
                  <Post>{post.title}</Post>
                </Link>
              ))}
            </AllPosts>
          </Section>
        )
      }}
    />
  </Layout>
)

export default index
