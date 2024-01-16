import {Typography, styled} from '@mui/material'
import {IfCategory} from 'types/perfume.interface'
import CustomCheck from './custom-check'
import useCategoryForms from './hook/use-category-forms'
import {useWatch} from 'react-hook-form'
interface proptype {
  data: IfCategory
}

const TypeCard = ({data}: proptype) => {
  const id = data.id
  const {category, getValues, control} = useCategoryForms(id)

  const flag = useWatch({
    control: control,
    name: String(id) as never,
  }) as boolean

  const ableClick = (): boolean => {
    const allData = getValues()
    const cnt = Object.values(allData).filter(e => e === true).length
    if (cnt >= 3) {
      return false
    }
    return true
  }

  const handleChange = () => {
    //category.field.onChange(!e.target.checked)
    if (!flag && !ableClick()) {
      alert('타입은 최대 3개까지 설정 가능합니다.')
    } else {
      category.field.onChange(!flag)
    }
  }

  return (
    <>
      <input
        type="checkbox"
        hidden
        {...category.field}
        id={String(id)}
        name={category.field.name}
        onChange={handleChange}
      />
      <Container htmlFor={String(id)}>
        <TypeImage src={data.thumbnail} alt={data.name} />
        {<CustomCheck flag={flag} />}
        <Title>{data.name}</Title>
      </Container>
    </>
  )
}

export default TypeCard

const Container = styled('label')(() => ({
  width: '128.1px',
  height: '153.7px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  position: 'relative',
  backgroundColor: '#bbb',
  zIndex: 0,
  cursor: 'pointer',
}))

const TypeImage = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  // filter: 'brightness(0.5)',
}))

const Title = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.h4.fontSize,
  fontFamily: 'Arita buri',
  color: '#fff',
  zIndex: 1,
}))
