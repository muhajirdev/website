import React, { Component } from 'react'
import { navigateTo } from 'gatsby'
import Section from '../components/Section'
import { Tagline } from '../components/Text'
import { Input, TextArea } from '../components/Input'
import Form from '../components/Form'
import Button from '../components/Button'

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

class Contact extends Component {
  state = {}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render = () => (
    <Section>
      <Tagline>Contact</Tagline>
      <div>
        <Form
          name="contact"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
          />
          <Input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
          />
          <TextArea
            name="message"
            onChange={this.handleChange}
            rows="5"
            placeholder="Message"
          />
          <Button type="submit">Send</Button>
        </Form>
      </div>
    </Section>
  )
}

export default Contact
