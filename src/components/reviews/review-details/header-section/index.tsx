import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import {styled} from '@mui/material'
import {IfPerfume} from 'types/perfume.interface'

interface IfProps {
  perfumeDetails: IfPerfume
  autherName: string
}

const HeaderSection = ({perfumeDetails, autherName}: IfProps) => {
  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <SubTitle variant="body3">위클리 향수로 추천</SubTitle>
        <Box sx={{display: 'flex', gap: '5px', alignItems: 'center'}}>
          <UserAvatar aria-label="유저이미지" />
          <Typography variant="body4" sx={{fontWeight: '600', color: '#000'}}>
            {autherName}
          </Typography>
        </Box>
      </Box>
      <Box sx={{display: 'flex', gap: '5px'}}>
        <Typography
          variant="body1"
          component="h3"
          color={theme => theme.palette.secondary.main}
          fontWeight={600}
        >
          [{perfumeDetails && perfumeDetails.brandName}]
          {perfumeDetails && perfumeDetails.name}
        </Typography>
        <Typography variant="body3">
          {perfumeDetails && perfumeDetails.categoryName}
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
const UserAvatar = styled(Avatar)({
  bgcolor: 'gray',
  width: '24px',
  height: '24px',
})
