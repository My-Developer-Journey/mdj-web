import PostItem from '../components/PostItem';
import TopAuthor from '../components/TopAuthor';
import TopPost from '../components/TopPost';

const samplePosts = [
  {
    title: 'cách update level ngôn ngữ lập trình java và các ngôn ngữ khác',
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
    title: 'cách sử dụng ransackable_scopes trong ROR',
    author: 'Tô Tiến Toàn',
    views: 78,
    likes: 2,
    comments: 0,
  },
];

export default function Home() {
  const posts = [1, 2, 3, 4].map((id) => ({ id }));
  const authors = [1, 2, 3, 4].map((id) => ({ id }));
  return (
    <div className="mt-[8rem] flex gap-[5rem] px-12">
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