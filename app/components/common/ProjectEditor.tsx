'use client'

import { Props } from '@/app/types/projectEditor'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { Editor, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
    Bold,
    Image as ImageIcon,
    Italic,
    Link as LinkIcon,
    List
} from 'lucide-react'

export default function ProjectEditor({ initialHtml = '', onChange }: Props) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link.configure({ openOnClick: true }),
            Placeholder.configure({ placeholder: 'Write your post...' }),
        ],
        content: initialHtml,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML(), editor.getJSON())
        },
    })

    if (!editor) return null

    return (
        <div className="w-full mx-auto bg-white border rounded-md focus:outline-none focus:ring-1 border-gray-300 focus:ring-black">
            <Toolbar editor={editor} />
            <div className="p-6 min-h-[400px] prose max-w-none focus:outline-none">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

function Toolbar({ editor }: { editor: Editor | null }) {
    const buttonStyle =
        "p-2 rounded hover:bg-gray-100 active:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center"

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                if (!editor) return;
                editor.chain().focus().setImage({ src: reader.result as string }).run()
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex items-center gap-1 border-b bg-[var(--primary-white)] px-2 py-1 sticky top-0 z-10 rounded-tl-md rounded-tr-md border-gray-300 focus:ring-black">
            <button
                type="button"
                className={buttonStyle}
                onClick={() => {
                    if (!editor) return;
                    editor.chain().focus().toggleBold().run();
                }}
            >
                <Bold className="w-5 h-5" />
            </button>
            <button
                type="button"
                className={buttonStyle}
                onClick={() => {
                    if (!editor) return;
                    editor.chain().focus().toggleItalic().run();
                }}
            >
                <Italic className="w-5 h-5" />
            </button>
            <button
                type="button"
                className={buttonStyle}
                onClick={() => {
                    if (!editor) return;
                    editor.chain().focus().toggleBulletList().run();
                }}
            >
                <List className="w-5 h-5" />
            </button>
            <button
                type="button"
                className={buttonStyle}
                onClick={() => {
                    const url = prompt('Enter a link:')
                    if (url) {
                        if (!editor) return;
                        editor.chain().focus().setLink({ href: url }).run()
                    }
                }}
            >
                <LinkIcon className="w-5 h-5" />
            </button>
            <label className={buttonStyle}>
                <ImageIcon className="w-5 h-5" />
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={uploadImage}
                />
            </label>
        </div>
    )
}