'use client';

import Image from 'next/image';
import realEstateImage from '@/assets/images/building-1.jpg';

export default function RealEstateSection() {
  return (
    <div className="w-full bg-white">
      <div className="lg:pl-[100px] flex flex-col lg:flex-row items-center gap-0">
        {/* Left Text Section: 50% - 35px */}
        <div className="w-full lg:w-5/12 pr-14">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] lg:leading-[46px] font-normal text-heading mb-6">
            A Passion for Excellence,<br className="hidden sm:block" />
            Built to Last
          </h2>
          <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-black text-justify">
            Building on its legacy of craftsmanship and trust, the KGK Group expanded into real estate development in 2010.
            Just as jewellery is treasured as an investment, the brand recognizes the significance of property as a cornerstone
            of value and prosperity. Guided by the same principles that positioned the brand as a leader in the gems and jewellery
            industry, KGK brings dedication and precision to its real estate ventures.
          </p>
        </div>

        {/* Right Image Section: 50% + 35px */}
        <div className="w-full lg:w-7/12 relative lg:min-h-[480px]">
          <Image
            src={realEstateImage}
            alt="KGK Real Estate"
            fill
            className="w-full h-full object-contain object-right"
            priority
          />
        </div>
      </div>
    </div>
  );
}
