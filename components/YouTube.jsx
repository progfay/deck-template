import React, { useState, useCallback } from 'react'
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

const YouTubePlayer = styled.iframe`
  background-color: black;
  width: 640px;
  min-width: 640px;
  height: 360px;
  min-height: 360px;
`

const YouTubePlayButton = styled.div`
  width: 68px;
  height: 48px;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  top: 50%;
  left: 50%;
  z-index: 1;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 68 48"><path fill="%23f00" fill-opacity="0.8" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path d="M 45,24 27,14 27,34" fill="%23fff"></path></svg>');
  filter: grayscale(100%);
  transition: filter .1s cubic-bezier(0, 0, 0.2, 1);
`

const YouTubeThumbnail = styled.div`
  width: 640px;
  min-width: 640px;
  height: 360px;
  min-height: 360px;
  background-color: ${colors.black};
  background-image: ${props => `url(https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #000;
  position: relative;
  display: block;
  contain: content;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: repeat-x;
    height: 60px;
    padding-bottom: 50px;
    width: 100%;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  lite-youtube::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }

  &:hover > ${YouTubePlayButton} {
    filter: none;
  }
`

export const YouTube = ({ url }) => {
  const [isActive, setIsActive] = useState(false)
  const onClick = useCallback(() => { setIsActive(true) }, [])

  const match = url.match(youtubeRegExp) || url.match(shortYoutubeRegExp)
  if (!match || !match.groups || !match.groups.v) {
    return (
      <ErrorBox>
        Invalid YouTube URL: <Log> {url} </Log>
      </ErrorBox>
    )
  }

  return isActive ? (
    <YouTubePlayer
      title='youtube'
      type='text/html' width='640' height='360'
      src={`https://www.youtube-nocookie.com/embed/${match.groups.v}?autoplay=1`}
      frameBorder='0'
    />
  ) : (
    <YouTubeThumbnail videoId={match.groups.v} onClick={onClick}>
      <YouTubePlayButton />
    </YouTubeThumbnail>
  )
}
