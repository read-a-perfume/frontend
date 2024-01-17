import {Box, styled} from '@mui/material'
import {bottomData} from './data/data'
import Content from './base/content'

const SectionBottom = () => {
  const data = bottomData
  return (
    <Container>
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

export default SectionBottom

const Container = styled(Box)(() => ({
  padding: '18px 0',
  display: 'flex',
  alignItems: 'center',
  width: '1200px',
}))
