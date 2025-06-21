'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import blog1 from '@/assets/images/blogs/1.jpg';
import blog2 from '@/assets/images/blogs/2.png';
import blog3 from '@/assets/images/blogs/3.jpg';

const blogPosts = [
  {
    title: 'Wedding Jewellery Trends for the Modern Bride',
    img: blog1,
    slug: 'wedding-jewellery-trends-for-the-modern-bride',
  },
  {
    title: 'Men’s Diamond Jewelry: Top 7 Fashion Trends In 2024',
    img: blog2,
    slug: 'top-7-fashion-trends-in-2024',
  },
  {
    title: 'Charm of Greens: Unveiling the Beauty of Green Gemstones',
    img: blog3,
    slug: 'unveiling-the-beauty-of-green-gemstones',
  },
  {
    title: 'Wedding Jewellery Trends for the Modern Bride',
    img: blog1,
    slug: 'wedding-jewellery-trends-for-the-modern-bride',
  },
  {
    title: 'Men’s Diamond Jewelry: Top 7 Fashion Trends In 2024',
    img: blog2,
    slug: 'top-7-fashion-trends-in-2024',
  },
  {
    title: 'Charm of Greens: Unveiling the Beauty of Green Gemstones',
    img: blog3,
    slug: 'unveiling-the-beauty-of-green-gemstones',
  },
];

export default function FeaturedBlogs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Get container width on mount & resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  


  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          <div className="flex flex-col xl:flex-row xl:items-center mb-8 xl:mb-16">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4 xl:mb-0 xl:basis-3/12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >Lorem Ipsum Ipsum</motion.h2>
              <motion.p 
                className="xl:basis-9/12 text-[15px] leading-[25px] tracking-[0px] font-normal text-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
              Featured
            </span>
          </motion.div>

          {/* Swiper Container */}
          <div ref={containerRef}>
            <Swiper
              loop={true}
              slidesPerView={'auto'}
              spaceBetween={20}
              centeredSlides={false}
              className="group"
            >
              {blogPosts.map((post, index) => {
                const isActive = selectedIndex === index;

                // width logic (in pixels)
                const slideWidth = () => {
                  if (typeof window !== 'undefined' && window.innerWidth < 768) {
                    return containerWidth * 0.9; // 90% width on mobile
                  } else {
                    return isActive
                      ? containerWidth * 0.385 // 38.5% on hover
                      : containerWidth * 0.285; // 28.5% otherwise
                  }
                };

                return (
                  <SwiperSlide key={index} className="!w-auto overflow-hidden">
                    <motion.div
                      onMouseEnter={() => setSelectedIndex(index)}
                      animate={{
                        width:
                          typeof window !== 'undefined' && window.innerWidth < 768
                            ? containerWidth * 0.9
                            : selectedIndex === index
                            ? containerWidth * 0.385
                            : containerWidth * 0.285,
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="h-full rounded-xl overflow-hidden cursor-pointer"
                      style={{ minWidth: '250px' }} // fallback min width
                    >
                      <div className="relative h-[320px] md:h-[400px] w-full rounded-xl overflow-hidden group">
                        <Image
                          src={post.img}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-full px-4 py-6 bg-gradient-to-t from-black/80 to-transparent">
                          <Link
                            href={`blogs/${post.slug}`} 
                            className="text-lg text-white block mb-3 max-w-xs"
                          >
                            {post.title}
                          </Link>
                          <Link href={`blogs/${post.slug}`} className="mt-3 inline-block bg-white text-black text-[9px] font-medium tracking-wide uppercase px-4 py-1.5 rounded-full hover:bg-gray-100 transition">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>


                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
