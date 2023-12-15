import { Typography } from "@mui/material"
import styled from '@emotion/styled'

const Title = styled(Typography)({
  fontSize: 28,
  fontWeight: '700',
})

const Category = styled(Typography)({
  fontSize: 14,
  fontWeight: '600',
  color: '#303030',
})

const Input = styled.input({
  width: 337,
  height: 60,
  borderRadius: 10,
  border: '1px solid #EDEDED',
  backgroundColor: 'white',
  padding: '0px 20px',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 32,
  fontSize: 14,
  fontWeight: '500',
  
})

export { Title, Category, Input }