import {Typography, styled} from '@mui/material'
import {ReactNode} from 'react'

interface proptype {
  children?: ReactNode
  title: string
}

const EditTitle = ({children, title}: proptype) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  )
}

export default EditTitle

const Title = styled(Typography)(({theme}) => ({
  color: '#000',
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 600,
  marginBottom: '25px',
}))
