import React, { FC } from 'react';

export type ButtonProps = {
  color: string,
  backgroundColor: string
}

const Button: FC<ButtonProps> = ({ color, backgroundColor, children  }) => {
  return (
    <button style={{ color, backgroundColor }}>{children}</button>
  )
}

export default Button