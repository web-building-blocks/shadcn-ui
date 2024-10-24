import * as React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { FormProvider, useForm } from "react-hook-form"

import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

import RadioGroupForm from "./radio-group-form"

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    label1: {
      control: { type: "text" },
      defaultValue: "Default",
    },
    label2: {
      control: { type: "text" },
      defaultValue: "Comfortable",
    },
    label3: {
      control: { type: "text" },
      defaultValue: "Compact",
    },
    groupLabel: {
      control: { type: "text" },
      defaultValue: "Notify me about...",
    },
    buttonText: {
      control: { type: "text" },
      defaultValue: "Submit",
    },
    labelFontSize: {
      control: { type: "select" },
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
      ],
      defaultValue: "text-base",
    },
    buttonFontSize: {
      control: { type: "select" },
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
      ],
      defaultValue: "text-base",
    },
  },
} as ComponentMeta<typeof RadioGroup>

// 基本的 RadioGroup 模板
const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <div>
    <RadioGroup>
      <div className="flex items-center">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className={args.labelFontSize}>
          {args.label1}
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className={args.labelFontSize}>
          {args.label2}
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className={args.labelFontSize}>
          {args.label3}
        </label>
      </div>
    </RadioGroup>
  </div>
)

export const Default = Template.bind({})
Default.storyName = "Default"
Default.args = {
  label1: "Default",
  label2: "Comfortable",
  label3: "Compact",
}
Default.argTypes = {
  groupLabel: {
    table: {
      disable: true,
    },
  },
  buttonText: {
    table: {
      disable: true,
    },
  },
  buttonFontSize: {
    table: {
      disable: true, // 在 Default 中隐藏 buttonFontSize 控件
    },
  },
}

// RadioGroupForm 变体
export const Form: ComponentStory<typeof RadioGroupForm> = (args) => {
  const methods = useForm() // 使用 useForm 创建表单方法

  return (
    <FormProvider {...methods}>
      {" "}
      {/* 使用 FormProvider 包裹组件 */}
      <RadioGroupForm
        label1={args.label1}
        label2={args.label2}
        label3={args.label3}
        groupLabel={args.groupLabel}
        buttonText={args.buttonText}
        labelFontSize={args.labelFontSize}
        buttonFontSize={args.buttonFontSize}
      />
    </FormProvider>
  )
}
Form.storyName = "Form"
Form.args = {
  label1: "All new messages",
  label2: "Direct messages and mentions",
  label3: "Nothing",
  groupLabel: "Notify me about...",
  buttonText: "Submit",
  labelFontSize: "text-base",
  buttonFontSize: "text-base",
}
