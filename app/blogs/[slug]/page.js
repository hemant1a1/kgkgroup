
import BlogDetailContent from '@/components/BlogDetailContent';
import BlogSidebar from '@/components/BlogSidebar';

import Image from 'next/image';
import blog1 from '@/assets/images/blog-details.jpg';

export default function BlogDetailPage() {
  return (
    <>
        <Image src={blog1} alt="Wedding Ring" className="w-full min-h-96 h-[58vh] object-cover mb-8" />
        <div className="container">
            <div className="px-0 lg:px-[50px] pt-8 pb-16">
                <div className="flex flex-col lg:flex-row gap-x-32 gap-y-10">
                    <div className="md:w-9/12">
                        <BlogDetailContent />
                    </div>
                    <div className="md:w-3/12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
        
    </>
  );
}
