import React from 'react'
import styled from 'react-emotion'

import Layout from '../components/layout'
import { Title, Tagline } from '../components/Text'
import OpenSourceSection from '../components/OpenSourceSection'

const Section = styled.section`
  ${tw`py-32 m-auto px-8 max-w-xl`};
`
const TitleSection = () => (
  <Section>
    <Title>Muhammad Muhajir. Front-end & mobile developer</Title>
    <Tagline>
      Developing web & app: fast, accessible, and easy to navigate.
    </Tagline>
  </Section>
)

const IndexPage = () => (
  <Layout>
    <TitleSection />
    <Section>
      <OpenSourceSection />
    </Section>
  </Layout>
)

export default IndexPage
