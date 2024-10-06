import * as React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import TourComponent from "./tour-demo"

export default {
  title: "Components/Tour",
  component: TourComponent,
  argTypes: {
    isOpen: { control: { type: "boolean" }, defaultValue: true },
    cardTitle: { control: { type: "text" }, defaultValue: "Tour component" },
    buttonText: { control: { type: "text" }, defaultValue: "Begin Tour" },
    steps: { control: { type: "object" } },
    buttonNames: { control: { type: "object" } }, // 新增按钮名称控件
  },
} as ComponentMeta<typeof TourComponent>

// 创建一个Story
const Template: ComponentStory<typeof TourComponent> = (args) => (
  <div style={{ position: "relative", height: "100vh", width: "30vw" }}>
    <TourComponent
      overlayProps={{
        isOpen: args.isOpen,
        usePortal: true,
        hasBackdrop: true,
        unmountOnExit: true,
        transitionName: "tour-popup",
        className:
          "absolute p-4 border bg-white rounded-lg shadow-lg text-center",
        style: { zIndex: 1050 },
      }}
      cardTitle={args.cardTitle}
      buttonText={args.buttonText}
      steps={args.steps}
      buttonNames={args.buttonNames} // 传递按钮名称
    />
  </div>
)

export const DefaultTour = Template.bind({})
DefaultTour.args = {
  isOpen: true,
  cardTitle: "Tour component",
  beginButtonText: "Begin Tour",
  buttonNames: {
    upload: "Upload",
    save: "Save",
    others: "...",
  },
  steps: [
    { title: "Upload File", description: "Put your files here." },
    { title: "Save", description: "Save your changes." },
    { title: "Other Actions", description: "Click to see other actions." },
  ],
}
