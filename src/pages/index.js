import React from 'react'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Title = styled.h1`
  ${tw`text-grey-darker text-xl`};
`
const Tagline = styled.h2`
  ${tw`text-grey-darkest text-5xl`};
`
const Section = styled.section`
  ${tw`py-32 m-auto px-8 max-w-xl`};
`
const Description = styled.p`
  ${tw``};
`
const TitleSection = () => (
  <Section>
    <Title>Muhammad Muhajir. Front-end & mobile developer</Title>
    <Tagline>
      Developing web & app: fast, accessible, and easy to navigate.
    </Tagline>
  </Section>
)

const OpenSourceSection = () => (
  <Section>
    <Title>Open Source</Title>
    <Tagline>Gatsbook</Tagline>
    <Description>
      All you need for your (open source) project documentation.
    </Description>
    <Tagline>Gatsby lugin Tailwind</Tagline>
    <Description>Plug Tailwind CSS to your Gatsby website</Description>
  </Section>
)

const IndexPage = () => (
  <Layout>
    <TitleSection />
    <OpenSourceSection />
  </Layout>
)

export default IndexPage
