import {useState} from 'react'

interface UseAgreementProsp {
  age: boolean
  terms: boolean
  privacy: boolean
  marketing: boolean
  notification: boolean
}

const useSignUpAgreement = ({...data}: UseAgreementProsp) => {
  const [checkedItems, setCheckedItems] = useState(data)
  // 전체 체크 여부를 확인할 state

  const handleCheckboxChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    })
  }
  const handleCheckAll = event => {
    setCheckedItems({
      age: event.target.checked,
      terms: event.target.checked,
      privacy: event.target.checked,
      marketing: event.target.checked,
      notification: event.target.checked,
    })
  }

  return {handleCheckAll, handleCheckboxChange, checkedItems}
}

export default useSignUpAgreement
