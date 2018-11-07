import React from 'react'
import Section from '../components/Section'
import { Tagline } from '../components/Text'
import Link from '../components/Link'

const NotFoundPage = () => (
  <Section>
    <Tagline>NOT FOUND</Tagline>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>
      Please email me{' '}
      <Link to="mailto:contact@muhajirframe.com">contact@muhajirframe.com</Link>{' '}
    </p>
  </Section>
)

export default NotFoundPage
