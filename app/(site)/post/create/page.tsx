"use client";

import AppButton from "@/components/common/AppButton";
import { FileInput } from "@/components/common/FileBox";
import { Input } from "@/components/common/InputBox";
import ProjectEditor from "@/components/common/ProjectEditor";
import { SelectBox } from "@/components/common/SelectBox";
import { defaultPostValues } from "@/constants/post";
import { useGlobalData } from "@/hooks/useGlobalData";
import { useAuth } from "@/providers/AuthContext";
import { useLoading } from "@/providers/LoadingContext";
import { addPost, checkDraftExist, updatePost } from "@/services/post.service";
import { Category } from "@/types/category";
import { PostRequest } from "@/types/post";
import { Tag } from "@/types/tag";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreatePost = () => {
    const { categories, tags } = useGlobalData();
    const { setLoading } = useLoading();
    const { user } = useAuth();

    const { register, handleSubmit, setValue, reset } = useForm<PostRequest>({
        defaultValues: defaultPostValues,
    });

    const [isDraft, setIsDraft] = useState<boolean>(false);
    const [draftId, setDraftId] = useState<string | null>(null);

    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [editorHtml, setEditorHtml] = useState(defaultPostValues.content);
    const [editorJson, setEditorJson] = useState(defaultPostValues.contentJson);
    const [editorKey, setEditorKey] = useState(0);


    useEffect(() => {
        const fetchDraft = async () => {
            try {
                setLoading(true);
                const res = await checkDraftExist();
                if (res.status === 200 && res.data) {
                    const draft = res.data;
                    setIsDraft(true);
                    setDraftId(draft.id);
                    reset({
                        title: draft.title,
                        content: draft.content,
                        contentJson: draft.contentJson,
                        scheduledPublishDate: toDateInputValue(draft.scheduledPublishDate),
                    });
                    setEditorHtml(draft.content);
                    setEditorJson(draft.contentJson);
                    setSelectedCategories(draft.categories || []);
                    setSelectedTags(draft.tags || []);
                    setPreview(draft.thumbnailUrl || null);
                }
            } catch (err) {
                console.log("Error loading draft:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDraft();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Thumbnail handling
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setPreview(null);
    };

    // Editor handling
    const handleEditorChange = (html: string, json: unknown) => {
        setEditorHtml(html);
        setEditorJson(json as Record<string, unknown>);
        setValue("content", html);
        setValue("contentJson", json as Record<string, unknown>);
    };

    // Discard handling
    const handleDiscard = () => {
        reset(defaultPostValues);
        setEditorHtml("");
        setEditorJson({});
        setSelectedTags([]);
        setSelectedCategories([]);
        setFile(null);
        setPreview(null);
        setEditorKey(prev => prev + 1);
    };

    // Create post
    const onSubmit = async (
        data: PostRequest,
        status: "DRAFT" | "PUBLISHED",
        isDraft: boolean
    ) => {
        try {
            setLoading(true);

            const payload: PostRequest = {
                ...data,
                authorId: user?.id || "",
                postStatus: status,
                categoryIds: selectedCategories.map((c) => c.id),
                tagIds: selectedTags.map((t) => t.id),
            };

            console.log("Payload:", payload);

            let res;

            if (isDraft) {
                if (!draftId) {
                    throw new Error("No draftId found!");
                }
                res = await updatePost(draftId, payload, file);
            } else {
                res = await addPost(payload, file);
            }

            if (res.status !== 200) {
                console.error(res);
                toast.error(res.message);
            } else {
                toast.success(res.message);
            }
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err);
            console.error(message);
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    const toDateInputValue = (isoString: string) => {
        return isoString.split('T')[0];
    };

    // Calculate min date
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);
    const minDateStr = toDateInputValue(minDate.toISOString());

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
                <div>

                </div>
                {isDraft &&
                    <div className="w-full">
                        <h1 className="text-left text-md font-semibold text-red-500 mb-[1rem]">
                            *Your last draft was restored
                        </h1>
                    </div>
                }
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
                            preview={preview}
                            onRemove={handleRemoveFile}
                            className="w-full mb-[0.5rem]"
                        />
                        <p className="text-sm text-gray-500 mb-2">
                            Choose a high-quality image that represents your post content
                            clearly.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="mb-[2rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Your category*</h1>
                        <SelectBox
                            items={categories}
                            selectedItems={selectedCategories}
                            setSelectedItems={setSelectedCategories}
                            labelKey="name"
                            valueKey="id"
                            placeholder="Your post categories. Example: Back-end, Front-end..."
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

                    {/* Tags */}
                    <div className="mb-[2rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Your tag*</h1>
                        <SelectBox
                            items={tags}
                            selectedItems={selectedTags}
                            setSelectedItems={setSelectedTags}
                            labelKey="name"
                            valueKey="id"
                            placeholder="Your post tags. Example: React.js, Next.js..."
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

                    {/* Content */}
                    <div className="mb-[2rem]">
                        <h1 className="text-xl font-semibold mb-[0.5rem]">Your content*</h1>
                        <ProjectEditor
                            key={editorKey}
                            initialHtml={editorHtml}
                            initialJson={editorJson}
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
                                onClick={() => handleSubmit((data) => onSubmit(data, "DRAFT", isDraft))()}
                            >
                                Save as draft
                            </AppButton>
                            <AppButton
                                type="button"
                                variant="black"
                                className="w-[10rem]"
                                onClick={() =>
                                    handleSubmit((data) => onSubmit(data, "PUBLISHED", isDraft))()
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