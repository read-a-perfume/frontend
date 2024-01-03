import {Box, Button, Typography, styled} from '@mui/material'
import ModalContainer from '../modal-container'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {categoryQueryKeys} from 'src/react-query-keys/category.keys'
import TypeCard from './type-card'
import {useEffect, useState} from 'react'
import {IfCategory} from 'types/perfume.interface'
import {initType} from './util/util'
import {IfUserType, IfUserTypePost} from 'types/user.interface'
import {fetchAlltype} from 'src/store/server/user/queries'
import Loading from '@components/base/loading'
import {postMyType} from 'src/store/server/user/mutations'

interface proptype {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  myType: IfUserType[]
}

const TypeModal = ({setIsOpen, myType}: proptype) => {
  const {data: res} = useQuery(categoryQueryKeys.category(), () =>
    fetchAlltype(),
  )

  const [allType, setAllType] = useState<
    (IfCategory & {select: boolean})[] | undefined
  >()

  useEffect(() => {
    const myTypeNameArr = myType.map(e => e.name)
    if (res !== undefined) {
      setAllType(res.map(e => ({...e, select: myTypeNameArr.includes(e.name)})))
    }
  }, [myType, res])

  const queryClient = useQueryClient()

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

  return (
    <ModalContainer>
      {allType !== undefined ? (
        <>
          <Bar>마이 타입</Bar>
          <CardContainer>
            {allType.map(e => (
              <TypeCard
                key={e.id}
                id={e.id}
                allType={allType}
                setAllType={setAllType}
              />
            ))}
          </CardContainer>
          <ButtonContainer>
            <ModalButton
              mark="sub"
              variant="contained"
              onClick={() => initType(allType, setAllType)}
            >
              초기화
            </ModalButton>
            <ModalButton
              variant="contained"
              onClick={() => {
                const typeIdList = allType
                  .filter(e => e.select)
                  .map(ee => ee.id)
                myTypeMutation.mutate({categoryIds: typeIdList})
                
              }}
            >
              확인하기
            </ModalButton>
          </ButtonContainer>
        </>
      ) : (
        <Loading />
      )}
    </ModalContainer>
  )
}

export default TypeModal

const Bar = styled(Typography)(({theme}) => ({
  height: '67.4px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: 'solid 1px #101010',
  fontSize: theme.typography.body1.fontSize,
}))

const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 40.5px 0 40.5px',
  gap: '13.6px',
  marginTop: '33.3px',
}))

const ModalButton = styled(Button)<{mark?: string | undefined}>(
  ({mark, theme}) => ({
    height: '35.8px',
    fontSize: '13px',
    padding: '0 28.6px 0 28.6px',
    borderRadius: '8.5px',
    color: `${mark === 'sub' ? theme.palette.grey[600] : '#fff'}`,
    boxShadow: 'none',
    backgroundColor: `${
      mark === 'sub' ? theme.palette.grey[200] : theme.palette.primary.main
    }`,
    '&:hover': {
      backgroundColor: `${
        mark === 'sub' ? theme.palette.grey[200] : theme.palette.primary.main
      }`,
      boxShadow: 'none',
    },
  }),
)

//1.17143
const CardContainer = styled(Box)(() => ({
  padding: '40.5px 40.5px 0 40.5px',
  display: 'grid',
  gridTemplateColumns: `repeat(3,1fr)`,
  justifyItems: 'center',
  gap: '20.5px 0',
  overflowY: 'scroll',
  maxHeight: '559.4px',
}))
