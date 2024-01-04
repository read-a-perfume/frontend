import {Avatar, Box, Divider, styled} from '@mui/material'
import EditTitle from '@pages/account/base/edit-title'
import SaveButton from '@pages/account/base/save-button'
import useEditThumbnailForms from '@pages/account/hook/use-edit-thumbnail-forms'
import {useRef} from 'react'
import {useWatch} from 'react-hook-form'
import SettingButton from '@pages/account/base/setting-button'

const EditThumbnail = () => {
  const buttonRef = useRef<HTMLInputElement | null>(null)

  const {thumbnail, control} = useEditThumbnailForms()

  const {field} = thumbnail

  const image = useWatch({control: control, name: 'thumbnail'})
  
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      field.onChange(file)
    }
  }

  return (
    <EditTitle title="프로필 사진">
      <Container>
        <Avatar
          src={image !== null ? URL.createObjectURL(image) : ''}
          sx={{width: '104px', height: '104px'}}
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
      <SaveButton>저장하기</SaveButton>
      <Divider sx={{margin: '44px 0'}} />
    </EditTitle>
  )
}

export default EditThumbnail

const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '27px',
  marginBottom: '48px',
}))

