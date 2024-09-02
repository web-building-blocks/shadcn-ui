import React from "react"
import { Meta, Story } from "@storybook/react"

import { Calendar, CalendarProps } from "./calendar"

export default {
  title: "Components/Calendar",
  component: Calendar,
} as Meta

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  // 可以在这里指定一些默认的属性
  showOutsideDays: true,
}

export const WithRange = Template.bind({})
WithRange.args = {
  mode: "range",
  showOutsideDays: false,
}

export const CustomStyling = Template.bind({})
CustomStyling.args = {
  className: "custom-calendar",
  classNames: {
    day_selected: "bg-green-500 text-white",
    day_today: "bg-red-500 text-white",
  },
}
