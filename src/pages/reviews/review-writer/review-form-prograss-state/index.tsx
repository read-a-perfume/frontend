import {List, ListItem, ListItemText, Typography, styled} from '@mui/material'

const category = ['향수 이미지 업로드', '향수 특징 선택', '상세 리뷰 작성']

const ReviewFormProgassState = ({prograss}: any) => {
  return (
    <header>
      <div>
        <Typography
          variant="h2"
          sx={{textAlign: 'center', fontFamily: 'AritaBuri'}}
        >
          리뷰 작성하기
        </Typography>
        <List sx={{display: 'flex'}}>
          {category.map((value, index) => (
            <ListItem
              sx={{
                flexDirection: 'column',
              }}
            >
              <Prograss
                sx={{
                  position: 'relative',
                  borderColor: `${prograss === index && '#fe7156'}`,
                  backgroundColor: `${prograss > index && '#fe7156'} `,

                  '&::before': {
                    display: `${index === 0 && 'none'}`,
                    content: '""',
                    position: 'absolute',
                    top: '12px',
                    right: '30px',
                    width: '108px',
                    height: '2px',
                    backgroundColor: `${
                      prograss >= index ? '#fe7156' : '#dbdbdb '
                    } `,
                  },
                }}
              >
                <Typography
                  variant="body5"
                  fontStyle={{
                    color: `${prograss === index ? '#fe7156' : '#DBDBDB'}`,
                  }}
                >
                  {index + 1}
                </Typography>
              </Prograss>
              <ListItemText>
                <Typography
                  variant="body5"
                  fontStyle={{
                    color: `${prograss === index ? '#fe7156' : '#a9a9a9'}`,
                  }}
                >
                  {value}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </header>
  )
}

export default ReviewFormProgassState

const Prograss = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '32px',
  height: '32px',
  padding: ' 7px 12px 6px',
  border: '2px solid gray',
  borderRadius: '50%',
  backgroundColor: '#fff',
  borderColor: '#DBDBDB',
})
