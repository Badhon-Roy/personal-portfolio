import { TBlog } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const { _id ,title, image, category, author } = blog;
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 ease-in-out p-2 border">
      <div className="relative w-full h-56 border rounded-t-lg">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-[#00ccff] transition-colors duration-300 ease-in-out mb-2">{title}</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full">{category}</span>
          <span className="font-medium">{author}</span>
        </div>
    
    <Link href={`/blog/${_id}`}>
    <button className="rounded-md text-white px-8 py-3 border border-[#00ccff] bg-gradient-to-r from-[#0A767B] to-[#00A7D6] hover:from-[#05dae6] hover:to-[#0a7391] transition-all duration-300 shadow-xl mt-4">
        Read More
      </button>
      </Link>
      </div>
    </div>
  );
};

export default BlogCard;

