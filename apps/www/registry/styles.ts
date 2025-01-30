export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "new-york",
    label: "New York",
  },
  {
    name: "sydney",
    label: "Sydney",
  },
  {
    name: "ibm",
    label: "IBM",
  },
  {
    name: "UNSW",
    label: "UNSW",
  },
] as const

export type Style = (typeof styles)[number]
