
import Link from 'next/link';

const blogs = [
  { id: 1, title: 'Blog Post 1', description: 'This is the first blog post.' },
  { id: 2, title: 'Blog Post 2', description: 'This is the second blog post.' },
  { id: 3, title: 'Blog Post 3', description: 'This is the third blog post.' },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#029bc0] mb-8">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">{blog.title}</h3>
            <p className="text-gray-400 mb-4">{blog.description}</p>
            <Link href={`/blog/${blog.id}`} className="text-blue-500 hover:text-blue-700">Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
