'use client'

import MyPost from "@/app/components/post/MyPost";
import { useAuth } from "@/app/contexts/AuthContext";
import { useLoading } from "@/app/contexts/LoadingContext";
import { Post } from "@/app/interfaces/post";
import { getUserPosts } from "@/app/services/post.service";
import { useEffect, useState } from "react";

const posts = [
    {
        id: 1,
        slug: 'post-1',
        title: 'Hành trình học Spring Boot',
        thumbnail: '/sample-post-thumbnail.jpg',
        author: 'Lê Quý Điềm',
        date: '2025-07-22',
        excerpt: 'Khám phá cách xây dựng backend với Spring Boot trong dự án blog...',
    }
];

const page = () => {
    const { setLoading } = useLoading();
    const { user } = useAuth();


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
    }, []);

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

export default page