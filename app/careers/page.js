
import Breadcrumb from '@/components/Breadcrumb3';
import JoinTeam from '@/components/JoinTeam';
import Transcending from '@/components/Transcending';
import LifeAtKGK from "@/components/Home/LifeAtKGK";

import bgImage from '@/assets/images/banners/career-banner.jpg';

export default function Career() {
  return (
    <>
      <Breadcrumb
        heading="Joining the KGK family"
        subheading="OPPORTUNITIES TO SHINE"
        bgImage={bgImage}
      />
      <JoinTeam />
      <Transcending />
      <LifeAtKGK />
    </>
  );
}
