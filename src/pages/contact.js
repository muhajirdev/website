import Section from '../components/Section'
import { Tagline } from '../components/Text'
import ContactForm from '../components/contact-form'
import * as S from '../styles'
import { margin } from '../../tailwind'
import twitterIcon from '../images/twitter.svg'

const column = [S.w('100%'), S.mq('md')(S.w('50%'))]
const contactItemStyle = [
  S.link,
  S.my(margin[8]),
  S.centerY,
  S.rounded,
  S.inlineFlex,
  S.py(8),
  S.px(16),
  S.border(`2px solid #000`),
]

export const ContactItem = ({ title, icon, detail, url }) => (
  <a href={url} css={contactItemStyle}>
    <img alt="twitter icon" src={icon} css={[S.mb(0), S.w(48), S.mr(8)]} />
    <div>
      <h3 css={S.mb(4)}>{title}</h3>
      <h6 css={[S.mb(0), S.fw(500)]}>{detail}</h6>
    </div>
  </a>
)

const getTwitterDMUrl = id =>
  `https://twitter.com/messages/compose?recipient_id=${id}`
const TWITTER_ID = '1102551936060932098'
const twitterDMUrl = getTwitterDMUrl(TWITTER_ID)

export const contacts = [
  {
    title: 'Twitter',
    url: twitterDMUrl,
    icon: twitterIcon,
    detail: 'Send me a DM',
  },
]

const Contact = () => (
  <Section>
    <Tagline>Contact</Tagline>
    <div css={S.flexWrap()}>
      <div css={column}>
        {contacts.map(({ title, url, icon, detail }) => (
          <ContactItem
            key={title}
            title={title}
            url={url}
            icon={icon}
            detail={detail}
          />
        ))}
      </div>
      <div css={column}>
        <ContactForm />
      </div>
    </div>
  </Section>
)

export default Contact
