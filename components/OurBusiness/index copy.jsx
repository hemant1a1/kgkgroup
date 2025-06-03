'use client';

import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

// Image imports
import gemstonesImg from '@/assets/images/business/gemstones.jpg';
import miningImg from '@/assets/images/business/mining.jpg';
import diamondsImg from '@/assets/images/business/diamonds.jpg';
import jewelleryImg from '@/assets/images/business/jewellery.jpg';
import retailImg from '@/assets/images/business/retail.jpg';
import realEstateImg from '@/assets/images/business/real-estate.jpg';
import stonesImg from '@/assets/images/business/stones.jpg';
import technologyImg from '@/assets/images/business/technology.jpg';
import hospitalityImg from '@/assets/images/business/hospitality.jpg';

const businessItems = [
  {
    key: 'gemstones',
    title: 'Gemstones',
    image: gemstonesImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 'mining',
    title: 'Mining',
    image: miningImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 'diamonds',
    title: 'Diamonds',
    image: diamondsImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 'jewellery',
    title: 'Jewellery',
    image: jewelleryImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 'retail',
    title: 'Retail',
    image: retailImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 'real-estate',
    title: 'Real Estate',
    image: realEstateImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 'stones',
    title: 'Stones',
    image: stonesImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 'technology',
    title: 'Technology & Innovation',
    image: technologyImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 'hospitality',
    title: 'Hospitality',
    image: hospitalityImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

export default function OurBusiness() {
  const [active, setActive] = useState(businessItems[0]);

  const handleNext = () => {
    const currentIndex = businessItems.findIndex((item) => item.key === active.key);
    const nextIndex = (currentIndex + 1) % businessItems.length;
    setActive(businessItems[nextIndex]);
  };

  return (
    <div className="md:min-h-screen bg-white py-4">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:pl-12 gap-x-12 w-full mb-12">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading whitespace-nowrap">
                Business
            </h2>

            {/* Paragraph + Line */}
            <div className="flex flex-col w-full relative lg:-right-14">
                <p className="text-[19px] tracking-[0px] leading-[31px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
                <div className="flex items-center">
                    <p className="md:text-lg lg:text-xl leading-relaxed text-black">
                    eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="flex-grow h-0.5 bg-light-gray ml-14" />
                </div>
            </div>
        </div>



        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Preview */}
            <div
            className="hidden md:block relative w-full h-[520px] overflow-hidden shadow-lg col-span-1 md:col-span-1 cursor-pointer"
            onClick={handleNext}
            >
            <AnimatePresence mode="wait">
                <motion.div
                key={active.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
                >
                <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover grayscale opacity-80 blur-[1.5px] scale-[1.1] object-[-20px] transition-transform"
                    placeholder="blur"
                />
                <div className="absolute inset-0 pb-6 flex flex-col justify-end text-white bg-gradient-to-t from-black to-black/30">
                    <h3 className="text-[22px] tracking-[9px] uppercase font-normal px-11">
                    {active.title.toUpperCase()}
                    </h3>
                    <p className="mt-12 pl-11 pr-[70px] text-[19px] tracking-[0px] leading-[31px]">{active.description}</p>
                    <button className="mx-11 mt-11 mb-[1px] px-5 py-2 bg-white text-black font-light text-sm uppercase tracking-widest rounded-full w-fit hover:bg-gray-200 transition">
                    Discover More
                    </button>
                </div>
                </motion.div>
            </AnimatePresence>
            </div>

            {/* Small Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:col-span-2">
            {businessItems
                .filter((item) => item.key !== active.key) 
                .map((item) => (
                <button
                    key={item.key}
                    onClick={() => setActive(item)}
                    className={classNames(
                    'relative w-full h-full overflow-hidden hover:opacity-80 transition'
                    )}
                >
                    <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    />
                    <div className="relative md:absolute inset-0 flex items-end justify-center">
                    <span className="text-white font-normal text-base tracking-widest text-center px-2 pb-6">
                        {item.title.toUpperCase()}
                    </span>
                    </div>
                </button>
                ))}
            </div>
        </div>

        {/* Mobile view: stacked cards */}
        <div className="grid md:hidden grid-cols-1 gap-6">
          {businessItems.map((item) => (
            <div key={item.key} className="relative w-full overflow-hidden shadow-lg rounded-lg">
              <div className="relative w-full h-60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
