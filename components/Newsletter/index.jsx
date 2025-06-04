
import Image from 'next/image';

import newsletterImg from '@/assets/images/scxzx.jpg';

export default function Newsletter() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side - Subscription Form */}
      <div className="w-full md:w-1/2 bg-primary flex flex-col justify-center px-5 md:px-20 py-20 text-white">
        <h2 className="text-4xl font-normal mb-4">Stay in touch</h2>
        <p className="text-xl font-light mb-8">Subscribe to our newsletter!</p>
        <div className="flex w-full max-w-md h-[57px]">
            <input
                type="email"
                placeholder="Enter your E-mail"
                className="flex-1 px-4 text-white border border-mid-gray border-r-0 h-full focus:outline-none placeholder:text-white placeholder:text-[12px] placeholder:leading-[18px] placeholder:font-light"
            />
            <button
                className="h-full px-6 border border-mid-gray bg-mid-gray hover:bg-mid-gray text-[18px] leading-[27px] text-primary uppercase font-normal"
            >
                SUBSCRIBE
            </button>
        </div>


      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-1/2 h-[360px]">
        <Image
          src={newsletterImg}
          alt="Workforce"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
