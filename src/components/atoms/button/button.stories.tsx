import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      type: 'string',
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'full'],
    },
    bgColor: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>;

const Template:ComponentStory<typeof Button> = (args) => {
  const { label } = args;
  return <Button {...args}>{label}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Hello World',
};
