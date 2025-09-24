'use client'

import MyPost from "@/app/components/post/MyPost";
import { useLoading } from "@/app/contexts/LoadingContext";
import { Post } from "@/app/interfaces/post";
import { getUserPosts } from "@/app/services/post.service";
import { useEffect, useState } from "react";

const AllUserPosts = () => {
    const { setLoading } = useLoading();

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                setLoading(true);
                const res = await getUserPosts();
                console.log(res);
                if (res.status === 200 && res.data) {
                    setPosts(res.data);
                }
            } catch (err) {
                console.log("Error loading post:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(posts);

    return (
        <div>
            <h1 className="text-left text-4xl font-semibold text-[var(--primary-black)] mb-[0.75rem]">
                Your posts
            </h1>
            <h1 className="text-left text-md font-medium text-gray-500">
                All of your posts will be shown here.
            </h1>
            <div className="mt-[3rem]">
                {posts.map((post) => (
                    <MyPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default AllUserPosts