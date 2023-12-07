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
   
    type: 'primary',
  },
}

export const Dark = {
  args: {
    title: 'dark',
   
    type: 'dark',
  },
}
export const Grey = {
  args: {
    title: 'Grey',
   
    type: 'grey',
  },
}

export const Outlined = {
  args: {
    title: 'Outlined',
  
    type: '100',
  },
}

export const Text = {
  args: {
    title: 'Text',
   
    type: 'light',
  },
}
