import Tab from '@mui/material/Tab'
import styled from '@mui/material/styles/styled'
import {IfSearchTab} from '../types'
import {Link} from 'react-router-dom'

const SearchTab = ({to, label, value}: IfSearchTab) => {
  return <CustomTab to={to} label={label} value={value} component={Link} />
}

export default SearchTab

const CustomTab = styled(Tab)({
  borderRadius: '21px',
  background: '#f1f1f5',
}) as typeof Tab
