import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chip from '.';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {
    label: {
      type: 'string',
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'full'],
    },
  },
} as ComponentMeta<typeof Chip>;

const Template:ComponentStory<typeof Chip> = (args) => {
  const { label } = args;
  return <Chip {...args}>{label}</Chip>;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Hello World',
};
