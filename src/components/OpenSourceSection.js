import React from 'react'
import styled from 'react-emotion'

import { Tagline, Title, Subtitle, Paragraph } from './Text'
import Link from './Link'

const Container = styled.div`
  ${tw``};
`

const OpenSourceSection = () => (
  <Container>
    <Title>Open Sources</Title>
    <Link to="https://github.com/gatsbook/gatsbook">
      <Tagline>Gatsbook</Tagline>
      <Subtitle>Tech: React, GatsbyJS, Tailwind CSS</Subtitle>
      <Paragraph>
        All you need for your (open source) project documentation.
      </Paragraph>
    </Link>
    <Link to="https://github.com/muhajirframe/react-tailwind-emotion-starter">
      <Tagline>React Tailwind Emotion Starter</Tagline>
      <Subtitle>Tech: React, Tailwind CSS</Subtitle>
      <Paragraph>A React starter with Tailwind CSS</Paragraph>
    </Link>
    <Link to="https://github.com/muhajirframe/gatsby-tailwind-emotion-starter">
      <Tagline>Gatsby Tailwind Emotion Starter</Tagline>
      <Subtitle>Tech: React, EmotionJS, Tailwind CSS</Subtitle>
      <Paragraph>A Gatsby Starter with Tailwind CSS + Emotion Js</Paragraph>
    </Link>
    <Link to="https://github.com/muhajirframe/vscode-tailwind-styled-snippets">
      <Tagline>VSCode Tailwind Styled Snippets</Tagline>
      <Subtitle>Tech: VSCode</Subtitle>
      <Paragraph>
        Time saver for tailwindcss + styled components / emotion user who use
        vscode
      </Paragraph>
    </Link>
    <Link to="https://github.com/muhajirframe/vscode-react-emotion">
      <Tagline>VSCode React Emotion</Tagline>
      <Subtitle>Tech: VSCode</Subtitle>
      <Paragraph>Time saver for react-emotion user</Paragraph>
    </Link>
    <Link to="https://github.com/muhajirframe/gatsby-starter-firebase">
      <Tagline>Gatsby Starter Firebase</Tagline>
      <Subtitle>Tech: GatsbyJS, Firebase</Subtitle>
      <Paragraph>
        Gatsby + Firebase = <span role="img">👍</span>
      </Paragraph>
    </Link>
    <Link to="https://github.com/muhajirframe/gatsby-plugin-tailwindcss">
      <Tagline>Gatsby Plugin Tailwind CSS</Tagline>
      <Subtitle>Tech: GatsbyJS, Tailwind CSS</Subtitle>
      <Paragraph>Plug Tailwind CSS to your Gatsby website</Paragraph>
    </Link>
    <Link to="https://github.com/muhajirframe/gatsby-plugin-tailwindcss">
      <Tagline>React Damn Simple Grid</Tagline>
      <Subtitle>Tech: ReactJS</Subtitle>
      <Paragraph>A damn simple grid react component</Paragraph>
    </Link>
  </Container>
)

export default OpenSourceSection
