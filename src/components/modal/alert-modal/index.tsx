import MuiButton from '@components/base/mui-button'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

interface IfBaseModalProps {
  title: string
  description: string
  buttonText: string
  open: boolean
  handleClose?: () => void
}

const AlertModal = ({
  title,
  description,
  buttonText,
  open,
  handleClose,
}: IfBaseModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '300px',
          height: ' 164px',
          padding: '24px 16px 20px 16px',
          background: '#fff',
          borderRadius: '10px',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            display: 'block',
          }}
          fontStyle={{textAlign: 'center', fontWeight: '700'}}
        >
          {title}
        </Typography>
        <Typography
          variant="body3"
          sx={{display: 'block', textAlign: 'center', mt: '4px', mb: '24px'}}
        >
          {description}
        </Typography>
        <MuiButton
          type="primary"
          title={buttonText}
          handleClick={handleClose}
        />
      </Box>
    </Modal>
  )
}

export default AlertModal
