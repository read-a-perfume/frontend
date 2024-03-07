import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import {IfPerfume} from 'types/perfume.interface'

interface IfProps {
  perfumeDetails: IfPerfume
}

const HeaderSection = ({perfumeDetails}: IfProps) => {
  return (
    <Box>
      <Box>
        <SubTitle variant="body3">위클리 향수로 추천</SubTitle>
      </Box>
      <Box sx={{display: 'flex', gap: '5px'}}>
        <Typography
          variant="body1"
          component="h3"
          color={theme => theme.palette.secondary.main}
          fontWeight={600}
        >
          {perfumeDetails && perfumeDetails.name}
        </Typography>
        <Typography variant="body3">
          {perfumeDetails && perfumeDetails.brandName}
        </Typography>
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
