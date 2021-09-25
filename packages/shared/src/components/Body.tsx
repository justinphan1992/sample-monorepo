import React, { FC } from 'react'

export type BodyProps = {
  fontSize: number
  fontWeight: number
}

const Body: FC<BodyProps> = ({ fontSize, fontWeight, children }) => {
  return (<p style={{ fontSize, fontWeight }}>{children}</p>)
}

export default Body