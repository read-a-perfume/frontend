import Nothing from "@components/base/nothing"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Nothing> = {
    component: Nothing,
    title: 'Base/Nothing',
  }
  
  export default meta
  type Story = StoryObj<typeof Nothing>

  export const Example:Story = {
    args:{
        text:'상황에 맞는 문장',
    }
  }