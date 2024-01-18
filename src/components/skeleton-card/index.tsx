import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

const SkeletonCard = () => {
  return (
    <Card
      sx={{
        width: '384px',
        height: '315px',
        padding: '0 18px',
        borderRadius: '12px',
        boxShadow: 'none',
        border: '0.7px solid #ededed',
        cursor: 'pointer',
      }}
    >
      <CardHeader
        sx={{
          paddingLeft: '0px',
          '& .MuiCardHeader-avatar': {marginRight: '12px'},
        }}
        avatar={
          <Skeleton variant="circular" sx={{marginRight: '11px'}}>
            <Avatar
              sx={{
                bgcolor: 'gray',
                width: '24px',
                height: '24px',
              }}
              aria-label="로딩중"
            />
          </Skeleton>
        }
        title={
          <Skeleton width="72px" height="24px">
            <Typography variant="body4">.</Typography>
          </Skeleton>
        }
      />

      <Skeleton
        sx={{backgroundColor: '#E7E7E9'}}
        variant="rounded"
        width={348}
        height={138}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 0px',
        }}
      >
        <Skeleton
          variant="rounded"
          width={215}
          height={14}
          sx={{
            marginBottom: '6px',
          }}
        />
        <Skeleton variant="rounded" width={176} height={14} />
      </CardContent>

      <CardActions
        disableSpacing
        sx={{
          borderTop: '1px solid #ededed',
          padding: '13.5px 0px',
        }}
      >
        <Box sx={{display: 'flex', gap: '4px'}}>
          <Skeleton variant="rounded" width={36} height={14} />
          <Skeleton variant="rounded" width={36} height={14} />
          <Skeleton variant="rounded" width={36} height={14} />
        </Box>
      </CardActions>
    </Card>
  )
}

export default SkeletonCard
