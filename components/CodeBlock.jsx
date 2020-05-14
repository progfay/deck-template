import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from 'styled-components'
import { dracula, colors as draculaColors } from '../theme/dracula'
import dimensions from '../theme/dimensions'

const FileNameBox = styled.p`
  position: absolute;
  transform: translate(-${dimensions.xlarge}, -${dimensions.xxlarge});
  max-width: 30%;
  padding: ${dimensions.small} ${dimensions.large};
  margin: 0;
  font-size: 0.7em;
  background-color: ${draculaColors.comment};
  border-radius: ${dimensions.small} ${dimensions.zero};
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CodeBlock = props => {
  const { className: preClassName, children } = props
  const { className: codeClassName, children: code } = children.props
  const [language, ...rest] = codeClassName.replace(/^language-/, '').split(':')
  const fileName = rest.join(':')

  return (
    <Highlight {...defaultProps} code={code.trim()} language={language} theme={dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${preClassName} ${className}`} style={{ ...style, ...(fileName ? { paddingTop: '60px' } : {}) }}>
          {fileName && <FileNameBox> {fileName} </FileNameBox>}
          {
            tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))
          }
        </pre>
      )}
    </Highlight>
  )
}
