import React from 'react'
import Section from '../components/Section'
import { Tagline } from '../components/Text'
import Link from '../components/Link'

const Contact = () => (
  <Section>
    <Tagline>Contact</Tagline>
    <div>
      <Link to="mailto:contact@muhajirframe.com">contact@muhajirframe.com</Link>
    </div>
  </Section>
)

export default Contact
