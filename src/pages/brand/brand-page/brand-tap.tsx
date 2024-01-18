import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const BrandTap = () => {
  return (
    <Container>
      <Tab>향수</Tab>
    </Container>
  )
}

export default BrandTap

const Container = styled(Box)(({theme}) => ({
  height: '64px',
  display: 'flex',
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
  marginBottom: '44px',
}))

const Tab = styled(Box)(({theme}) => ({
  fontFamily: 'Arita buri !important',
  fontSize: theme.typography.h3.fontSize,
  fontWeight: 600,
  textAlign: 'center',
  width: '172px',
  padding: '20px 0px',
  borderBottom: '1px solid black',
}))
