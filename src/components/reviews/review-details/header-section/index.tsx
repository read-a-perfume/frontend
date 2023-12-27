import {Box, Typography, styled} from '@mui/material'

interface IfProps {
  perfumeId: number
}

const HeaderSection = ({perfumeId}: IfProps) => {
  return (
    <Box>
      <Box>
        <SubTitle variant="body3">위클리 향수로 추천 {perfumeId}</SubTitle>
      </Box>
      <Box sx={{display: 'flex', gap: '5px'}}>
        <Typography
          variant="body1"
          component="h3"
          color={theme => theme.palette.secondary.main}
          fontWeight={600}
        >
          CHANEL 샹스 오 드 빠르펭 35ml
        </Typography>
        <Typography variant="body3">플로랄</Typography>
      </Box>
    </Box>
  )
}

export default HeaderSection

const SubTitle = styled(Typography)({
  backgroundColor: 'black',
  color: '#fff',
  padding: '2px 8px',
  marginTop: '3px',
  borderRadius: '11px;',
})
