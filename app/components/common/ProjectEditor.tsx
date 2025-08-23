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
    List,
    Trash2
} from 'lucide-react'
import { useEffect } from 'react'

export default function ProjectEditor({ initialHtml = '', initialJson, onChange }: Props) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link.configure({ openOnClick: true }),
            Placeholder.configure({
                placeholder: 'Start writing your post here... Use the toolbar above to format and customize your content.',
                emptyEditorClass: 'is-editor-empty',
            })
        ],
        content: initialJson ? initialJson : (initialHtml?.trim() || ''),
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg focus:outline-none min-h-[300px] py-[1rem] px-[1rem]',
            },
        },
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML(), editor.getJSON())
        },
    })
    console.log(initialJson);

    useEffect(() => {
        if (editor && initialJson) {
            editor.commands.setContent(initialJson);
        }
    }, [editor, initialJson]);

    return (
        <div className="w-full mx-auto bg-white border rounded-md focus:outline-none focus:ring-1 border-gray-300 focus:ring-black">
            <Toolbar editor={editor} />
            <div className="min-h-[70vh] max-w-none focus:outline-none">
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
            <button
                type="button"
                className={buttonStyle}
                onClick={() => {
                    if (!editor) return;
                    editor.commands.clearContent();
                }}
            >
                <Trash2 className="w-5 h-5" />
            </button>
        </div>
    )
}