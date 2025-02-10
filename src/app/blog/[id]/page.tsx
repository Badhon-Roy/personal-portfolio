import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { TBlog } from "@/types";


export const generateStaticParams = async()=>{
    const res = await fetch('http://localhost:5000/blogs')
    const blogs = await res.json();
    return blogs.slice(0,3).map((blog : TBlog )=> ({
        id : blog._id
    }))
}

export async function generateMetadata({ params } : { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/blogs/${id}`)
    const blog = await res.json();
    return {
      title: blog.title,
      description: blog.content
    }
  }

const BlogDetailsPage = async (
    { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/blogs/${id}`)
    const blog = await res.json();
    console.log(blog);
    return (
        <div className='my-10'>
            <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;