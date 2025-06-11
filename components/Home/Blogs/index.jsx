'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

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
  const [selectedIndex, setSelectedIndex] = useState(0);

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

        {/* Swiper Slider */}
        <div className="overflow-hidden">
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView="auto"
            className="group"
            onSlideChange={() => setSelectedIndex(0)}
          >
            {blogPosts.map((post, index) => {
              const isActive = selectedIndex === index;
              return (
                <SwiperSlide
                  key={index}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`
                    !w-[90%] md:!w-[28.50%]
                    transition-[width] duration-500 ease-in-out rounded-xl overflow-hidden cursor-pointer
                    ${isActive ? 'md:!w-[38.50%]' : ''}
                  `}
                >
                  <div className="relative h-[320px] md:h-[400px] w-full rounded-xl overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-6 px-4 pb-6">
                    <Link
                      href={post.href}
                      className="text-xl font-normal text-black block mb-2"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-gray-600">{post.desc}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
