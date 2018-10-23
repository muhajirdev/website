import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import { Tagline, Title, Subtitle } from './Text'
import Link from './Link'

const Container = styled.div`
  ${tw``};
`

const OpenSourceSection = ({ data }) => (
  <Container>
    <Tagline> Sources</Tagline>
    {data.map(item => (
      <div key={item.id}>
        <Link to={item.link}>
          <Title>{item.title}</Title>
          <Subtitle>
            Techs:
            {item.techs.map(tech => (
              <span key={tech}> {tech} </span>
            ))}
          </Subtitle>
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
