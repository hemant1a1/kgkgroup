'use client';

import Image from 'next/image';
import kitchenImg from '@/assets/images/kitchen.jpg';
import livingImg from '@/assets/images/living.jpg';

const StonesSemiPrecious = () => {
  return (
    <section className="bg-[#fff5e7] py-16 px-4 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-y-8">
        {/* LEFT 60% */}
        <div className="space-y-8">
          {/* Top Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-6">
              A Testament to Quality <br className="hidden lg:block" />
              and Elegance
            </h2>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black max-w-xl">
              Natural stones reflect KGK Group’s unwavering commitment to sustainable sourcing and superior craftsmanship. Through the brand’s collaboration with Lapitec, the renowned Italian producer of sintered stone, KGK Stones brings world-class materials and cutting-edge design to India.
            </p>
          </div>

        </div>

        <div className="overflow-hidden rounded-tr-[20px] h-[250px]">
            <Image
              src={kitchenImg}
              alt="Kitchen"
              className="w-full h-full object-cover rounded-tr-[20px]"
              priority
            />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-y-8">
        <div className="overflow-hidden rounded-bl-[20px] h-[248px]">
          <Image
            src={livingImg}
            alt="Living Room"
            className="w-full h-full object-cover rounded-bl-[20px]"
            priority
          />
        </div>

        <div className="flex items-center">
          <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black max-w-xl lg:px-24">
            Rooted in a legacy of trust and excellence, KGK Stones continues to uphold the Group’s standards, offering materials that elevate spaces with timeless durability, refined elegance, and unmatched sophistication.
          </p>
        </div>

      </div>
      
    </section>
  );
};

export default StonesSemiPrecious;
