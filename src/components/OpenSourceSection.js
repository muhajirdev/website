import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { Tagline } from './Text'
import List from './List'

const Container = styled('div')`
  ${tw``};
`

const OpenSourceSection = ({ data }) => (
  <Container id="open-source">
    <Tagline>Open Sources</Tagline>
    {data.map(item => (
      <List
        key={item.link}
        to={item.link}
        name={item.title}
        meta={item.techs.join(', ')}
      />
    ))}
  </Container>
)

export default () => (
  <StaticQuery
    query={graphql`
      {
        allOpenSourceYaml {
          edges {
            node {
              id
              title
              link
              techs
            }
          }
        }
      }
    `}
    render={data => (
      <OpenSourceSection
        data={data.allOpenSourceYaml.edges.map(({ node }) => node)}
      />
    )}
  />
)
