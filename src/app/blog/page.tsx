import BlogCard from "@/components/ui/BlogCard";
import { TBlog } from "@/types";


const BlogPage = async() => {
  const res = await fetch('http://localhost:5000/blogs')
  const blogs = await res.json();

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#029bc0] mb-8">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog : TBlog) => <BlogCard key={blog?._id} blog={blog}/> )}
      </div>
    </div>
  );
};

export default BlogPage;
