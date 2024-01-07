import EditTitle from '../../base/edit-title'
import useEditProfileForms from '../../hook/use-edit-profile-forms'
import SexRadio from './sex-radio'
import SaveButton from '@pages/account/base/save-button'
import FormLabel from '@pages/account/base/form-label'
import {Input} from '@pages/account/base/input'




const EditInfo = () => {
  

  const {bio} = useEditProfileForms()


  return (
    <>
      <EditTitle title="내 정보"/>
        <FormLabel>내 소개</FormLabel>
        <Input width="717px" placeholder="내 소개" {...bio.field} sx={{marginBottom:'30px'}}/>
        <FormLabel>성별</FormLabel>
        <SexRadio />
      
      <SaveButton>저장하기</SaveButton>
    </>
  )
}

export default EditInfo
