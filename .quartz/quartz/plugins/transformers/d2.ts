import remarkD2 from "remark-d2"
import { QuartzTransformerPlugin } from "../types"

interface Options {}

export const D2: QuartzTransformerPlugin<Partial<Options>> = (_opts) => {
  return {
    name: "D2",
    markdownPlugins() {
      return [[remarkD2, { compilePath: "../Attachments", linkPath: "Attachments" }]]
    },
  }
}
