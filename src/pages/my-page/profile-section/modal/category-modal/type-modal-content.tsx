import {Typography, styled} from '@mui/material'
import {useContext} from 'react'
import {IfCategory} from 'types/perfume.interface'
import {FormCategoryDataType, getDefaultValues} from './util/util'
import {TypeContext} from '../../profile-type'
import {FormProvider, useForm} from 'react-hook-form'
import usePostCategory from './hook/use-post-category'
import CardContainer from './card-container'
import ButtonContainer from './button-container'
/*
const TypeModalContent = () => {

  const {data:myType,setIsOpen} = useContext(TypeContext)

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
*/

interface proptype {
  allType: IfCategory[]
}

const TypeModalContent = ({allType}: proptype) => {
  const {data: curType} = useContext(TypeContext)

  const methods = useForm<FormCategoryDataType>({
    defaultValues: getDefaultValues(allType, curType),
  })

  const {onSubmit} = usePostCategory()

 

  return (
    <>
      <Bar>마이 타입</Bar>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CardContainer data={allType}/>
          <ButtonContainer/>
        </form>
      </FormProvider>
    </>
  )
}

export default TypeModalContent

const Bar = styled(Typography)(({theme}) => ({
  height: '67.4px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: 'solid 1px #101010',
  fontSize: theme.typography.body1.fontSize,
}))


//1.17143
