import React from "react"
import { Meta, Story } from "@storybook/react"

import CalendarForm from "./calendar-form"

export default {
  title: "Components/CalendarForm",
  component: CalendarForm,
} as Meta

const Template: Story = (args) => <CalendarForm {...args} />

export const Default = Template.bind({})
Default.args = {}
