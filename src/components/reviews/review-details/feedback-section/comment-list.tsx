import ClearIcon from '@mui/icons-material/Clear'
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import {useRecoilValue} from 'recoil'
import {UserProfileAtom} from 'src/store/client/auth/atoms'
import {IfReviewCommentBase} from 'types/review.interface'

interface IfCommentListProps {
  isOpen: boolean
  comments: IfReviewCommentBase[] | undefined
  deleteCommnet: any
  id: number
}

const CommentList = ({
  isOpen,
  comments,
  deleteCommnet,
  id,
}: IfCommentListProps) => {
  const user = useRecoilValue(UserProfileAtom)
  console.log(id)
  return (
    <Box>
      <Collapse
        in={isOpen}
        sx={{
          maxHeight: '200.5px',
          overflow: 'scroll',
          background: '#fff',
          boxSizing: 'border-box',
        }}
      >
        <List>
          {comments &&
            comments.length > 0 &&
            comments.map(item => {
              return (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={
                      <>
                        <Typography variant="body5">
                          {item.author.name}
                        </Typography>
                        <Typography variant="body5">
                          {item.createdAt}
                        </Typography>
                      </>
                    }
                    secondary={item.content}
                    sx={{'& p,span': {fontSize: '12px'}}}
                  />
                  {user.username === item.author.name && (
                    <ClearIcon
                      sx={{cursor: 'pointer'}}
                      onClick={() =>
                        deleteCommnet({
                          commentId: id,
                          userId: item.id,
                        })
                      }
                    />
                  )}
                </ListItem>
              )
            })}
          {comments?.length === 0 && (
            <Typography variant="h2">댓글이 없습니다</Typography>
          )}
        </List>
      </Collapse>
    </Box>
  )
}

export default CommentList
