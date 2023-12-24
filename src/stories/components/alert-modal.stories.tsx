import AlertModal from '@components/modal/alert-modal'
import {useArgs} from '@storybook/preview-api'
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof AlertModal> = {
  component: AlertModal,
  title: 'Components/Alert',
}

export default meta

type Story = StoryObj<typeof AlertModal>

export const Example: Story = {
  args: {
    title: '모달 타이틀',
    description: '모텔 텍스트',
    buttonText: '확인',
  },

  render: function Render(args) {
    const [{isOpen = true}, setIsOpen] = useArgs()

    function onChange() {
      setIsOpen({isOpen: !isOpen})
    }

    return <AlertModal {...args} handleClose={onChange} open={isOpen} />
  },
}
