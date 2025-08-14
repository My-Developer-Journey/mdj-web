'use client'

import AppButton from "@/app/components/common/AppButton";
import { FileInput } from "@/app/components/common/FileBox";
import { Input } from "@/app/components/common/InputBox";
import ProjectEditor from "@/app/components/common/ProjectEditor";
import { SelectBox } from "@/app/components/common/SelectBox";
import { Category } from "@/app/interfaces/category";
import { Tag } from "@/app/interfaces/tag";
import { useState } from "react";

const tagList: Tag[] = [
    { id: "1", name: "React" },
    { id: "2", name: "Next.js" },
    { id: "3", name: "TypeScript" },
    { id: "4", name: "Tailwind" },
    { id: "5", name: "Node.js" },
];

const categoryList: Category[] = [
    { id: "1", name: "Front-end" },
    { id: "2", name: "Back-end" },
    { id: "3", name: "Security" },
    { id: "4", name: "Devops" },
    { id: "5", name: "Project Management" },
];

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [publishDate, setPublishDate] = useState("");
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [contentHtml, setContentHtml] = useState('');
    const [contentJson, setContentJson] = useState<unknown>(null);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleChangePublishDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPublishDate(value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);
    const minDateStr = minDate.toISOString().split("T")[0];

    console.log(file);
    console.log(contentHtml);
    console.log(contentJson);

    return (
        <div className="flex flex-col items-center max-w-[100rem]">
            <div className="mb-[4rem]">
                <h1 className="text-center text-5xl font-semibold text-[var(--primary-black)] mb-[0.75rem]">Create a post</h1>
                <h1 className="text-center text-md font-medium text-gray-500">
                    Share your unique thoughts, experiences, and ideas with the community, and inspire others through your words.
                </h1>
            </div>
            <form>
                <div className="mb-[2rem]">
                    <h1 className="text-left text-xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">Your title*</h1>
                    <Input
                        type="text"
                        placeholder="Your title"
                        value={title}
                        onChange={handleChangeTitle}
                        className="w-full mb-[0.5rem]"
                    />
                    <p className="text-sm text-gray-500 mb-2">
                        Enter a clear and descriptive title for your post.
                    </p>
                </div>
                <div className="mb-[2rem]">
                    <h1 className="text-left text-xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">Your thumbnail*</h1>
                    <FileInput
                        onChange={handleFileChange}
                        className="w-full"
                        wrapperClassName="mb-[0.5rem]"
                    />
                    <p className="text-sm text-gray-500 mb-2">
                        Choose a high-quality image that represents your post content clearly.
                    </p>
                </div>
                <div className="mb-[2rem]">
                    <div>
                        <h1 className="text-left text-xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">Your tag*</h1>
                        <SelectBox
                            items={tagList}
                            selectedItems={selectedTags}
                            setSelectedItems={setSelectedTags}
                            labelKey="name"
                            valueKey="id"
                            placeholder="Search tag..."
                            maxSelected={5}
                            className="w-full"
                        />
                        <p className="text-sm text-gray-500 mb-2 mt-[0.5rem]">
                            Type to search for existing tags or create a new one, then select to add it to your post. <span className="font-extrabold">Minimum 1 tag, maximum 5 tags</span>.
                        </p>
                    </div>
                </div>
                <div className="mb-[2rem]">
                    <div>
                        <h1 className="text-left text-xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">
                            Your category*
                        </h1>
                        <SelectBox
                            items={categoryList}
                            selectedItems={selectedCategories}
                            setSelectedItems={setSelectedCategories}
                            labelKey="name"
                            valueKey="id"
                            placeholder="Search category..."
                            maxSelected={3}
                            className="w-full"
                        />
                        <p className="text-sm text-gray-500 mb-2 mt-[0.5rem]">
                            Choose the main categories that best describe your post. <span className="font-extrabold">Minimum 1 category, maximum 3 categories.</span>
                        </p>
                    </div>
                </div>
                <div className="mb-[2rem]">
                    <h1 className="text-left text-xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">Your content*</h1>
                    <ProjectEditor
                        initialHtml=""
                        onChange={(html, json) => {
                            setContentHtml(html);
                            setContentJson(json);
                        }}
                    />
                    <p className="text-sm text-gray-500 mt-[0.5rem]">
                        Provide the main content of your post here. Make sure it is clear, engaging, 
                        and well-structured so readers can easily follow and enjoy your message.
                    </p>
                </div>
                <div className="mb-[4rem]">
                    <h1 className="text-left text-xl font-semibold text-[var(--primary-black)] mb-[0.5rem]">Publish date*</h1>
                    <Input
                        type="date"
                        value={publishDate}
                        onChange={handleChangePublishDate}
                        min={minDateStr}
                        className="w-fit mb-[0.5rem]"
                    />
                    <p className="text-sm text-gray-500 mb-2">
                        Select a publish date at least 3 days from today to allow time for the admin to review and preparation.
                    </p>
                </div>
                <div className="flex justify-end gap-[1rem] mb-[4rem] w-full">
                    <AppButton type="submit" variant="gray" className="w-[10rem]">
                        Save as draft
                    </AppButton>
                    <AppButton type="submit" variant="black" className="w-[10rem]">
                        Submit
                    </AppButton>
                </div>
            </form>
        </div>
    )
}

export default CreatePost