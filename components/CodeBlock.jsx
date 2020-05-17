import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from 'styled-components'
import { dracula, colors as draculaColors } from '../theme/dracula'
import dimensions from '../theme/dimensions'

const LINE_NUMBERS_COUNTER = 'lineNumbers'

const FileNameBox = styled.p`
  position: absolute;
  transform: translate(-${dimensions.zero}, -${dimensions.xxlarge});
  max-width: 30%;
  padding: ${dimensions.small} ${dimensions.large};
  margin: 0;
  font-size: 0.7em;
  background-color: ${draculaColors.comment};
  border-radius: ${dimensions.small} ${dimensions.zero};
  overflow: hidden;
  text-overflow: ellipsis;
`

const Line = styled.p`
  margin: 0;
  padding: ${dimensions.zero} ${props => (
    props.highlight
      ? (props.showLineNumbers ? dimensions.zero : `calc(${dimensions.xlarge} - ${dimensions.small})`)
      : (props.showLineNumbers ? dimensions.small : dimensions.xlarge)
  )};
  border-left: ${props => props.highlight ? `solid ${draculaColors.pink} ${dimensions.small}` : 'none'};
  background-color: ${props => props.highlight ? draculaColors.selection : draculaColors.background};

  ${props => props.showLineNumbers && `
  &::before {
    counter-increment: ${LINE_NUMBERS_COUNTER};
    content: counter(${LINE_NUMBERS_COUNTER});
    width: 2em;
    display:inline-block;
    padding-right: 0.5em;
    margin-right: 1em;
    text-align: right;
    border-right: solid 1px ${draculaColors.comment};
    color: ${props.highlight ? draculaColors.foreground : draculaColors.comment};
  }
  `}
`

const PreformattedText = styled.pre`
  ${props => props.fileName && `padding-top: ${dimensions.xxlarge};`}
  counter-reset: ${LINE_NUMBERS_COUNTER};
  white-space: nowrap;
  overflow: auto;
  min-height: fit-content;
`

export const CodeBlock = props => {
  const { className: preClassName, children } = props
  const { className: codeClassName, children: code } = children.props
  const [language, ...rest] = codeClassName.replace(/^language-/, '').split(':')
  const [fileName, ...ranges] = rest.join(':').split(',')
  const highlightLines = new Set()

  for (const range of ranges) {
    const match = range.trim().match(/^\[(\d*):(\d*)(:(-?\d+))?\]$/)
    if (!match) continue

    const step = match[4] ? parseInt(match[4], 10) : 1
    if (step === 0) {
      console.error(`step cannot be zero. (${range.trim()}: [start:stop:step])`)
      continue
    }

    const lineCounts = (code.trim().match(/\n/g) | []).length + 1
    const start = match[1] ? parseInt(match[1], 10) : (step > 0 ? 0 : lineCounts - 1)
    const stop = match[2] ? parseInt(match[2], 10) : (step > 0 ? lineCounts - 1 : 0)

    if ((step > 0 && start > stop) || (step < 0 && start < stop)) continue

    for (let i = start; step > 0 ? i < stop : i > step; i += step) {
      highlightLines.add(i)
    }
  }

  const showLineNumbers = !!(Array.isArray(ranges) && ranges.some(query => query.trim() === 'numbers'))

  return (
    <Highlight {...defaultProps} code={code.trim()} language={language} theme={dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <PreformattedText
          className={[preClassName, className]}
          style={style}
          fileName={fileName}
        >
          {fileName.trim() && <FileNameBox> {fileName.trim()} </FileNameBox>}
          {
            tokens.map((line, i) => (
              <Line
                key={i}
                {...getLineProps({ line, key: i })}
                highlight={highlightLines.has(i)}
                showLineNumbers={showLineNumbers}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Line>
            ))
          }
        </PreformattedText>
      )}
    </Highlight>
  )
}
