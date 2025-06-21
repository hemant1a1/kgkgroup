'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import blog1 from '@/assets/images/blog1.jpg';
import blog2 from '@/assets/images/blog2.jpg';

const categories = [
  { label: 'Healthcare', href: '/category/healthcare' },
  { label: 'Gemstone', href: '/category/gemstone' },
  { label: 'Mining', href: '/category/mining' },
  { label: 'Jewellery', href: '/category/jewellery' },
  { label: 'Retail', href: '/category/retail' },
  { label: 'Realty', href: '/category/realty' },
  { label: 'Stones', href: '/category/stones' },
];

export default function BlogSidebar() {
  return (
    <aside className="space-y-10 font-myriad">
      {/* Search */}
      <motion.div
        className="max-w-[14rem] mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center w-full border border-[#cfcfcf] rounded-full overflow-hidden px-4 py-2 bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 border-none focus:outline-none bg-transparent text-xs placeholder-[#868686]"
          />
          <div className="h-5 w-px bg-[#cfcfcf] mx-3"></div>
          <button className="text-[#868686]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 mb-4">
            Popular Posts
          </span>
        </div>
        <div className="space-y-4">
          <PopularPost title="Jewellery Care 101: How To Maintain Your Precious & Semi-precious Stones..." image={blog1} />
          <PopularPost title="The Elegance of Pear Cut Diamonds in Modern Jewellery" image={blog2} />
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 mb-4">
            Categories
          </span>
        </div>
        <ul className="text-third text-lg space-y-2.5">
          {categories.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="hover:text-primary transition-colors duration-200">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 mb-4">
            Tags
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Wedding', 'Bride', 'Modern', 'Diamond', 'Gold', 'Pearl', 'Precious', 'Semi-Precious'].map(tag => (
            <span key={tag} className="bg-[#ececec] text-base text-third px-3 py-1">{tag}</span>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}

function PopularPost({ title, image }) {
  return (
    <div className="flex gap-3 items-center">
      <Image src={image} alt={title} width={60} height={60} className="w-20 h-20 object-cover" />
      <div>
        <p className="text-sm line-clamp-3">{title}</p>
        <Link href="" className="inline-block bg-third text-white text-[7px] font-medium tracking-wide uppercase px-2 py-1 rounded-full hover:bg-primary transition cursor-pointer mt-1">Read More</Link>
      </div>
    </div>
  );
}
