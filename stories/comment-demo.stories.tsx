import React from "react";
import { Meta, Story } from "@storybook/react";
import CommentDemo from "./comment-demo";

// Storybook: Meta configuration for Comment component
export default {
  title: "Components/CommentDemo",
  component: CommentDemo,
  argTypes: {
    selectedMessageIndex: {
      control: {
        type: 'number',
        min: 0,
        max: 3, // Assuming there are 4 messages with indexes from 0 to 3
      },
      description: 'Select the message to modify',
      defaultValue: 0,
    },
    user: {
      control: 'text',
      description: 'User name',
      defaultValue: "USYD Student 1",
    },
    avatarUrl: {
      control: 'text',
      description: 'Avatar URL',
      defaultValue: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    },
    description: {
      control: 'text',
      description: 'User description',
      defaultValue: "I am the student of USYD and majoring in Master of Computer Science.",
    },
    content: {
      control: 'text',
      description: 'Message content',
      defaultValue: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
    },
    likes: {
      control: 'number',
      description: 'Number of likes',
      defaultValue: 156,
    },
    comments: {
      control: 'number',
      description: 'Number of comments',
      defaultValue: 156,
    },
    shares: {
      control: 'number',
      description: 'Number of shares',
      defaultValue: 2,
    },
  },
} as Meta;

// Template for the Comment component
const Template: Story = (args) => {
  const initialMessages = [
    {
      user: "USYD Student 1",
      avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
      description: "I am the student of USYD and majoring in Master of Computer Science.",
      content: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
      likes: 156,
      comments: 156,
      shares: 2,
    },
    {
      user: "USYD Student 2",
      avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      description: "I am the student of USYD and majoring in Master of Computer Science.",
      content: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
      likes: 156,
      comments: 156,
      shares: 2,
    },
    {
      user: "USYD Student 3",
      avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
      description: "I am the student of USYD and majoring in Master of Computer Science.",
      content: "The stars change, the mind remains the same.",
      likes: 156,
      comments: 156,
      shares: 2,
    },
    {
      user: "USYD Student 4",
      avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
      description: "I am the student of USYD and majoring in Master of Computer Science.",
      content: "The stars change, the mind remains the same.",
      likes: 156,
      comments: 156,
      shares: 2,
    },
  ];

  // Modify the message of the specified index
  const modifiedMessages = [...initialMessages];
  modifiedMessages[args.selectedMessageIndex] = {
    user: args.user,
    avatarUrl: args.avatarUrl,
    description: args.description,
    content: args.content,
    likes: args.likes,
    comments: args.comments,
    shares: args.shares,
  };

  return <CommentDemo initialMessages={modifiedMessages} />;
};

// Default CommentDemo story
export const Default = Template.bind({});
Default.args = {
  selectedMessageIndex: 0, // Modify the first message by default
  user: "USYD Student 1",
  avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
  description: "I am the student of USYD and majoring in Master of Computer Science.",
  content: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
  likes: 156,
  comments: 156,
  shares: 2,
};