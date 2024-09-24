import React from "react"

export default function Theme({
  componentName,
  componentStyle,
  backgroundDesktop = "transparent",
  componentReactView,
}: {
  componentName: string
  componentStyle: string
  backgroundDesktop?: string
  componentReactView: string
})

export function Tags() {
  return (
    <Theme
      componentName="tags"
      componentStyle="normal"
      componentReactView="NormalTags"
    />
  )
}
export function InnovativeTags() {
  return (
    <Theme
      componentName="tags"
      componentStyle="innovative"
      componentReactView="InnovativeTags"
    />
  )
}
