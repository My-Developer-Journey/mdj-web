import PostItem from '../components/post/PostItem';
import TopPost from '../components/post/TopPost';
import TopAuthor from '../components/user/TopAuthor';

const samplePosts = [
  {
    title: 'Cách update level ngôn ngữ lập trình java và các ngôn ngữ khác',
    author: 'Lâm Doanh',
    views: 140,
    likes: 1,
    comments: 0,
  },
  {
    title: 'Nextjs',
    author: 'Tran Nhan',
    views: 114,
    likes: 1,
    comments: 0,
  },
  {
    title: 'Cách sử dụng ransackable_scopes trong ROR',
    author: 'Tô Tiến Toàn',
    views: 78,
    likes: 2,
    comments: 0,
  },
];

const posts = [
  {
    id: 1,
    slug: 'post-1',
    title: 'Hành trình học Spring Boot',
    thumbnail: '/sample-post-thumbnail.jpg',
    author: 'Lê Quý Điềm',
    date: '2025-07-22',
    excerpt: 'Khám phá cách xây dựng backend với Spring Boot trong dự án blog...',
  },
  {
    id: 2,
    slug: 'post-2',
    title: 'Bí kíp Next.js cho frontend tối ưu',
    thumbnail: '/sample-post-thumbnail.jpg',
    author: 'Nguyễn Văn A',
    date: '2025-07-20',
    excerpt: 'Hướng dẫn cách dùng Next.js để xây dựng UI thân thiện và nhanh...',
  },
  {
    id: 3,
    slug: 'post-3',
    title: 'CI/CD triển khai bằng Docker + AWS',
    thumbnail: '/sample-post-thumbnail.jpg',
    author: 'Trần B',
    date: '2025-07-18',
    excerpt: 'Làm sao để tự động hoá quy trình deploy bằng Docker và AWS...',
  },
];

const authors = [
  {
    id: 1,
    name: 'Lê Quý Điềm',
    avatar: '/default-avatar.png',
    posts: 5,
    likes: 10,
  },
  {
    id: 2,
    name: 'Nguyễn Văn A',
    avatar: '/default-avatar.png',
    posts: 3,
    likes: 4,
  },
  {
    id: 3,
    name: 'Trần B',
    avatar: '/default-avatar.png',
    posts: 2,
    likes: 7,
  },
];

export default function Home() {
  return (
    <div className="flex gap-[5rem]">
      <div className="w-2/3">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>

      {/* Cột bên phải - sidebar */}
      <div className="w-1/3">
        <section>
          <h2 className="text-2xl font-bold mb-6">Top Posts</h2>
          <div className="flex flex-col gap-6">
            {samplePosts.map((post, index) => (
              <TopPost key={index} {...post} />
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-6 mt-[5rem]">Top Authors</h2>
          <div className="flex flex-col gap-6">
            {authors.map((author) => (
              <TopAuthor key={author.id} author={author} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}