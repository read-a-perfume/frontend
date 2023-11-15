import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import {useState} from 'react'

interface Props {
  index: number
}

const FormAgreementModal: React.FC<Props> = ({index}) => {
  const [open, setOpen] = useState(false)
  console.log(index)
  return (
    <>
      <ArrowForwardIosIcon
        type="button"
        onClick={() => setOpen(true)}
        sx={{
          position: 'absolute',
          right: 0,
          fontSize: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#707070',
        }}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Set backup account</DialogTitle>
      </Dialog>
    </>
  )
}
export default FormAgreementModal
