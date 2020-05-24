import React from 'react'
import { YouTube } from './YouTube'
import ReactEmbed from 'react-embed'
import styled from 'styled-components'
import dimensions from '../theme/dimensions'

const Container = styled.div`
  max-width: 100%;
  width: ${props => props.width || '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${dimensions.large} ${dimensions.xlarge};

  &>div {
    width: ${props => props.width || '640px'};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const youtubeRegExp = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=(?<v>[\w-]+)(?<query>(&\w+=[^\s&]*)*)$/
const shortYoutubeRegExp = /^https?:\/\/youtu\.be\/(?<v>[\w-]+)(\?(?<query>\w+=[^\s&]*(&\w+=[^\s&]*)*))?$/

export const Embed = props => {
  const match = props.url.match(youtubeRegExp) || props.url.match(shortYoutubeRegExp)
  return match && match.groups && match.groups.v ? (
    <Container>
      <YouTube videoId={match.groups.v} />
    </Container>
  ) : (
    (
      <Container width={props.width}>
        <ReactEmbed {...props} />
      </Container>
    ) || (
      <a href={props.url}> {props.url} </a>
    )
  )
}
