'use client';

import { motion } from 'framer-motion';


export default function BlogDetailContent() {
  return (
    <motion.article 
        className="prose lg:prose-lg max-w-none font-myriad"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
    >
        

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight lg:leading-[1.4] text-heading mb-6">
            Wedding Jewellery Trends for the Modern Bride
        </h1>

        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">Your wedding day is a momentous occasion, a celebration of love, commitment, and the beginning of a new chapter in your life. As a bride, every aspect of your special day should reflect your unique style and personality, from the venue to the decor, and of course, the wedding jewellery you choose to adorn yourself with. Jewellery has the power to elevate your bridal look, adding a touch of sophistication, glamour, and timeless elegance. This blog explores the latest wedding jewellery trends for the modern bride, ensuring you are adorned with pieces that reflect your individuality and the timeless beauty of your love story.</p>

        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal text-heading mb-2">
            Top 5 Wedding Jewellery Options For You
        </h2>
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">Of all the options available, here are the top five wedding jewellery options that are most popular when it comes to getting a unique and classic appearance.</p>

        <h3 className="text-base lg:text-[35px] leading-[1.4] mb-2">
            Diamond Jewellery
        </h3>
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">Diamonds have long been associated with love, commitment, and eternal beauty, making them an ideal choice for wedding jewellery. From classic solitaire diamond engagement rings to dazzling diamond necklaces and earrings, these precious gems exude a sense of luxury and sophistication that complements any bridal ensemble. KGK Group’s exquisite collection of timeless diamond jewellery is meticulously crafted to meet the highest standards of quality and craftsmanship. Our skilled artisans carefully select each diamond, ensuring that it meets the strictest criteria for cut, colour, clarity, and carat weight, resulting in pieces that truly capture the essence of timeless elegance..</p>

        <h3 className="text-base lg:text-[35px] leading-[1.4] mb-2">
            Gold Jewellery
        </h3>
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">Gold jewellery has made a remarkable comeback, especially in tones of rose and white gold, which offer a modern take on a classic material. The warm hues of gold complement a wide range of skin tones and wedding themes, from rustic outdoor ceremonies to lavish ballroom events. Modern brides are choosing gold pieces as wedding jewellery that are both bold and intricate, such as statement necklaces or dainty chain bracelets, infusing traditional elegance with contemporary design. KGK Group’s selection of gold jewellery showcases the perfect blend of craftsmanship and style, catering to the modern bride who cherishes both innovation and tradition.</p>

        <h3 className="text-base lg:text-[35px] leading-[1.4] mb-2">
            Pearl Jewellery
        </h3>
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">Pearls have long been associated with purity, grace, and timeless elegance, making them a popular choice for bridal jewellery. Whether you opt for a classic strand of pearls or a modern twist on this timeless gem, pearl jewellery is sure to add a touch of sophistication and understated glamour to your wedding day look. KGK Group’s pearl wedding jewellery collection showcases the beauty and versatility of these natural treasures. From delicate freshwater pearl earrings to statement South Sea pearl necklaces, our pieces are designed to complement a wide range of bridal styles and preferences.</p>

        <h3 className="text-base lg:text-[35px] leading-[1.4] mb-2">
            Semi-Precious Gemstone Jewellery
        </h3>
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">For the bride seeking to add a touch of vibrant colour and personality to her wedding day look, semi-precious gemstones are an excellent choice. From the rich hues of garnets and amethysts to the captivating shades of topaz and citrine, these natural gems offer a stunning array of colours and hues to complement any bridal ensemble. KGK Group’s semi-precious gemstone wedding jewellery collection celebrates the beauty and diversity of nature’s bounty. Our skilled artisans expertly cut and set each gemstone, ensuring that their unique characteristics and vibrant hues are showcased to their full potential.</p>

        <h3 className="text-base lg:text-[35px] leading-[1.4] mb-2">
            Precious Gemstone Jewellery
        </h3>
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">Precious stones, including sapphires, rubies, and emeralds, bring a regal element to the bridal ensemble. The modern bride is embracing these vibrant gems not only for their stunning beauty but also for their ability to make a statement. Whether set in a tiara, adorning a necklace, or gracing the wrists with bangles, precious stones add a layer of luxury and personality to the wedding attire. KGK Group’s precious stones wedding jewellery is designed to meet the desires of brides who seek the ultimate in elegance and opulence.</p>

        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal text-heading mb-2">
            Conclusion
        </h2>
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">Your wedding day is one of the most important days of your life, and the jewellery you choose plays a significant role in making it unforgettable. The modern bride deserves options that are as unique and beautiful as her love story. At KGK Group, we understand that your wedding day is a once-in-a-lifetime event, and we are committed to helping you find the perfect pieces to complement your bridal look. With our extensive wedding jewellery collection of diamond, gold, pearl, semi-precious, and precious gemstone jewellery, you are sure to find pieces that not only reflect your unique style but also capture the essence of timeless elegance and sophistication.</p>

        
    </motion.article>
  );
}
