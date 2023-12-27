import {Box, styled} from '@mui/material'

interface proptype {
  current: 'magazine' | 'perfume'
  setCurrent: React.Dispatch<React.SetStateAction<'magazine' | 'perfume'>>
}

const BrandTap = ({current, setCurrent}: proptype) => {
  return (
    <Container>
      <Tab
        flag={current === 'magazine'}
        onClick={() => setCurrent('magazine')}
      >브랜드 매거진</Tab>
      <Tab
        flag={current === 'perfume'}
        onClick={() => setCurrent('perfume')}
      >향수</Tab>
    </Container>
  )
}

export default BrandTap

const Container = styled(Box)(({theme}) => ({
  height: '64px',
  display: 'flex',
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
}))

const Tab = styled(Box)<{flag: boolean}>(({theme, flag}) => ({
  fontFamily: 'AritaBuri !important',
  fontSize: theme.typography.h3.fontSize,
  fontWeight: 600,
  textAlign: 'center',
  width: '172px',
  padding: '20px 0px',
  cursor: flag ? 'default' : 'pointer',
  borderBottom: '1px solid transparent',
  borderBottomColor: flag ? 'black' : 'none',
  transition: 'border-bottom-color 0.7s ease'
}))
