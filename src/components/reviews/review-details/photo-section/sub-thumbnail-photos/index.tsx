import {Box, styled} from '@mui/material'
interface IfProps {
  thumbnail: string[]
}

const SubThumbnailPhotos = ({thumbnail}: IfProps) => {
  return (
    <ViewPhotos
      sx={{display: 'flex', justifyContent: 'space-between', marginTop: '18px'}}
    >
      {[1, 2, 3, 4].map(value => (
        <Photo>
          <Box
            className="name"
            sx={{
              display: 'block',
              margin: 0,
              height: 'inherit',

              border: 'solid 1px #dbdbdb',
              backgroundImage: `url(${thumbnail && thumbnail[value]})`,
            }}
            component="figure"
          />
        </Photo>
      ))}
    </ViewPhotos>
  )
}

export default SubThumbnailPhotos

const ViewPhotos = styled(Box)({
  height: 'inherit',
})
const Photo = styled(Box)({
  width: '90px',
  height: '90px',
  overflow: 'hidden',
  borderRadius: '10px',
})
