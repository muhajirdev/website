import { useState } from 'react'
import { navigateTo } from 'gatsby'
import { css } from '@emotion/core'
import Section from '../components/Section'
import { Tagline } from '../components/Text'
import { Input, TextArea } from '../components/Input'
import Button from '../components/Button'
import {
  mq,
  flexCol,
  my,
  w,
  link,
  mb,
  centerY,
  mr,
  fw,
  flexWrap,
  inlineFlex,
  rounded,
  px,
  py,
} from '../styles'
import { margin } from '../../tailwind'
import twitterIcon from '../images/twitter.svg'

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const column = [w('100%'), mq('md')(w('50%'))]
const border = css({ border: '2px solid #000' })

const getTwitterDMUrl = id =>
  `https://twitter.com/messages/compose?recipient_id=${id}`
const TWITTER_ID = '1102551936060932098'
const twitterDMUrl = getTwitterDMUrl(TWITTER_ID)

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
      <div css={flexWrap()}>
        <div css={column}>
          <a
            href={twitterDMUrl}
            css={[
              link,
              my(margin[8]),
              centerY,
              border,
              rounded,
              inlineFlex,
              py(8),
              px(16),
            ]}
          >
            <img
              alt="twitter icon"
              src={twitterIcon}
              css={[mb(0), w(48), mr(8)]}
            />
            <div>
              <h3 css={mb(4)}>Twitter</h3>
              <h6 css={[mb(0), fw(500)]}>Send me a DM</h6>
            </div>
          </a>
        </div>
        <div css={column}>
          <form
            css={[flexCol, my(margin[8]), w('100%')]}
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
        </div>
      </div>
    </Section>
  )
}

export default Contact
