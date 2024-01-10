import {IfUserTypePost} from 'types/user.interface'
import {FormCategoryDataType} from '../util/util'
import {postMyType} from 'src/store/server/user/mutations'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {useContext} from 'react'
import {TypeContext} from '@pages/my-page/profile-section/profile-type'

const usePostCategory = () => {
  const queryClient = useQueryClient()
  const {setIsOpen} = useContext(TypeContext)

  const myTypeMutation = useMutation((d: IfUserTypePost) => postMyType(d), {
    onSuccess: () => {
      queryClient.invalidateQueries()
      alert('타입 추가 및 변경 성공')
      setIsOpen(false)
    },
    onError: () => {
      alert('타입 추가 및 변경 실패')
      setIsOpen(false)
    },
    useErrorBoundary: false,
  })

  const onSubmit = (data: FormCategoryDataType) => {
    const result = Object.keys(data)
      .filter(e => data[e] === true)
      .map(e => Number(e))
    myTypeMutation.mutate({categoryIds: result})
  }

  return {onSubmit}
}

export default usePostCategory
