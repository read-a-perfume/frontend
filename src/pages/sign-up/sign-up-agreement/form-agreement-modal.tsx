import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {Box, DialogContent, DialogContentText, Typography} from '@mui/material'
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
      <Dialog
        open={open}
        className="안녕"
        onClose={() => setOpen(false)}
        sx={{
          '.MuiDialog-container > .MuiPaper-root': {
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            margin: 0,
            paddingTop: '250px',
          },
        }}
      >
        <Box sx={{width: '700px', margin: 'auto'}}>
          <DialogTitle>
            <Typography variant="h1">서비스 이용 약관</Typography>
          </DialogTitle>
          <DialogContent>
            {modals.map(modal => (
              <>
                <Typography variant="body4" sx={{fontWeight: 600}}>
                  {modal.title}
                </Typography>
                <DialogContentText variant="body4">
                  {modal.description}
                </DialogContentText>
              </>
            ))}
          </DialogContent>
        </Box>
      </Dialog>
    </>
  )
}
export default FormAgreementModal

const modals = [
  {
    title: '제 1조',
    description: `이 약관은 화장품 리뷰 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 서비스의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.`,
  },
  {
    title: '제 2조',
    description: `회원가입은 온라인으로 이루어지며, 서비스 이용을 희망하는 이용자는 서비스에서 정한 가입 양식에 개인 정보를 기입하여 회원가입을 신청합니다.
    모든 이용자는 회원가입 시 실명과 실제 정보를 사용해야 하며, 가입 시 제공한 정보는 정확해야 합니다.`,
  },
  {
    title: '제 3조',
    description: `회원가입은 온라인으로 이루어지며, 서비스 이용을 희망하는 이용자는 서비스에서 정한 가입 양식에 개인 정보를 기입하여 회원가입을 신청합니다.

    모든 이용자는 회원가입 시 실명과 실제 정보를 사용해야 하며, 가입 시 제공한 정보는 정확해야 합니다.`,
  },
  {
    title: '제 4조',
    description: `서비스는 이용자의 정보를 보호하기 위해 보안 시스템을 갖추고 있습니다. 이용자의 개인정보는 개인정보보호정책에 따라 보호됩니다.`,
  },
  {
    title: '제 5조',
    description: `서비스는 필요한 경우 약관의 내용을 변경할 수 있으며, 변경된 약관은 서비스 홈페이지에 공지하며, 공지 후 7일 이후부터 효력이 발생합니다.`,
  },
  {
    title: '제 6조',
    description: `서비스는 이용자가 본 약관의 내용에 위반하는 행위를 하는 경우, 사전 통보 없이 서비스 이용을 제한하거나 회원 자격을 상실시킬 수 있습니다.`,
  },
  {
    title: '제 7조',
    description: `서비스는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인해 이용자 또는 제3자가 입은 손해에 대해서는 책임을 지지 않습니다.

    -천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우
    -서비스 제공을 위하여 서비스와 계약을 체결한 제3자의 고의·과실이 있는 경우
    -이용자의 고의·과실로 인하여 서비스 이용에 장애가 있는 경우`,
  },
  {
    title: '제 8조',
    description: `본 약관의 해석 및 서비스 이용과 관련하여 이용자와 서비스 사이에 발생한 분쟁은 대한민국의 법을 적용하여 해결합니다.`,
  },
  {
    title: '제 9조',
    description: `본 약관에 명시되지 않은 사항은 관계 법령 및 서비스가 정한 개별 약관 등의 규정에 따릅니다.`,
  },
  {
    title: '제 10조',
    description: `이 약관은 서비스가 온라인 홈페이지에 게시함으로써 효력이 발생합니다. 이용자는 정기적으로 서비스를 방문하여 약관의 변경사항을 확인하는 책임이 있습니다.`,
  },
]
