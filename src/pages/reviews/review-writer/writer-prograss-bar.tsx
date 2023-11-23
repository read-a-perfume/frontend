import {List, ListItem, ListItemText, Typography, styled} from '@mui/material'

const WriterProgassBar = () => {
  return (
    <header>
      <div>
        <Typography sx={{fontSize: '24px', textAlign: 'center'}}>
          리뷰 작성하기
        </Typography>
        <List sx={{display: 'flex'}}>
          {[1, 2, 3].map(value => (
            <ListItem sx={{flexDirection: 'column'}}>
              <Prograss>
                <Typography variant="body5">{value}</Typography>
              </Prograss>
              <ListItemText>
                <Typography variant="body5">향수 이미지 업로드</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </header>
  )
}

export default WriterProgassBar

const Prograss = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '32px',
  height: '32px',
  padding: ' 7px 12px 6px',
  border: '2px solid #fe7156',
  borderRadius: '50%',
  backgroundColor: '#fff',
  '& span': {
    color: '#fe7156',
  },
})
