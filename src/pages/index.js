import React from 'react'
import styled from 'react-emotion'

import { Title, Tagline } from '../components/Text'
import OpenSourceSection from '../components/OpenSourceSection'
import Section from '../components/Section'

const Container = styled.div`
  ${tw``};
`
const TitleSection = () => (
  <>
    <Title>Muhammad Muhajir. React / React Native / NodeJS</Title>
    <Tagline>Fullstack Javascript Developer</Tagline>
  </>
)

const IndexPage = () => (
  <Container>
    <Section dark>
      <TitleSection />
    </Section>
    <Section>
      <OpenSourceSection />
    </Section>
  </Container>
)

export default IndexPage
