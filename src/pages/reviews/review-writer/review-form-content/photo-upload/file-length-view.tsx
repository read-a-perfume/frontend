import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const FileLengthView = ({
  thumbnailsFiles,
}: {
  thumbnailsFiles: File[] | number[]
}) => {
  const files = thumbnailsFiles.length
  return (
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        top: 400,
        padding: '4px 12px',
        borderRadius: ' 13.5px;',
        width: '49px',
        height: ' 27px',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="body2"> {files}/4</Typography>
    </Box>
  )
}
export default FileLengthView
