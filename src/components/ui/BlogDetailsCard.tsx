
import Image from 'next/image';
import { TBlog } from '@/types';

const BlogDetailsCard = ({blog} : {blog : TBlog}) => {
    const {title, content, image, category, author, date} = blog
  return (
    <div className="px-4 py-8 dark:text-white">
      {/* Blog Header */}
      <div className="flex justify-between gap-5">
        <div className="relative w-full h-[400px] flex-1">
          <Image 
            src={image} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg" 
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">{title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-white mb-4">
            <span className="bg-gray-200 text-gray-600  px-3 py-1 rounded-full">{category}</span>
            <span className="font-medium">{author}</span>
            <span>&bull;</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <p className="text-lg text-gray-700 dark:text-white leading-relaxed mb-8">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
