import { FormDataType } from "../type"

const usePostPw = () => {
    const onSubmit = (data: FormDataType) => {
      console.log(data)
    }
  
    return {onSubmit}
  }
  
  export default usePostPw