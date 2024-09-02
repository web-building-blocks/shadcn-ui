import React from "react"
import { Meta, Story } from "@storybook/react"

import CalendarDemo from "./calendar-demo"

export default {
  title: "Components/CalendarDemo",
  component: CalendarDemo,
} as Meta

const Template: Story = (args) => <CalendarDemo {...args} />

export const Default = Template.bind({})
Default.args = {}
