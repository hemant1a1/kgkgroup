import Breadcrumb from '@/components/Breadcrumb3';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import LatestBlogs from '@/components/LatestBlogs';

import bgImage from '@/assets/images/banners/blog-banner.jpg';

export default function Blogs() {
  return (
    <>
      <Breadcrumb
        heading="Blogs"
        bgImage={bgImage}
      />
      <FeaturedBlogs />
      <LatestBlogs />
    </>
  );
}