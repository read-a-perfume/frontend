import MuiButton from '@components/base/mui-button'
import type {Meta, StoryObj} from '@storybook/react'
import BorderColorIcon from '@mui/icons-material/BorderColor'

const meta: Meta<typeof MuiButton> = {
  component: MuiButton,
  title: 'Base/Button',
}

export default meta
type Story = StoryObj<typeof MuiButton>
export const Primary: Story = {
  args: {
    title: '리뷰 업로드',

    type: 'primary',
  },
}

export const Dark = {
  args: {
    title: '로그인',

    type: 'dark',
  },
}
export const Grey = {
  args: {
    title: '확인',

    type: 'grey',
  },
}

export const White = {
  args: {
    title: '내 프로필 편집',
    type: 'white',
  },
}

export const ButtonIcon = {
  args: {
    title: '내 프로필 편집 아이콘',
    type: 'white',
    icon: <BorderColorIcon />,
  },
}
