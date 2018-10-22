import React from 'react'
import styled from 'react-emotion'

import Layout from '../components/layout'
import { Title, Tagline } from '../components/Text'
import OpenSourceSection from '../components/OpenSourceSection'
import Section from '../components/Section'

const Container = styled.div`
  ${tw``};
`
const TitleSection = () => (
  <>
    <Title>Muhammad Muhajir.</Title>
    <Tagline>Front end developer / ReactJS</Tagline>
  </>
)

const IndexPage = () => (
  <Layout>
    <Container>
      <Section dark>
        <TitleSection />
      </Section>
      <Section>
        <OpenSourceSection />
      </Section>
    </Container>
  </Layout>
)

export default IndexPage
