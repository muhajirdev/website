import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import { Tagline, Title, Subtitle, Paragraph } from './Text'
import Link from './Link'

const Container = styled.div`
  ${tw``};
`

const OpenSourceSection = ({ data }) => (
  <Container>
    <Title>Open Sources</Title>
    {data.map(item => (
      <div key={item.id}>
        <Link to={item.link}>
          <Tagline>{item.title}</Tagline>
          <Subtitle>
            Techs:
            {item.techs.map(tech => (
              <span key={tech}> {tech} </span>
            ))}
          </Subtitle>
          <Paragraph>{item.description}</Paragraph>
        </Link>
      </div>
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
              description
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
