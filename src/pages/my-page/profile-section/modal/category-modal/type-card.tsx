import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import {IfCategory} from 'types/perfume.interface'
import useCategoryForms from './hook/use-category-forms'
interface proptype {
  data: IfCategory
}

const TypeCard = ({data}: proptype) => {
  const id = data.id
  const {category, getValues} = useCategoryForms(id)
  const ableClick = (): boolean => {
    const allData = getValues()
    const cnt = Object.values(allData).filter(e => e === true).length
    if (cnt >= 3) {
      return false
    }
    return true
  }

  const handleChange = e => {
    if (e.target.checked && !ableClick()) {
      alert('타입은 최대 3개까지 설정 가능합니다.')
    } else {
      category.field.onChange(e.target.checked)
    }
  }

  return (
    <>
      <Container htmlFor={String(id)}>
        <TypeImage src={data.thumbnail} alt={data.name} />

        <CheckBox
          type="checkbox"
          {...category.field}
          id={String(id)}
          name={category.field.name}
          onChange={handleChange}
          checked={category.field.value}
        />

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

const CheckBox = styled('input')(({theme}) => ({
  appearance: 'none',
  cursor: 'pointer',
  backgroundColor: '#fff',
  borderRadius: '50%',
  width: '25px',
  height: '25px',
  fontSize: '25px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  alignSelf: 'flex-end',
  paddingTop: '3px',
  '&:after': {content: '"✓"', color: '#bbb'},
  '&:hover': {
    backgroundColor: '#ddd',
    '&:after': {content: '"✓"', color: '#fff'},
  },
  '&:checked': {
    backgroundColor: theme.palette.primary.main,
    '&:after': {
      color: '#fff',
      content: '"✓"',
    },
  },
}))
