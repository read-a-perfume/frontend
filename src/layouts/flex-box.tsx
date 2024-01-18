import Box from '@mui/material/Box'

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
  return (
    <Box
      role={'presentation'}
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
        ...style,
      }}
    >
      {children}
    </Box>
  )
}

export default FlexBox
