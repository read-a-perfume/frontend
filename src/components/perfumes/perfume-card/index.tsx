import {Box, Divider, Typography, styled} from '@mui/material'
import {IfPerfumeCardProps} from '../type'
import {Link} from 'react-router-dom'

import PerfumeCardText from './perfume-card-text'

const PerfumeCard = ({data}: IfPerfumeCardProps) => {
  return (
    <Container>
      <SLink to={`/perfume/${data.id}`}>
        <TopContainer>
          <Box sx={{overflow: 'hidden'}}>
            <PerfumeImage alt={data.name} src={data.thumbnail} width="280px" height="256px" />
          </Box>
          <PerfumeBrand>{data.brandName}</PerfumeBrand>
          <PerfumeTitle>{data.name}</PerfumeTitle>
        </TopContainer>
      </SLink>
      <BottomContainer>
        <PerfumeCardText category="강도" value={data.strength} />
        <Divider orientation="vertical" flexItem />
        <PerfumeCardText category="지속력" value={data.duration} />
      </BottomContainer>
    </Container>
  )
}

export default PerfumeCard

const Container = styled(Box)(() => ({
  width: '282px',
  cursor: 'pointer',
}))

const TopContainer = styled(Box)(({theme}) => ({
  width: '100%',
  height: '320px',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.grey[300]}`,

  '& img': {
    transition: 'transform .45s ease-in-out',
  },
  '&:hover img': {
    transform: ' scale(1.15)',
  },
}))

const PerfumeImage = styled('img')(() => ({
  width: '100%',
  height: '256px',
  minHeight: '256px',
  objectFit: 'contain',
  // objectFit: 'cover',
}))

const PerfumeBrand = styled(Typography)(({theme}) => ({
  textAlign: 'center',
  fontSize: theme.typography.body5.fontSize,
  color: '#131313',
  padding: '6px 0',
}))

const PerfumeTitle = styled(Typography)(({theme}) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: theme.typography.body3.fontSize,
}))

const BottomContainer = styled(Box)(({theme}) => ({
  width: '100%',
  marginTop: '23.5px',
  backgroundColor: theme.palette.grey[200],
  padding: '8px 0',
  display: 'flex',
  borderRadius: '10px',
}))

const SLink = styled(Link)({
  color: '#131313',
})
