
import Breadcrumb from '@/components/Breadcrumb/index.jsx';
import Precious from '@/components/gemstones/Precious/index.jsx';
import SemiPrecious from '@/components/gemstones/SemiPrecious/index.jsx';
import SourcingWorld from '@/components/gemstones/SourcingWorld/index.jsx';
import GemstoneManufacturing from '@/components/gemstones/GemstoneManufacturing/index.jsx';
import DistributionMap from '@/components/gemstones/DistributionMap/index.jsx';
import Contact from '@/components/gemstones/Contact/index.jsx';


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
