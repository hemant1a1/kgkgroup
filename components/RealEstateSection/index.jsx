'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import realEstateImage from '@/assets/images/building-1.jpg';

export default function RealEstateSection() {
  return (
    <div className="w-full bg-white">
      <div className="lg:pl-[100px] flex flex-col lg:flex-row items-center gap-0">
        {/* Left Text Section */}
        <motion.div
          className="w-full lg:w-5/12 pr-14"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-[36px] lg:leading-[46px] font-normal text-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            A Passion for Excellence,<br className="hidden sm:block" />
            Built to Last
          </motion.h2>
          <motion.p
            className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-black text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            Building on its legacy of craftsmanship and trust, the KGK Group expanded into real estate development in 2010.
            Just as jewellery is treasured as an investment, the brand recognizes the significance of property as a cornerstone
            of value and prosperity. Guided by the same principles that positioned the brand as a leader in the gems and jewellery
            industry, KGK brings dedication and precision to its real estate ventures.
          </motion.p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="w-full lg:w-7/12 relative lg:min-h-[480px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={realEstateImage}
            alt="KGK Real Estate"
            fill
            className="w-full h-full object-contain object-right"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
