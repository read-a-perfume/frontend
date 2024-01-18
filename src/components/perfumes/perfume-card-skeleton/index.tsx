import FlexBox from '@layouts/flex-box'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const PerfumeSkeleton = ({skeletons}: any) => {
  return (
    <FlexBox gap="24px" style={{flexWrap: 'wrap', width: '1200px'}}>
      {skeletons.map((_, index) => (
        <Stack spacing={1} key={index}>
          <Skeleton
            sx={{bgcolor: 'grey.200'}}
            variant="rounded"
            width={282}
            height={319}
            key={index}
          />

          <Skeleton variant="rounded" width={282} height={34.5} />
        </Stack>
      ))}
    </FlexBox>
  )
}

export default PerfumeSkeleton
