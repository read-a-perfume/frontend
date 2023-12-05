import PageNumberButton from "@components/base/page-number-button";
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof PageNumberButton> = {
    component: PageNumberButton,
    title: 'Base/PageNumberButton',
  }

export default meta;

type Story = StoryObj<typeof PageNumberButton>;

export const Selected:Story = {
    args:{
        number:1,
        active:true,
    }
}

export const Normal:Story = {
    args:{
        number:1,
        active:false,
    }
}