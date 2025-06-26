'use client';

import Image from 'next/image';

import stones1 from '@/assets/images/stones-1.jpg';
import stones2 from '@/assets/images/stones-2.png';

const KGKStonesSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:pl-0 md:pr-7 gap-6">
        {/* Left Image */}
        <div className="w-full md:w-[26%]">
          <Image
            src={stones1}
            alt="KGK Quarry"
            className="rounded-3xl lg:rounded-l-none lg:rounded-r-3xl w-full h-[284px] object-cover"
          />
        </div>

        {/* Center Text */}
        <div className="w-full md:w-[38%]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4">
            Nature’s Treasures, Perfected by KGK Stones
          </h2>
          <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black max-w-lg lg:pr-14">
            Discover a world where nature’s artistry harmonizes with KGK Group’s legacy of innovation and craftsmanship.
            KGK Stones showcases a collection of marbles, granite, and quartzite, each piece sourced from the quarry’s
            maintained and owned by the brand. Every stone reflects the timeless beauty of Earth’s treasures, brought to
            life from mines to retail through state-of-the-art technology.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[36%] flex justify-center md:justify-start h-[300px] lg:pt-6 lg:ml-[-45px]">
          <Image
            src={stones2}
            alt="Stacked Stones"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default KGKStonesSection;
