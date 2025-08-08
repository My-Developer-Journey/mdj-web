import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../common/card";

interface Post {
    thumbnail?: string;
    slug: string;
    title?: string;
    author?: string;
    date?: string;
    excerpt?: string;
}

const PostItem = ({ post }: { post: Post }) => {
    return (
        <Card className="overflow-hidden">
            <Image
                src={post.thumbnail || "/sample-post-thumbnail.jpg"}
                alt="Post thumbnail"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover"
            />
            <CardContent className="p-4">
            <Link href={`/post/${post.slug}`}>
                <h3 className="text-xl font-semibold hover:underline">
                    {post.title || "Sample Post Title"}
                </h3>
                </Link>
                <p className="text-sm text-gray-500 mt-2">
                By {post.author || "John Doe"} • {post.date || "July 11, 2025"}
                </p>
                <p className="text-gray-700 mt-3">
                {post.excerpt || "This is a short description or excerpt of the blog post. Just a few lines."}
                </p>
            </CardContent>
        </Card>
    );
};

export default PostItem;