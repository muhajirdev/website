import { useState } from 'react'
import { navigate } from 'gatsby'
import * as S from 'monad-ui'
import { Input, TextArea } from './Input'
import Button from './Button'

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const ContactForm = () => {
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
      .then(() => navigate('/thanks'))
      .catch(error => alert(error))
  }

  return (
    <form
      css={[S.flex, S.flexCol, S.w('100%')]}
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
    </form>
  )
}

export default ContactForm
