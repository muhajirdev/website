import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'
import { Tagline } from '../components/Text'

import Section from '../components/Section'
import List from '../components/List'

const AllPosts = styled.div`
  ${tw``};
`

const index = () => (
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
                date(formatString: "MMMM Do, YYYY")
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
              <List
                to={post.slug}
                key={post.slug}
                name={post.title}
                meta={post.date}
              />
            ))}
          </AllPosts>
        </Section>
      )
    }}
  />
)

export default index
