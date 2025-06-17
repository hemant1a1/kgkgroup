import Breadcrumb from '@/components/Breadcrumb2';
import KGKAdvantage from '@/components/KGKAdvantage';
import TheLegacy from '@/components/TheLegacy';
import LeadershipSection from '@/components/LeadershipSection';
import MilestoneTimeline from '@/components/MilestoneTimeline';
import OurBusiness from "@/components/Home/OurBusiness";
import Newsletter from "@/components/Home/Newsletter";

import bgImage from '@/assets/images/banners/about-banner-1.jpg';

export default function AboutUs() {
  return (
    <>
      <Breadcrumb
        heading={
          <>
            Crafting Brilliance,
            <br className="hidden lg:block" />
            Defining Excellence
          </>
        }
        subheading={
          <>
            Shaping masterpieces with integrity,
            <br className="hidden lg:block" />
            innovation, and unmatched craftsmanship
          </>
        }
        bgImage={bgImage}
      />
      <KGKAdvantage />
      <TheLegacy />
      <LeadershipSection />
      <MilestoneTimeline />
      <OurBusiness />
      <Newsletter />
    </>
  );
}
