'use client';

import Image from 'next/image';
import blog1 from "@/assets/images/blogs/1.jpg";
import blog2 from "@/assets/images/blogs/2.png";
import blog3 from "@/assets/images/blogs/3.jpg";

const blogPosts = [
  {
    title: 'Wedding Jewellery Trends for the Modern Bride',
    desc: 'Wedding Jewellery Trends for the Modern Bride Your wedding day is a momentous occasion, a celebration of love,...',
    img: blog1,
    href: '#',
  },
  {
    title: 'Men’s Diamond Jewelry: Top 7 Fashion Trends In 2024',
    desc: 'Men’s Diamond Jewelry: Top 7 Fashion Trends In 2024 Welcome to the glittering world of men diamond jewelry,...',
    img: blog2,
    href: '#',
  },
  {
    title: 'Charm of Greens: Unveiling the Beauty of Green Gemstones',
    desc: 'Charm of Greens: Unveiling the Beauty of Green Gemstones As a seasoned gemstone aficionado with over a decade...',
    img: blog3,
    href: '#',
  },
];

export default function Blogs() {
  return (
    <div className="bg-light-primary md:px-12 py-16">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4">Our Blogs</h2>
            <p className="md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Discover trends, styling tips, and insights from the world of fine jewellery.
            </p>
          </div>
          
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm">SEE ALL</button>
        </div>

        {/* Main Blog Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - 40% */}
          <div className="w-full md:w-[40%] overflow-hidden">
            <div className="w-full h-[392px] rounded-xl overflow-hidden">
              <Image
                src={blogPosts[0].img}
                alt={blogPosts[0].title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-8 ">
              <a href={blogPosts[0].href} className="max-w-xs text-xl font-normal underline underline-offset-2 text-black hover:text-[#8E705A] block mb-4">
                {blogPosts[0].title}
              </a>
              <p className="text-sm text-gray-600">{blogPosts[0].desc}</p>
            </div>
          </div>

          {/* Right Side - 60% Grid with 2 columns */}
          <div className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-8">
            {[blogPosts[1], blogPosts[2]].map((post, index) => (
              <div key={index} className=" overflow-hidden">
                <div className="w-full h-[392px] rounded-xl overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-8">
                  <a href="" className="max-w-xs text-xl font-normal text-black block mb-4">{post.title}</a>
                  <p className="text-sm text-gray-600">{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
