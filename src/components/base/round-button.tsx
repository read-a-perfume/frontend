import styled from '@mui/material/styles/styled'
import React from 'react'

interface RoundButtonProps {
  width?: string
  text: string
  borderColor?: string
  backgroundColor: string
  disabled?: boolean
  style?: React.CSSProperties
}

const RoundButton: React.FC<RoundButtonProps> = ({
  width = '100%',
  borderColor = 'white',
  disabled = false,
  text,
  backgroundColor,
  style,
}) => {
  return (
    <RoundButtonLayout
      width={width}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      disabled={disabled}
      style={{...style}}
    >
      {text}
    </RoundButtonLayout>
  )
}

const RoundButtonLayout = styled('button')(
  ({
    width,
    borderColor,
    backgroundColor,
  }: {
    width: string
    borderColor: string
    backgroundColor: string
  }) => ({
    width,
    borderColor,
    backgroundColor,
    height: '46px',
    borderRadius: 23,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#A9A9A9',
  }),
)

export default RoundButton
