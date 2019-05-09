import * as S from 'monad-ui'
import Section from '../components/Section'
import { Tagline } from '../components/Text'
import ContactForm from '../components/contact-form'
import twitterIcon from '../images/twitter.svg'
import emailIcon from '../images/email.svg'
import { margin } from '../../tailwind'

const column = [S.w('100%'), S.mq('md')(S.w('50%'))]
const contactItemStyle = [
  S.link,
  S.centerY,
  S.rounded,
  S.inlineFlex,
  S.py(8),
  S.px(16),
  S.border(`2px solid #000`),
  S.mb(16)
]

export const ContactItem = ({ title, icon, detail, url }) => (
  <div>
    <div css={contactItemStyle}>
      <img alt="twitter icon" src={icon} css={[S.mb(0), S.w(48), S.mr(8)]} />
      <div>
        <h4 css={S.mb(4)}>{title}</h4>
        <a css={S.color('inherit')} href={url}>
          <h6 css={[S.mb(0), S.fw(500)]}>{detail}</h6>
        </a>
      </div>
    </div>
  </div>
)

const getTwitterDMUrl = id =>
  `https://twitter.com/messages/compose?recipient_id=${id}`
const TWITTER_ID = '1102551936060932098'
const twitterDMUrl = getTwitterDMUrl(TWITTER_ID)

export const contacts = [
  {
    title: '@muhajirdev',
    url: twitterDMUrl,
    icon: twitterIcon,
    detail: 'Send me a DM',
  },
  {
    title: 'muhammad@muhajir.dev',
    url: 'mailto: muhammad@muhajir.dev',
    icon: emailIcon,
    detail: 'Shoot me an mail',
  },
]

const Contact = () => (
  <Section>
    <Tagline>Contact</Tagline>
    <div css={[S.flex, S.flexWrap(), S.my(margin[10])]}>
      <div css={[column]}>
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
