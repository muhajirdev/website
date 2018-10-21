import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import { Tagline, Title, Subtitle, Paragraph } from './Text'

const Container = styled.div`
  ${tw``};
`

const OpenSourceSection = () => (
  <Container>
    <Title>Open Source</Title>
    <Tagline>a</Tagline>
    <Subtitle>Tech: React, GatsbyJS, Tailwind CSS</Subtitle>
    <Paragraph>
      All you need for your (open source) project documentation.
    </Paragraph>
    <Tagline>Gatsby plugin test hot reload Tailwind</Tagline>
    <Paragraph>Plug Tailwind CSS to your Gatsby website</Paragraph>
  </Container>
)

export default OpenSourceSection
