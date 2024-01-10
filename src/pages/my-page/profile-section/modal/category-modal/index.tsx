import {useQuery} from '@tanstack/react-query'
import {categoryQueryKeys} from 'src/react-query-keys/category.keys'
import {fetchAlltype} from 'src/store/server/user/queries'
import TypeModalContent from './type-modal-content'
import ModalContainer from '../modal-container'
import Loading from '@components/base/loading'

const TypeModal = () => {
  const {data: res, isLoading} = useQuery(categoryQueryKeys.category(), () =>
    fetchAlltype(),
  )

  if (isLoading) {
    return (
      <ModalContainer>
        <Loading />
      </ModalContainer>
    )
  }

  return (
    <ModalContainer>
      {res !== undefined && <TypeModalContent allType={res} />}
    </ModalContainer>
  )
}

export default TypeModal
