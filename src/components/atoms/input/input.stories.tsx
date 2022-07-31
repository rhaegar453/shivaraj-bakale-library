import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Input from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template = (args:any) => {
  return <Input {...args} />;
};

export const withDefault = Template.bind({});
