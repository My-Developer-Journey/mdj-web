import { Eye, MessageCircle, ThumbsUp } from 'lucide-react';

type TopPostProps = {
    title: string;
    author: string;
    views: number;
    likes: number;
    comments: number;
};

export default function TopPost({
    title,
    author,
    views,
    likes,
    comments,
}: TopPostProps) {
    return (
        <div className="border-b py-3">
        <h3 className="text-[1rem] font-medium text-gray-800 hover:underline cursor-pointer leading-snug">
            {title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
            <div className="flex items-center gap-1">
                <ThumbsUp size={14} />
                <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{views}</span>
            </div>
            <div className="flex items-center gap-1">
                <MessageCircle size={14} />
                <span>{comments}</span>
            </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{author}</p>
        </div>
    );
}
