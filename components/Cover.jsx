import React from 'react'
import { Centering } from './Centering'
import colors from '../theme/colors'

export const Cover = ({ url }) => (
  <>
    <div style={{
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: colors.black,
    }} />

    <Centering>

      <div style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        backgroundImage: `url("${url}")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />

    </Centering>
  </>
)