import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import {IfReviewDetailResponse} from 'types/review.interface'
interface IfProps {
  dayType?: IfReviewDetailResponse['dayType']
  season: IfReviewDetailResponse['season']
  strength: IfReviewDetailResponse['strength']
  duration: IfReviewDetailResponse['duration']
}
const PerfumeInfoSection = ({season, strength, duration}: IfProps) => {
  const Text = ({title, description}: {title: string; description: string}) => {
    return (
      <>
        <Typography color="#a9a9a9" variant="body3">
          {title}
        </Typography>
        <Typography variant="body3" fontWeight={600}>
          {description}
        </Typography>
      </>
    )
  }

  return (
    <Box sx={{display: 'flex'}}>
      <Stregth>
        <Text title="강도" description={strength} />
      </Stregth>
      <Duration>
        <Text title="지속력" description={duration} />
      </Duration>
      <Season>
        <Text title="계절감" description={season} />
      </Season>
    </Box>
  )
}

export default PerfumeInfoSection

const BasePerfumeInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 0',
  boxSizing: 'border-box',
  background: '#fafafa',
  gap: '12px',
})

const Stregth = styled(BasePerfumeInfo)({
  width: '145px',
})

const Duration = styled(BasePerfumeInfo)({
  width: '188px',
})

const Season = styled(BasePerfumeInfo)({
  width: '148px',
})
