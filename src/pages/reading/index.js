import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Tagline } from '../../components/Text'

import Section from '../../components/Section'
import List from '../../components/List'

const index = () => (
  <StaticQuery
    query={graphql`
      {
        allReadingYaml {
          edges {
            node {
              id
              title
              url
              author
            }
          }
        }
      }
    `}
    render={data => {
      const items = data.allReadingYaml.edges.map(({ node }) => ({
        title: node.title,
        author: node.author,
        url: node.url,
      }))
      return (
        <Section>
          <Tagline>Reading</Tagline>
          <div>
            {items.map(item => (
              <List
                to={item.url}
                key={item.url}
                name={item.title}
                meta={item.author}
              />
            ))}
          </div>
        </Section>
      )
    }}
  />
)

export default index
