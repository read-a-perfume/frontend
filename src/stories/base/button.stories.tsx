import MuiButton from '@components/base/mui-button'
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof MuiButton> = {
  component: MuiButton,
  title: 'Base/Button',
}

export default meta
type Story = StoryObj<typeof MuiButton>
export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'contained',
    type: 'primary',
  },
}

export const Dark = {
  args: {
    title: 'dark',
    variant: 'contained',
    type: 'dark',
  },
}
export const Grey = {
  args: {
    title: 'Grey',
    variant: 'contained',
    type: 'grey',
  },
}

export const Outlined = {
  args: {
    title: 'Outlined',
    variant: 'outlined',
    type: '100',
  },
}

export const Text = {
  args: {
    title: 'Text',
    variant: 'text',
    type: 'light',
  },
}
