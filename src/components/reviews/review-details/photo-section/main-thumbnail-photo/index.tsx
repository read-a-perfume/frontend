import {Box} from '@mui/material'

interface IfProps {
  thumbnail: string[]
}

const MainThumbnailPhoto = ({thumbnail}: IfProps) => {
  console.log(thumbnail, '썸네일')
  return (
    <Box
      component="figure"
      sx={{
        display: 'block',
        margin: 0,
        width: '100%',
        height: '415px',
        borderRadius: '20px',
        overflow: 'hidden',
        border: 'solid 1px #dbdbdb',
        backgroundImage: `url(${thumbnail && thumbnail[0]})`,
      }}
    />
  )
}

export default MainThumbnailPhoto
