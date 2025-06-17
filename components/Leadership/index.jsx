'use client';

import React from 'react';

export default function LeadershipSection({
  title,
  subtitle,
  paragraph,
  backgroundImage,
  imagePosition = 'right',
  zIndex,
}) {
  const TextSection = (
    <div className="w-full md:w-6/12 px-4 lg:px-[50px] flex items-center h-full">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4">
          {title}
        </h2>
        <p className="text-[20px] tracking-[1px] leading-[25px] text-black italic font-medium mb-10">
          {subtitle}
        </p>
        <div className="text-black space-y-6">{paragraph}</div>
      </div>
    </div>
  );

  const ImageSection = <div className="hidden md:block w-full md:w-6/12 h-full" />;

  return (
    <section
      className="w-full h-[89vh] min-h-[600px] sticky top-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: zIndex,
      }}
    >
        <div className="container h-full">
            <div className="flex flex-col md:flex-row items-center gap-2 h-full">
                {imagePosition === 'left' ? (
                    <>
                    {ImageSection}
                    {TextSection}
                    </>
                ) : (
                    <>
                    {TextSection}
                    {ImageSection}
                    </>
                )}
            </div>
        </div>
    </section>
  );
}
