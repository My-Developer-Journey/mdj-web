import { JSONContent } from "@tiptap/core";

export type Props = {
    initialHtml?: string;
    initialJson?: JSONContent;
    onChange?: (html: string, json: JSONContent) => void
}