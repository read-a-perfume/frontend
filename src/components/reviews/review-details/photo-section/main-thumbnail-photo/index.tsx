import {Box} from '@mui/material'

interface IfProps {
  thumbnail: string[]
}

const MainThumbnailPhoto = ({thumbnail}: IfProps) => {
  return (
    <Box
      component="figure"
      sx={{
        display: 'block',
        margin: 0,
        width: '486px',
        height: '486px',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundImage: `url(${thumbnail[0]})`,
      }}
    />
  )
}

export default MainThumbnailPhoto
