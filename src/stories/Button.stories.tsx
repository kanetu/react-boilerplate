import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    title: { control: 'text' }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Button"
}