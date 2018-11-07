import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'
import Transition from './Transition'

import Header from './header'
import Footer from './Footer'
import './layout.css'

const Container = styled.div`
  ${tw`h-screen flex flex-col`};
`

const ContentViewport = styled.div`
  ${tw`font-sans flex-1 overflow-y-scroll flex flex-col`};
`
const Content = styled.div`
  ${tw`flex-1`};
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            shortTitle
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.shortTitle}
          meta={[
            // { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'fullstack, javascript, developer, web developer' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container>
          <Header siteTitle={data.site.siteMetadata.shortTitle} />
          <ContentViewport>
            <Content>
              <Transition location={location}>{children}</Transition>
            </Content>
            <Footer />
          </ContentViewport>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
