import EditTitle from '../../base/edit-title'
import useEditProfileForms from '../../hook/use-edit-profile-forms'
import EditThumbnail from './edit-thumbnail'
import SexRadio from './sex-radio'
import SaveButton from '@pages/account/base/save-button'
import FormLabel from '@pages/account/base/form-label'
import {Input} from '@pages/account/base/input'




const EditInfo = () => {
  

  const {username, bio} = useEditProfileForms()


  return (
    <>
      <EditThumbnail />
      <EditTitle title="닉네임">
        <FormLabel>닉네임* 어차피 아이디로만 할 것이므로 추후 삭제하는게 좋아보여요 disabled</FormLabel>
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
