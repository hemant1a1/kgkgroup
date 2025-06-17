'use client';

import Image from 'next/image';
import about2 from '@/assets/images/about-2.jpg';

export default function TheLegacy() {
  return (
    <div className="relative pt-0 pb-10 md:pb-16 lg:pb-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center px-0 lg:pl-[32px] lg:pr-[50px]">

          {/* Left Text */}
          <div className="relative w-full lg:w-[45%] mb-12 lg:mb-0 z-10">
            <Image src={about2} alt="about" className="w-full h-[360px] object-cover" />
          </div>

          {/* Right Absolute Icons Layout */}
          <div className="w-full lg:w-[55%] pl-0 lg:pl-20">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4">
                The Legacy
            </h2>
            <div className="w-full h-px bg-[#79869e] absolute left-0 right-0 z-0"></div>
            <p className="leading-7 mb-8 mt-6">
                The KGK Group’s journey began in 1905 when Shri Keshrimalji Kothari started trading Burmese colored gemstones in Jaipur, India. His values of integrity and dedication continue to shape the business today. Building on his father’s vision, Shri Ghisilalji Kothari fostered a culture of innovation and diversity, driving the group’s early growth and expansion.
            </p>

            <p className="leading-7">
                Under the leadership of the third generation, the KGK Group evolved into a leading multinational corporation. Guided by the founding principles of faith, respect, and integrity, the brand remains committed to upholding this legacy.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
