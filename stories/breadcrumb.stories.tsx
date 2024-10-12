import { ComponentStory, ComponentMeta } from '@storybook/react';
import BreadcrumbDemo from './breadcrumb-demo';

export default {
  title: 'Components/Breadcrumb',
  component: BreadcrumbDemo,
  argTypes: {
    width: {
      control: { type: 'select' },
      options: ['w-1/4', 'w-1/3', 'w-1/2', 'w-2/3', 'w-3/4', 'w-full', 'w-64', 'w-80', 'w-96'], 
    },
    paddingX: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4],
    },
    paddingY: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['rounded-none', 'rounded-sm', 'rounded', 'rounded-md', 'rounded-lg', 'rounded-full'],
    },
    borderColor: {
      control: { type: 'select' },
      options: [
        'border-black',
        'border-gray-300',
        'border-red-500',
        'border-blue-500',
        'border-green-500',
        'border-yellow-500',
        'border-purple-500',
        'border-pink-500',
      ],
    },
    breadcrumbTextColor: {
      control: { type: 'select' },
      options: [
        'text-black',
        'text-gray-500',
        'text-red-500',
        'text-blue-500',
        'text-green-500',
        'text-yellow-500',
        'text-purple-500',
        'text-pink-500',
      ],
    },
    otherTextColor: {
      control: { type: 'select' },
      options: [
        'text-gray-600',
        'text-red-500',
        'text-blue-500',
        'text-green-500',
        'text-yellow-500',
        'text-purple-500',
        'text-pink-500',
      ],
    },
    homeText: {
      control: { type: 'text' },
    },
    componentsText: {
      control: { type: 'text' },
    },
    breadcrumbText: {
      control: { type: 'text' },
    },
    documentationText: {
      control: { type: 'text' },
    },
    themesText: {
      control: { type: 'text' },
    },
    githubText: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof BreadcrumbDemo>;

const Template: ComponentStory<typeof BreadcrumbDemo> = (args) => <BreadcrumbDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 'w-1/3',
  paddingX: 2,
  paddingY: 2,
  borderRadius: 'rounded-lg',
  borderColor: 'border-gray-300',
  breadcrumbTextColor: 'text-black',
  otherTextColor: 'text-gray-600',
  homeText: 'Home',
  componentsText: 'Components',
  breadcrumbText: 'Breadcrumb',
  documentationText: 'Documentation',
  themesText: 'Themes',
  githubText: 'GitHub',
};
