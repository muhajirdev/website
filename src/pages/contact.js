import { useState } from 'react'
import { navigateTo } from 'gatsby'
import Section from '../components/Section'
import { Tagline } from '../components/Text'
import { Input, TextArea } from '../components/Input'
import Form from '../components/Form'
import Button from '../components/Button'
import { flex, width } from '../styles'

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        name,
        email,
        message,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <Section>
      <Tagline>Contact</Tagline>
      <div css={flex}>
        <div css={width('50%')}>
          <Form
            name="contact"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Input
              type="text"
              name="name"
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <Input
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <TextArea
              name="message"
              onChange={e => setMessage(e.target.value)}
              rows="5"
              placeholder="Message"
              required
            />
            <Button type="submit">Send</Button>
          </Form>
        </div>
      </div>
    </Section>
  )
}

export default Contact
