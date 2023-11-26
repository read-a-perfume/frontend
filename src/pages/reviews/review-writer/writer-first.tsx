import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/HighlightOff'
import {
  Box,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  FormControl,
  styled as muiStyled,
} from '@mui/material'

const WriterFirst = ({
  handleThumbnailDelete,
  handleThumbnailUpload,

  formValues,
}: any) => {
  const ImageLength = ({formValues}: any) => {
    const files = formValues.files.length
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
        <Typography variant="body2"> {files}/5</Typography>
      </Box>
    )
  }

  return (
    <main>
      <FormControl component="fieldset" sx={{width: '100%', margin: 'auto'}}>
        <Box sx={{position: 'relative', margin: 'auto', width: '420px'}}>
          <MainPreview>
            <MainPreviewFileLabel htmlFor="files">
              <Figure
                sx={{
                  backgroundImage: `url(${formValues.files[0]})`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <TextBox>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                      alignItems: 'center',
                    }}
                  >
                    <AddCircleIcon />
                    <Typography
                      variant="h3"
                      fontStyle={{textAlign: 'center', color: '#dbdbdb'}}
                    >
                      리뷰에서 보여줄 <br />
                      사진이나 영상을 추가해주세요.
                    </Typography>
                  </Box>
                </TextBox>
              </Figure>
            </MainPreviewFileLabel>
            {formValues.files[0] && (
              <CustomDeleteButton
                onClick={() => handleThumbnailDelete(formValues.files[0])}
              />
            )}
          </MainPreview>
          <SubPreview>
            <Box>
              <SubPreviewList>
                {[1, 2, 3, 4].map(value => (
                  <>
                    <SubPreviewItem
                      sx={{
                        //프리뷰 이미지
                        backgroundImage: `url(${formValues.files[value]})`,
                      }}
                    >
                      <ListItemIcon
                        sx={{display: 'flex', justifyContent: 'center'}}
                      >
                        <AddCircleIcon />
                      </ListItemIcon>
                      {formValues.files[value] && (
                        <CustomDeleteButton
                          onClick={() =>
                            handleThumbnailDelete(formValues.files[value])
                          }
                        />
                      )}
                    </SubPreviewItem>
                  </>
                ))}
              </SubPreviewList>
            </Box>
          </SubPreview>
          <ImageLength formValues={formValues} />
        </Box>
      </FormControl>
      <MainPreviewFileInput
        type="file"
        name="files"
        id="files"
        accept=".jpg, .png"
        onChange={handleThumbnailUpload}
      />
    </main>
  )
}

export default WriterFirst

const Figure = muiStyled('figure')({
  position: 'relative',
  height: '100%',
})

const TextBox = muiStyled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%,-50%)',
})

const MainPreview = muiStyled(Box)({
  marginTop: '20px',
  height: '420px',
  borderRadius: '20px',
  border: '2px dashed #dbdbdb',
  position: 'relative',
})

const MainPreviewFileInput = muiStyled('input')({
  display: 'none',
})

const MainPreviewFileLabel = muiStyled('label')({
  width: '100%',
  cursor: 'pointer',
})

const SubPreview = muiStyled(Box)({
  marginTop: '14px',
})

const SubPreviewList = muiStyled(List)({
  display: 'flex',
  justifyContent: 'space-between',
})

const SubPreviewItem = muiStyled(ListItem)({
  position: 'relative',
  width: '96px',
  height: '96px',
  borderRadius: '10px',
  border: ' solid 1px #dbdbdb',
  backgroundColor: '#fff',
  justifyContent: 'center',
  //이미지
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

const CustomDeleteButton = muiStyled(DeleteIcon)({
  position: 'absolute',
  top: -20,
  right: -20,
  border: '1px solid #fff',
  color: '#000;',
})
