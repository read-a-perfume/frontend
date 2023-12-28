import {Avatar, Box, Button, styled} from '@mui/material'
import useEditProfileForms from '@pages/account/hook/use-edit-profile-forms'
import {useRef} from 'react'
import {useWatch} from 'react-hook-form'

const EditThumbnail = () => {
  const buttonRef = useRef<HTMLInputElement | null>(null)

  const {thumbnail, control} = useEditProfileForms()

  const {field} = thumbnail

  const image = useWatch({control: control, name: 'thumbnail'})

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      field.onChange(file)
    }
  }

  return (
    <Container>
      <Avatar
        src={image !== null ? URL.createObjectURL(image) : ''}
        sx={{width: '104px', height: '104px'}}
        alt="avatar"
      />
      <input
        type="file"
        hidden
        id="thumbnail"
        name={field.name}
        ref={e => {
          field.ref(e)
          buttonRef.current = e
        }}
        onChange={handleUpload}
        accept="image/*"
      />
      <SettingButton
        type="button"
        onClick={() => {
          if (buttonRef.current) {
            buttonRef.current.click()
          }
        }}
      >
        프로필 변경
      </SettingButton>
    </Container>
  )
}

export default EditThumbnail

const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '27px',
  marginBottom: '48px',
}))

const SettingButton = styled(Button)(({theme}) => ({
  width: '88px',
  height: '33px',
  border: 'solid 1.7px #ededed',
  color: 'black',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#eee',
  },
  fontSize: theme.typography.body3.fontSize,
}))
