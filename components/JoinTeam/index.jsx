'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ease = [0.4, 0, 0.2, 1]; // Material-style smooth

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,      // Stagger per card
      duration: 0.6,
      ease,
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function JoinTeam() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="bg-white py-12">
      <div className="container">
        <div className="px-0 lg:px-[70px] max-w-6xl mx-auto">
          <motion.h2 
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Join Our Team
          </motion.h2>

          <motion.p 
            className="text-center mb-10 lg:px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-7">
            {/* Left Column – Job Cards */}
            <div className="w-full lg:w-7/12">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-7"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
              >
                {[1, 2, 3, 4].map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-dark-gray rounded-xl px-9 py-7 hover:shadow-md"
                    variants={fadeInUp}
                    custom={i}
                  >
                    <p className="text-xs font-medium text-dark-gray mb-1">Job type</p>
                    <h3 className="text-xl font-semibold mb-3">Job Title</h3>
                    <p className="text-sm text-dark-gray mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="cursor-pointer px-4 py-1.5 text-xs font-medium bg-primary uppercase text-white rounded-full">
                      Read More
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column – Application Form */}
            <motion.div
              className="w-full lg:w-5/12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-primary text-white rounded-xl px-12 py-4 space-y-3">
                <motion.h3
                  className="text-center text-lg mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  Join Our Team
                </motion.h3>

                {[
                  { placeholder: 'Name', type: 'text' },
                  { placeholder: 'Email', type: 'email' },
                  { placeholder: 'Mobile', type: 'text' },
                ].map((field, i) => (
                  <motion.input
                    key={i}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b border-[#545750] py-2 placeholder:text-white/60 focus:outline-none"
                    custom={i + 1}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                ))}

                <motion.select
                  className="w-full bg-transparent border-b border-[#545750] py-2 text-white focus:outline-none"
                  initial="hidden"
                  whileInView="visible"
                  custom={4}
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <option className="text-black" value="">Job Title</option>
                  <option className="text-black" value="developer">Developer</option>
                  <option className="text-black" value="designer">Designer</option>
                </motion.select>

                <motion.textarea
                  rows={3}
                  placeholder="About yourself"
                  className="w-full bg-transparent border-b border-[#545750] py-2 placeholder:text-white/70 focus:outline-none resize-none"
                  initial="hidden"
                  whileInView="visible"
                  custom={5}
                  viewport={{ once: true }}
                  variants={fadeInUp}
                />

                <motion.div
                  className="flex items-center gap-3"
                  initial="hidden"
                  whileInView="visible"
                  custom={6}
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <label className="px-4 py-1.5 bg-primary text-xs font-medium text-white rounded-full cursor-pointer">
                    Choose file
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  <span className="text-[11px] text-white font-normal italic">
                    Upload your Resume (doc, pdf, docx)
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial="hidden"
                  whileInView="visible"
                  custom={7}
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <input
                    type="text"
                    placeholder="Captcha"
                    className="w-1/2 bg-transparent border-b border-[#545750] py-2 placeholder:text-white/60 focus:outline-none"
                  />
                  <span className="px-4 py-1.5 bg-primary text-xs font-medium rounded-full">1065</span>
                </motion.div>

                <motion.button
                  className="w-full py-2.5 bg-primary text-white text-lg font-medium rounded-full mt-4"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  custom={8}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Send Application
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
