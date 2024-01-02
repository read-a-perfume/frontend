import Loading from "@components/base/loading"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: 'Base/Loading',
}

export default meta
type Story = StoryObj<typeof Loading>

export const Example:Story = {
    args:{
        width: '1200px',
        height: '500px',
    }
}