'use client';

import React, { useState } from 'react';
import HoverButton from "@/components/HoverButton";
import YoutubeVideoModal from '@/components/YoutubeVideoModal';

import { motion } from "framer-motion";

const Legacy = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white  py-4">
        <div className="container flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0">
          <div className="relative w-full lg:w-1/2">
            {/* Background Box */}
            <div className="absolute -left-14 bottom-0 w-2/3 h-[124px] bg-gray-100 rounded-tr-lg rounded-br-lg z-0"></div>

            {/* Main Image */}
            <div className="relative pb-[76px] pt-12">
                <div className="relative w-full max-h-[600px] min-h-[400px] h-[70vh] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer group" onClick={() => setModalOpen(true)}>
                  <div className="absolute inset-0 legacy-bg bg-cover bg-left-center grayscale"></div>
                    <div className="absolute overflow-hidden w-[55%] h-[68%] hidden group-hover:block transition-all duration-300">
                      <video
                        width="500"
                        height="500"
                        loop
                        autoPlay
                        muted
                        className="absolute w-full h-full object-cover"
                      >
                        <source src="/videos/v1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <HoverButton type="white" groupHover>WATCH OUR STORY</HoverButton>
                    </div>
                  </div>
              </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-24 lg:pr-12">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Legacy: From Vision to Global Leadership
            </motion.h2>
            <motion.p
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              The story of KGK Group began when Shri Keshrimalji Kothari travelled to Burma and began a passionate pursuit of trading gemstones in India. He started doing business from Burma. His dedication and integrity laid the foundation for a global presence in the gemstone and jewellery industry. Shri Ghisilalji Kothari, inspired by his father’s vision, expanded the group’s horizons, fostering innovation and establishing a tradition of excellence.
            </motion.p>

            <motion.p
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Under the dynamic leadership of Mr. Navrattan Kothari, the third generation transformed KGK Group into a global jewellery and gemstone brand, earning a reputation as a premium manufacturer with operations spanning across continents. Continuing this legacy, Mr. Sanjay Kothari and Mr. Sandeep Kothari have been key drivers of growth and excellence, paving the way for the fifth generation, including Mr Saransh, Mr Vedant and Mr Arnav to bring fresh, new-age insights.
            </motion.p>

            <motion.button
              className="border border-gray-700 text-sm font-normal text-black tracking-widest uppercase px-6 py-2 rounded-full hover:bg-gray-100 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              DISCOVER MORE
            </motion.button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <YoutubeVideoModal
          youtubeId="xNCqCOu5Q6U"
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Legacy;
