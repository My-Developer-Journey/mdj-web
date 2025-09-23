import { Post } from "@/app/interfaces/post";
import { Eye, MessageCircle, Pencil, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../common/ProjectCard";

const MyPost = ({ post }: { post: Post }) => {
    return (
        <Card className="flex items-center gap-4 p-4 overflow-hidden relative">
            <Image
                src={post.thumbnailUrl || "/sample-post-thumbnail.jpg"}
                alt="Post thumbnail"
                width={250}
                height={250}
                className="w-[30%] h-[160px] object-cover rounded-md"
            />
            <div className="w-[70%]">
                <CardContent className="p-4">
                    <Link
                        href={`/post/${post.slug}`}
                        className="inline-block"
                    >
                        <h3 className="text-xl font-semibold hover:underline">
                            {post.title || "Sample Post Title"}
                        </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mt-2 w-fit">
                        By {"John Doe"} • {"July 11, 2025"}
                    </p>
                    <p className="text-gray-700 mt-3 w-fit">
                        {"This is a short description or excerpt of the blog post. Just a few lines."}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-[1rem]">
                        <div className="flex items-center gap-1">
                            <ThumbsUp size={14} />
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Eye size={14} />
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageCircle size={14} />
                            <span>10</span>
                        </div>
                    </div>
                </CardContent>
            </div>
            <div className="absolute right-0 top-0 bg-gray-200 rounded-bl-md p-[0.25rem] hover:bg-gray-300 transition-all">
                <Link
                    href={`/post/edit/${post.slug}`}
                    className="w-8 h-8 flex items-center justify-center rounded-full"
                >
                    <Pencil className="w-5 h-5 text-gray-700" />
                </Link>
            </div>
        </Card>
    )
}

export default MyPost