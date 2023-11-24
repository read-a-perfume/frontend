// import {Box} from '@mui/material'
import {useMemo} from 'react'

interface FlexBoxProps {
  children: any
  direction?: any | undefined
  justifyContent?: string
  alignItems?: string
  gap?: string
  style?: any
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const FlexBox = ({
  children,
  direction = 'row',
  justifyContent,
  alignItems,
  gap,
  style,
  onClick,
}: FlexBoxProps) => {
  const customStyle = useMemo(() => ({...style}), [style])

  return (
    <div
      role={'presentation'}
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
        ...customStyle,
      }}
    >
      {children}
    </div>
  )
}

export default FlexBox
