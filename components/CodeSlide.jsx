import React from 'react'
import { CodeSurfer } from 'code-surfer'
import { codeSurferFormat as dracula } from '../theme/dracula'

export const CodeSlide = props => (
  <CodeSurfer theme={dracula}>
    {props.children}
  </CodeSurfer>
)
