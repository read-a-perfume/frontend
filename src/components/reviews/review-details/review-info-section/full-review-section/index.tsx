import {Box, Typography} from '@mui/material'
import SubTitle from '../../sub-title'

const FullReviewSection = ({description}: {description: string}) => {
  return (
    <Box>
      <SubTitle title="상세 리뷰" />
      <Typography
        variant="body3"
        component="p"
        sx={{height: '203px', maxHeight: '203px'}}
      >
        {description}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        sint vel? Autem repellat laudantium corrupti eius doloribus vero
        tempore. Laudantium at ab excepturi debitis quaerat, atque animi
        veritatis culpa aliquid nam dolorum quos molestias optio obcaecati
      </Typography>
    </Box>
  )
}

export default FullReviewSection
