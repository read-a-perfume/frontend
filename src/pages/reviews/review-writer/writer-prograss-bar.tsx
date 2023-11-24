import {List, ListItem, ListItemText, Typography, styled} from '@mui/material'

const category = ['향수 이미지 업로드', '향수 특징 선택', '상세 리뷰 작성']

const WriterProgassBar = ({prograss}: any) => {
  return (
    <header>
      <div>
        <Typography sx={{fontSize: '24px', textAlign: 'center'}}>
          리뷰 작성하기
        </Typography>
        <List sx={{display: 'flex'}}>
          {category.map((value, index) => (
            <ListItem sx={{flexDirection: 'column'}}>
              <Prograss
                sx={{borderColor: `${prograss === index && '#fe7156'}`}}
              >
                <Typography
                  variant="body5"
                  sx={{color: `${prograss === index && 'red'}`}}
                >
                  {index + 1}
                </Typography>
              </Prograss>
              <ListItemText>
                <Typography variant="body5">{value}</Typography>
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
  border: '2px solid gray',
  borderRadius: '50%',
  backgroundColor: '#fff',
  '& span': {
    color: '#fe7156',
  },
})
