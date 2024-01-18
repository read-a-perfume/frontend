//import {useRouter} from '@hooks/use-router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import Content from './base/content'
import {topData} from './data/data'

const SectionTop = () => {
  //const {routeTo} = useRouter()

  const data = topData

  return (
    <Container>
      <Logo>Read a Perfume</Logo>
      {data.map((e, i) => (
        <Content
          key={i}
          $flag={i < data.length - 1}
          onClick={() => {
            /*routeTo(e.url)*/
          }}
        >
          {e.name}
        </Content>
      ))}
    </Container>
  )
}

export default SectionTop

const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '1200px',
  height: '54px',
}))

const Logo = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.h3.fontSize,
  fontFamily: 'Arita buri',
  marginRight: '18px',
  color: 'white',
}))
