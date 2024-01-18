import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import {ReactNode} from 'react'

interface proptype {
  icon: ReactNode
  title: string
  value: number
}

const FeedFooterContent = ({icon, title, value}: proptype) => {
  return (
    <Container>
      {icon}
      <FooterText>{`${title} ${value}개`}</FooterText>
    </Container>
  )
}

export default FeedFooterContent

const FooterText = styled(Typography)(({theme}) => ({
  fontWeight: 500,
  color: theme.palette.grey['700'],
  marginLeft: '5.5px',
  fontSize: theme.typography.body4.fontSize,
}))

const Container = styled(Box)(()=>({
  display: 'flex', alignItems: 'center', width:'120px',height: '40px',
}))
