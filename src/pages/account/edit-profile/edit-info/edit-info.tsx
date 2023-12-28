import EditTitle from '../../base/edit-title'
import {useQuery} from '@tanstack/react-query'
import {fetchCurUser} from '../../queryfn'
import useEditProfileForms from '../../hook/use-edit-profile-forms'
import EditThumbnail from './edit-thumbnail'
import SexRadio from './sex-radio'
import SaveButton from '@pages/account/base/save-button'
import FormLabel from '@pages/account/base/form-label'
import {Input} from '@pages/account/base/input'

const EditInfo = () => {
  const {data: curUser} = useQuery(['curuser'], () => fetchCurUser())

  const {username, bio} = useEditProfileForms()

  if (curUser === undefined) {
    return <></>
  }

  return (
    <>
      <EditThumbnail />
      <EditTitle title="닉네임">
        <FormLabel>닉네임*</FormLabel>
        <Input width="257px" placeholder="닉네임 수정" {...username.field} disabled/>
        <FormLabel>내 소개</FormLabel>
        <Input width="717px" placeholder="내 소개" {...bio.field} />
        <FormLabel>성별</FormLabel>
        <SexRadio />
      </EditTitle>
      <SaveButton>저장하기</SaveButton>
    </>
  )
}

export default EditInfo
