import React from 'react'

import { Title, Tagline } from '../components/Text'
import OpenSourceSection from '../components/OpenSourceSection'
import Section from '../components/Section'

const TitleSection = () => (
  <>
    <Title>Muhammad Muhajir. React / React Native / NodeJS</Title>
    <Tagline>Fullstack Javascript Developer</Tagline>
  </>
)

const IndexPage = () => (
  <div>
    <Section dark>
      <TitleSection />
    </Section>
    <Section>
      <OpenSourceSection />
    </Section>
  </div>
)

export default IndexPage
