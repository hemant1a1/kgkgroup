'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

// Image imports from assets/images
import MartinFlyerBlack from '@/assets/images/martin-flyer-black.webp';
import EnticeBlack from '@/assets/images/entice-black.webp';
import GreggRuthBlack from '@/assets/images/gregg-ruth-black.webp';

import BgMartinFlyer from '@/assets/images/bg-martin-flyer.jpg';
import BgEntice from '@/assets/images/bg-entice.jpg';
import BgGreggRuth from '@/assets/images/bg-gregg-ruth.jpg';

const brands = [
  {
    name: 'Martin Flyer',
    logo: MartinFlyerBlack,
    bgImage: BgMartinFlyer,
  },
  {
    name: 'Entice',
    logo: EnticeBlack,
    bgImage: BgEntice,
  },
  {
    name: 'GREGG RUTH',
    logo: GreggRuthBlack,
    bgImage: BgGreggRuth,
  },
];

export default function BrandSlide() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="flex flex-col md:flex-row w-full md:min-h-[390px] md:h-[60vh] bg-light-gray overflow-hidden">
        {/* Left: Title Section */}
        <div className="w-full md:w-[33%] p-[50px] flex items-center justify-start text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading">
          KGK Brands
        </div>

        {/* Right: Brand Grid */}
        <div className="w-full md:w-[66.98%] grid grid-cols-3">
          {brands.map((brand, i) => {
            const isActive = hoveredIndex === i || (hoveredIndex === null && i === 1);

            return (
              <div
                key={i}
                className="relative overflow-hidden cursor-pointer flex items-center justify-center group transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image Slide */}
                <div
                  className={clsx(
                    'absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out z-10',
                    isActive ? 'translate-x-0' : 'translate-x-full'
                  )}
                >
                  <Image
                    src={brand.bgImage}
                    alt={`${brand.name} background`}
                    fill
                    className="object-cover"
                  />
                  
                </div>

                {/* Brand Logo */}
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={150}
                  height={80}
                  className={clsx(
                    'z-20 transition duration-300 w-[280px] h-78 object-contain',
                    isActive ? 'invert' : ''
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
