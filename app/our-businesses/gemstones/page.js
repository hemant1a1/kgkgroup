
import Breadcrumb from '@/components/Breadcrumb';
import Precious from '@/components/gemstones/Precious';
import SemiPrecious from '@/components/gemstones/SemiPrecious';
import SourcingWorld from '@/components/gemstones/SourcingWorld';
import GemstoneManufacturing from '@/components/gemstones/GemstoneManufacturing';
import DistributionMap from '@/components/gemstones/DistributionMap';
import Contact from '@/components/gemstones/Contact';

import VerticalStepNav from '@/components/gemstones/VerticalStepNav';

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
