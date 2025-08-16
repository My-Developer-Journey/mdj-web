"use client";

import AppButton from "@/app/components/common/AppButton";
import { FileInput } from "@/app/components/common/FileBox";
import { Input } from "@/app/components/common/InputBox";
import ProjectEditor from "@/app/components/common/ProjectEditor";
import { SelectBox } from "@/app/components/common/SelectBox";
import { defaultPostValues } from "@/app/constants/post";
import { Category } from "@/app/interfaces/category";
import { PostRequest } from "@/app/interfaces/post";
import { Tag } from "@/app/interfaces/tag";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
    const { register, handleSubmit, setValue, reset } = useForm<PostRequest>({
        defaultValues: defaultPostValues,
    });

    const [file, setFile] = useState<File | null>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [editorHtml, setEditorHtml] = useState(defaultPostValues.content);
    const [editorJson, setEditorJson] = useState(defaultPostValues.contentJson);
    const [editorKey, setEditorKey] = useState(0);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleEditorChange = (html: string, json: unknown) => {
        setEditorHtml(html);
        setEditorJson(json as Record<string, unknown>);
        setValue("content", html);
        setValue("contentJson", json as Record<string, unknown>);
    };

    const onSubmit = (data: PostRequest, status: "DRAFT" | "PUBLISHED") => {
        const payload: PostRequest = {
            ...data,
            postStatus: status,
            categoryIds: selectedCategories.map((c) => c.id),
            tagIds: selectedTags.map((t) => t.id),
        };
        console.log("Submit Data:", payload);
    };


    const handleDiscard = () => {
        reset(defaultPostValues);
        setEditorHtml("");
        setEditorJson({});
        setSelectedTags([]);
        setSelectedCategories([]);
        setFile(null);
        setEditorKey(prev => prev + 1);
    };

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);
    const minDateStr = minDate.toISOString().split("T")[0];

    console.log(editorHtml);

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col items-center max-w-[100rem]">
                <div className="mb-[4rem]">
                    <h1 className="text-center text-4xl font-semibold text-[var(--primary-black)] mb-[0.75rem]">
                        Create a post
                    </h1>
                    <h1 className="text-center text-md font-medium text-gray-500">
                        Share your unique thoughts, experiences, and ideas with the community,
                        and inspire others through your words.
                    </h1>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    className="w-full"
                >
                    {/* Title */}
                    <div className="mb-[2rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Your title*</h1>
                        <Input
                            type="text"
                            placeholder="Your title"
                            required
                            {...register("title")}
                            className="w-full mb-[0.5rem]"
                        />
                        <p className="text-sm text-gray-500 mb-2">
                            Enter a clear and descriptive title for your post.
                        </p>
                    </div>

                    {/* Thumbnail */}
                    <div className="mb-[2rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Your thumbnail*</h1>
                        <FileInput
                            onChange={handleFileChange}
                            className="w-full"
                            required
                            wrapperClassName="mb-[0.5rem]"
                        />
                        <p className="text-sm text-gray-500 mb-2">
                            Choose a high-quality image that represents your post content
                            clearly.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mb-[2rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Your tag*</h1>
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
                        <p className="text-sm text-gray-500 mt-[0.5rem]">
                            Type to search for existing tags or create a new one.{" "}
                            <span className="font-extrabold">
                                Minimum 1 tag, maximum 5 tags.
                            </span>
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="mb-[2rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Your category*</h1>
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
                        <p className="text-sm text-gray-500 mt-[0.5rem]">
                            Choose categories that best describe your post.{" "}
                            <span className="font-extrabold">
                                Minimum 1 category, maximum 3 categories.
                            </span>
                        </p>
                    </div>

                    {/* Content */}
                    <div className="mb-[2rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Your content*</h1>
                        <ProjectEditor
                            key={editorKey}
                            initialHtml={editorHtml}
                            onChange={handleEditorChange}
                        />
                        <p className="text-sm text-gray-500 mt-[0.5rem]">
                            Provide the main content of your post here. Make it clear and
                            engaging.
                        </p>
                    </div>

                    {/* Publish Date */}
                    <div className="mb-[4rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Publish date*</h1>
                        <Input
                            type="date"
                            {...register("scheduledPublishDate")}
                            required
                            min={minDateStr}
                            className="w-fit mb-[0.5rem]"
                        />
                        <p className="text-sm text-gray-500 mb-2">
                            Select a publish date at least 3 days from today for review and
                            preparation.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between w-full mb-[4rem]">
                        <AppButton
                            type="button"
                            variant="red"
                            className="w-[10rem]"
                            onClick={handleDiscard}
                        >
                            Discard all
                        </AppButton>
                        <div className="flex justify-end gap-[1rem] w-full">
                            <AppButton
                                type="button"
                                variant="gray"
                                className="w-[10rem]"
                                onClick={() => handleSubmit((data) => onSubmit(data, "DRAFT"))()}
                            >
                                Save as draft
                            </AppButton>
                            <AppButton
                                type="button"
                                variant="black"
                                className="w-[10rem]"
                                onClick={() =>
                                    handleSubmit((data) => onSubmit(data, "PUBLISHED"))()
                                }
                            >
                                Submit
                            </AppButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;