import Image from "next/image";
import { Card } from "../common/card";

interface Author {
    avatar?: string;
    name?: string;
    posts?: number;
    likes?: number;
}

const TopAuthor = ({ author }: { author: Author }) => {
    return (
        <Card className="flex items-center gap-4 p-4">
            <Image
                src={author.avatar || "/default-avatar.png"}
                alt="Author avatar"
                width={60}
                height={60}
                className="rounded-full w-[60px] h-[60px] object-cover"
            />
            <div>
                <h4 className="text-lg font-semibold">{author.name || "Jane Doe"}</h4>
                <p className="text-sm text-gray-500">
                {author.posts ?? 0} posts • {author.likes ?? 0} likes
                </p>
            </div>
        </Card>
    );
};

export default TopAuthor;
