import React from 'react'
import Section from '../components/Section'
import { Tagline } from '../components/Text'
import { Input, TextArea } from '../components/Input'
import Form from '../components/Form'
import Button from '../components/Button'

const Contact = () => (
  <Section>
    <Tagline>Contact</Tagline>
    <div>
      <Form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="Email" />
        <TextArea name="message" id="" rows="5" placeholder="Message" />
        <Button type="submit">Send</Button>
      </Form>
    </div>
  </Section>
)

export default Contact
