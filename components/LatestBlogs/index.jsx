'use client';
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import blog1 from '@/assets/images/ring-1.jpg';
import blog2 from '@/assets/images/The-Elegance-of-Pear-Cut-Diamonds-in-Modern-Jewellery-1.jpg';
import blog3 from '@/assets/images/Pink-Diamond-Rings-Popular-Choice-for-Proposal-and-Engagement-Rings-1.jpg';
import blog4 from '@/assets/images/Rock-Your-Everyday-Look-7-Stunning-Semi-Precious-Stone-Jewellery-Pieces-1.jpg';
import blog5 from '@/assets/images/20240119_113537_0000.jpg';
import blog6 from '@/assets/images/Charm-of-Greens-Unveiling-the-Beauty-of-Green-Gemstones-1.jpg';

const categories = ['All', 'Healthcare', 'Gemstone', 'Mining', 'Jewellery', 'Retail', 'Realty'];

const blogList = [
  {
    title: "Jewellery Care 101: How To Maintain Your Precious & Semi-precious Stones Pieces",
    image: blog1,
    content: "Jewellery is not just an accessory; it is a statement of style, a mark of moments, and an investment that often carries emotional value. Whether it is the gleam of precious stone or the subtle elegance of semi-precious stone...",
    category: "Jewellery",
    slug: "jewellery-care-101"
  },
  {
    title: "The Elegance of Pear Cut Diamonds in Modern Jewellery",
    image: blog2,
    content: "Pear cut diamonds blend brilliance with elegance. They are a modern choice for engagement and luxury jewelry lovers...",
    category: "Jewellery",
    slug: "pear-cut-diamonds-modern-jewellery"
  },
  {
    title: "Pink Diamond Ring: A Popular Choice for Proposal and Engagement Rings?",
    image: blog3,
    content: "Pink diamonds are rare and romantic. Here's why they’re trending in proposals...",
    category: "Gemstone",
    slug: "pink-diamond-ring"
  },
  {
    title: "Rock Your Everyday Look: 7 Stunning Semi Precious Stone Jewellery Pieces",
    image: blog4,
    content: "Make every day special with these handpicked semi-precious stone designs...",
    category: "Gemstone",
    slug: "semi-precious-jewellery"
  },
  {
    title: "Top 7 Reasons Why Gemstone Necklaces are The Style Statement in Every Occasion",
    image: blog5,
    content: "From casual to couture, gemstone necklaces complete every look...",
    category: "Retail",
    slug: "gemstone-necklaces-style-statement"
  },
  {
    title: "Unveiling The Emotional Journey: Natural Diamonds as Token of Love and Commitment",
    image: blog6,
    content: "Natural diamonds symbolize lasting love and timeless elegance...",
    category: "Realty",
    slug: "natural-diamonds-love"
  },
  {
    title: "Jewellery Care 101: How To Maintain Your Precious & Semi-precious Stones Pieces",
    image: blog1,
    content: "Jewellery is not just an accessory; it is a statement of style, a mark of moments, and an investment that often carries emotional value. Whether it is the gleam of precious stone or the subtle elegance of semi-precious stone...",
    category: "Jewellery",
    slug: "jewellery-care-101"
  },
  {
    title: "The Elegance of Pear Cut Diamonds in Modern Jewellery",
    image: blog2,
    content: "Pear cut diamonds blend brilliance with elegance. They are a modern choice for engagement and luxury jewelry lovers...",
    category: "Jewellery",
    slug: "pear-cut-diamonds-modern-jewellery"
  },
  {
    title: "Pink Diamond Ring: A Popular Choice for Proposal and Engagement Rings?",
    image: blog3,
    content: "Pink diamonds are rare and romantic. Here's why they’re trending in proposals...",
    category: "Gemstone",
    slug: "pink-diamond-ring"
  },
  {
    title: "Rock Your Everyday Look: 7 Stunning Semi Precious Stone Jewellery Pieces",
    image: blog4,
    content: "Make every day special with these handpicked semi-precious stone designs...",
    category: "Gemstone",
    slug: "semi-precious-jewellery"
  },
  {
    title: "Top 7 Reasons Why Gemstone Necklaces are The Style Statement in Every Occasion",
    image: blog5,
    content: "From casual to couture, gemstone necklaces complete every look...",
    category: "Retail",
    slug: "gemstone-necklaces-style-statement"
  },
  {
    title: "Unveiling The Emotional Journey: Natural Diamonds as Token of Love and Commitment",
    image: blog6,
    content: "Natural diamonds symbolize lasting love and timeless elegance...",
    category: "Realty",
    slug: "natural-diamonds-love"
  },
];


export default function LatestBlogs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredList =
    activeCategory === 'All'
      ? blogList
      : blogList.filter((blog) => blog.category === activeCategory);

  const selectedBlog = filteredList[selectedIndex] ?? filteredList[0];

  return (
    <div className="pt-7 pb-24 bg-white">
      <div>
        <motion.h2 
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Latest Blogs
        </motion.h2>

        {/* Tabs */}
        <motion.div 
          className="flex justify-center flex-wrap gap-3 md:gap-6 border-b border-primary mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(0);
              }}
              className={clsx(
                "px-3 pb-1 border-b-2 transition",
                activeCategory === cat
                  ? "font-bold border-primary text-primary"
                  : "font-medium border-transparent text-heading hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="container">
        <div className="px-0 lg:px-[50px]">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Left: Featured Blog */}
            <motion.div 
              className="w-full lg:w-[55%] overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {selectedBlog && (
                <>
                  <Image
                    src={selectedBlog.image}
                    alt="Blog"
                    width={800}
                    height={348}
                    className="object-cover w-full h-[348px] rounded-lg"
                  />
                  <div className="mt-7 max-w-xl">
                    <h3 className="text-lg font-semibold mb-4">{selectedBlog.title}</h3>
                    <p className="text-sm text-heading mb-6">{selectedBlog.content}</p>
                    <Link href={`blogs/${selectedBlog.slug}`} className="inline-block bg-third text-white text-[9px] font-medium tracking-wide uppercase px-4 py-1.5 rounded-full hover:bg-primary transition cursor-pointer">
                      Read More
                    </Link>
                  </div>
                </>
              )}
            </motion.div>

            {/* Right: Scrollable Blog List */}
            <div className="w-full lg:w-[45%] space-y-4 max-h-[520px] overflow-y-auto lg:pr-14 custom-scrollbar">
              {filteredList.map((blog, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="border-b pb-4 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <p
                    className={clsx(
                      "text-lg font-medium group-hover:text-primary",
                      selectedIndex === index && "text-primary font-semibold"
                    )}
                  >
                    {blog.title}
                  </p>
                </motion.div>
              ))}
              {filteredList.length === 0 && (
                <p className="text-sm text-gray-500">No blogs in this category.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
