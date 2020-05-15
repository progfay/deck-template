import React from 'react'
import styled from 'styled-components'
import colors from '../theme/colors'
import dimensions from '../theme/dimensions'

const youtubeRegExp = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=(?<v>[\w-]+)(?<query>(&\w+=[^\s&]*)*)$/
const shortYoutubeRegExp = /^https?:\/\/youtu\.be\/(?<v>[\w-]+)(\?(?<query>\w+=[^\s&]*(&\w+=[^\s&]*)*))?$/

const ErrorBox = styled.div`
  width: 640px;
  height: 360px;
  background: ${colors.pink};
  color: ${colors.red};
  border-radius: ${dimensions.small};
  padding: ${dimensions.xlarge};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 0.8em;
`

const Log = styled.code`
  width: 100%;
  margin-top: ${dimensions.medium};
  padding-left: ${dimensions.xlarge};
  word-break: break-all;
  overflow: scroll;
`

export const YouTube = ({ url }) => {
  const match = url.match(youtubeRegExp) || url.match(shortYoutubeRegExp)
  if (!match) {
    return (
      <ErrorBox>
        Invalid YouTube URL: <Log> {url} </Log>
      </ErrorBox>
    )
  }

  return (
    <iframe
      title='youtube'
      type='text/html' width='640' height='360'
      src={`https://www.youtube.com/embed/${match.groups.v}?autoplay=0`}
      frameBorder='0'
    />
  )
}
