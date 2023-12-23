import type {Meta, StoryObj} from '@storybook/react'
import ErrorMessage from '@components/base/error-message'

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
  title: 'Base/ErrorMessage',
}

export default meta

type Story = StoryObj<typeof ErrorMessage>

export const Example: Story = {
  args: {
    errorMessage: '최소 20자는 작성해주세요',
  },
}
