'use client'

import { Input } from "@/app/components/common/input";
import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('');

    const handleChangeTitile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitle(value);
    }

    return (
        <div>
            <div className="mb-[2rem]">
                <h1 className="text-center text-3xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">Create a post</h1>
                <h1 className="text-center text-md font-medium text-gray-500">Share your thoughts and ideas with the community</h1>
            </div>
            
            <div className="mb-[2rem]">
                <h1 className="text-left text-xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">Your title*</h1>
                <Input
                    type="text"
                    placeholder="Your title"
                    value={title}
                    onChange={handleChangeTitile}
                    className="w-full mb-[0.5rem]"
                />
                <p className="text-sm text-gray-500 mb-2">
                    Enter a clear and descriptive title for your post
                </p>
            </div>
            <div className="mb-[2rem]">
                <div>
                    <h1 className="text-left text-xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">Your title*</h1>
                    <Input
                        type="text"
                        placeholder="Your tag"
                        value={title}
                        onChange={handleChangeTitile}
                        className="w-full mb-[0.5rem]"
                    />
                    <p className="text-sm text-gray-500 mb-2">
                        Enter a clear and descriptive title for your post
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CreatePost