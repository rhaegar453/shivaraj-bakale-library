import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>;

const Template:ComponentStory<typeof Button> = (args) => {
  const { label } = args;
  return <Button {...args}>{label}</Button>;
};

export const Primary = Template.bind({
  label: 'Primary Button',
});
