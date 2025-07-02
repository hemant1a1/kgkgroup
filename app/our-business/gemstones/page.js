
import Breadcrumb from '@/components/Breadcrumb';
import Precious from '@/components/Gemstones/Precious';
import SemiPrecious from '@/components/Gemstones/SemiPrecious';
import SourcingWorld from '@/components/Gemstones/SourcingWorld';
import GemstoneManufacturing from '@/components/Gemstones/GemstoneManufacturing';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import Contact from '@/components/Gemstones/Contact';



import bgImage from '@/assets/images/banners/gemstones-banner-1.jpg';

 

export default function Gemstones() {
  return (
    <>
      <Breadcrumb
        heading="Gemstones"
        subheading="An irresistible spectrum"
        bgImage={bgImage}
      />
      <Precious />
      <SemiPrecious />
      <SourcingWorld />
      <GemstoneManufacturing />
      <DistributionMap />
      <Contact />

    </>
  );
}
