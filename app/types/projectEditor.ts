import { JSONContent } from "@tiptap/core"

export type Props = {
    initialHtml?: string
    onChange?: (html: string, json: JSONContent) => void
}