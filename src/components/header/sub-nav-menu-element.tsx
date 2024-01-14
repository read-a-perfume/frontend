import {ListItem, Typography, styled} from '@mui/material'
import {Link} from 'react-router-dom'

interface proptype {
  url: string
  title: string
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined
  setAnchorEl: React.Dispatch<React.SetStateAction<null>>
}

const SubNavMenuElement = ({url, title, onClick, setAnchorEl}: proptype) => {
  return (
    <NavListItem>
      <NavLink
        to={url}
        onClick={e => {
          if (onClick !== undefined) {
            onClick(e)
          }

          setAnchorEl(null)
        }}
      >
        <Typography variant="body3">{title}</Typography>
      </NavLink>
    </NavListItem>
  )
}

export default SubNavMenuElement

const NavListItem = styled(ListItem)({
  color: '#000',
  width: '177px;',
  padding: ' 10px 8px;',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#f1f1f5',
  },
})

const NavLink = styled(Link)({
  display: 'block',
  color: '#000',
  width: '100%',
  textAlign: 'center',
})
