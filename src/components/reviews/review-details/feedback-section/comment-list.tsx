import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'

// interface IfCommentListProps {
//   username: string
//   created: string
//   content: string
// }

const CommentList = ({isOpen}: any) => {
  return (
    <Box>
      <Collapse
        in={isOpen}
        sx={{
          maxHeight: '335.5px',
          overflow: 'scroll',
          background: '#fff',
          boxSizing: 'border-box',
        }}
      >
        <List>
          {dummyComments.map(item => {
            return (
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      <Typography variant="body5">{item.username}</Typography>
                      <Typography variant="body5">{item.created}</Typography>
                    </>
                  }
                  secondary={item.content}
                  sx={{'& p,span': {fontSize: '12px'}}}
                />
              </ListItem>
            )
          })}
        </List>
      </Collapse>
    </Box>
  )
}

export default CommentList

const dummyComments = [
  {
    username: 'user1',
    created: '2023-01-01T12:00:00',
    content: 'This is the first comment.',
  },
  {
    username: 'user2',
    created: '2023-01-02T14:30:00',
    content: 'Nice post! Keep it up.',
  },
  {
    username: 'user3',
    created: '2023-01-03T10:45:00',
    content: 'I have a question about your content.',
  },
  {
    username: 'user4',
    created: '2023-01-04T16:20:00',
    content: 'Great insights! Thank you for sharing.',
  },
  {
    username: 'user5',
    created: '2023-01-05T09:15:00',
    content: 'Looking forward to more updates from you.',
  },
  {
    username: 'user6',
    created: '2023-01-06T11:50:00',
    content: 'Awesome content! 👍',
  },
  {
    username: 'user7',
    created: '2023-01-07T08:30:00',
    content: 'I appreciate your perspective on this topic.',
  },
  {
    username: 'user8',
    created: '2023-01-08T13:40:00',
    content: 'Interesting read. Any recommended resources?',
  },
  {
    username: 'user9',
    created: '2023-01-09T15:55:00',
    content: 'I agree with your points. Well articulated!',
  },
  {
    username: 'user10',
    created: '2023-01-10T17:10:00',
    content: 'Keep up the good work! Excited for more.',
  },
]
