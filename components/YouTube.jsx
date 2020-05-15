import React from 'react'

const youtubeRegExp = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=(?<v>[\w-]+)(?<query>(&\w+=[^\s&]*)*)$/
const shortYoutubeRegExp = /^https?:\/\/youtu\.be\/(?<v>[\w-]+)(\?(?<query>\w+=[^\s&]*(&\w+=[^\s&]*)*))?$/

export const YouTube = ({ url }) => {
  const match = url.match(youtubeRegExp) || url.match(shortYoutubeRegExp)
  if (!match) {
    return (
      null
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
