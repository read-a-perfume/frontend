import {Box, Divider, Typography, styled} from '@mui/material'
import PerfumeCardBottomText from './perfume-card-bottom-text'
import {IfPerfume} from 'types/perfume.interface'
import {useRouter} from '@hooks/use-router'

interface proptype {
  data: IfPerfume
}

const PerfumeCard = ({data}: proptype) => {
  const {routeTo} = useRouter()

  return (
    <Container onClick={() => routeTo(`/perfume/${data.id}`)}>
      <TopContainer>
        <PerfumeImage alt={data.name} src={data.thumbnail} />
        <PerfumeBrand>{data.brandName}</PerfumeBrand>
        <PerfumeTitle>{data.name}</PerfumeTitle>
      </TopContainer>
      <BottomContainer>
        <PerfumeCardBottomText category="강도" value={data.strength} />
        <Divider orientation="vertical" flexItem />
        <PerfumeCardBottomText category="지속력" value={data.duration} />
      </BottomContainer>
    </Container>
  )
}

export default PerfumeCard

const Container = styled(Box)(() => ({
  width: '375px',
  cursor: 'pointer',
}))

const TopContainer = styled(Box)(({theme}) => ({
  width: '100%',
  height: '426px',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.grey[300]}`,
}))

const PerfumeImage = styled('img')(() => ({
  width: '100%',
  height: '341px',
  minHeight: '341px',
}))

const PerfumeBrand = styled(Typography)(({theme}) => ({
  textAlign: 'center',
  fontSize: theme.typography.body3.fontSize,
  color: '#131313',
  padding: '8px 0',
}))

const PerfumeTitle = styled(Typography)(({theme}) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: theme.typography.body1.fontSize,
}))

const BottomContainer = styled(Box)(({theme}) => ({
  width: '100%',
  marginTop: '32px',
  backgroundColor: theme.palette.grey[200],
  padding: '8px 0',
  display: 'flex',
  borderRadius: '10px',
}))
