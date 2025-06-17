'use client';

import Image from 'next/image';
import Icon1 from '@/assets/images/office-1.png';
import Icon2 from '@/assets/images/operation-1.png';
import Icon3 from '@/assets/images/team-1.png';

export default function KGKAdvantage() {
  return (
    <div className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center px-0 lg:px-[50px] gap-2">

          {/* Left Text */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-5">
              The KGK Advantage
            </h2>
            <p className="text-[15px] leading-[25px] tracking-[0px] font-normal text-black">
              KGK Group’s unparalleled, vertically integrated business spans the entire gems and jewelry value chain, from mining to retail. This seamless integration ensures a strong industry presence, delivering significant competitive advantages at every stage.
            </p>
          </div>

          {/* Right Absolute Icons Layout */}
          <div className="w-full lg:w-7/12 relative h-[380px]">
            {/* Icon 1 */}
            <div className="absolute top-0 left-0 flex items-start gap-6">
              <Image src={Icon1} alt="Office" className="w-[153px] h-[130px]" />
              <p className="text-xl text-heading font-bold font-[Cardo] mt-2 md:max-w-60">
                Global headquarters in Hong Kong
              </p>
            </div>

            {/* Icon 2 */}
            <div className="absolute top-[28%] left-[90px] flex items-center gap-8">
              <Image src={Icon2} alt="Operation" className="w-[95px] h-[164px]" />
              <p className="text-xl text-heading font-bold font-[Cardo] mt-2 md:max-w-sm">
                Operations across Asia, North & South 
                America, Europe, and Africa
              </p>
            </div>

            {/* Icon 3 */}
            <div className="absolute bottom-0 left-0 flex items-end gap-6">
              <Image src={Icon3} alt="Team" className="w-[153px] h-[130px]" />
              <p className="text-xl text-heading font-bold font-[Cardo] mt-2 md:max-w-60">
                A dynamic team of 15,000 professionals
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
