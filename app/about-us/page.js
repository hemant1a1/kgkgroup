import Breadcrumb from '@/components/Breadcrumb2';
import KGKAdvantage from '@/components/KGKAdvantage';
import TheLegacy from '@/components/TheLegacy';
import Leadership from '@/components/Leadership';

import bgImage from '@/assets/images/banners/about-banner-1.jpg';
import leadershipBg1 from '@/assets/images/navrattan-kothari.jpg';
import leadershipBg2 from '@/assets/images/sanjay-kothari.jpg';
import leadershipBg3 from '@/assets/images/sandeep-kothari.jpg';

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

      <div className="relative">
        <Leadership
          index={0}
          zIndex={10}
          title="Navrattan Kothari"
          subtitle="Patriarch"
          backgroundImage={leadershipBg1.src}
          paragraph={
            <>
              <p>
                Since 1962, Mr. Navrattan Kothari has been the guiding force behind KGK Group,
                transforming it into a modern multinational with world-class infrastructure and operations.
                Under his visionary leadership, KGK has continually innovated, expanded into new markets,
                and earned global recognition.
              </p>
              <p>
                More than just building a business, Mr. Kothari has shaped a company driven by values,
                placing trust, integrity, ethics, and corporate responsibility at its core.
                As the Patriarch, he continues to steer KGK with wisdom and foresight, inspiring teams worldwide.
              </p>
            </>
          }
        />
        <Leadership
          index={1}
          zIndex={20}
          title="Sanjay Kothari"
          subtitle="Vice Chairman"
          backgroundImage={leadershipBg2.src}
          imagePosition="left"
          paragraph={
            <>
              <p>
                Based in Hong Kong, Sanjay Kothari is driving KGK Group’s expansion into new markets, steering the business to new heights. Overseeing the entire gems and jewelry value chain, from mining to retail, he plays a pivotal role in the group’s continued success.
              </p>
              <p>
                His journey with KGK began with establishing diamond manufacturing in Mumbai. Since then, he has spearheaded the development of multiple verticals, including international sales and marketing, jewelry manufacturing, gemstone mining, jewelry retail, and real estate. Additionally, he leads the group’s IT and corporate identity initiatives, ensuring a strong, cohesive global presence.
              </p>
            </>
          }
        />
        <Leadership
          index={2}
          zIndex={30}
          title="Sandeep Kothari"
          subtitle="Managing Director"
          backgroundImage={leadershipBg3.src}
          paragraph={
            <>
              <p>
                Since joining KGK Group in 1990, Sandeep Kothari has played a pivotal role in the growth of the diamond procurement and processing business on a global scale. His strategic leadership has significantly expanded the group’s footprint in the industry.
              </p>
              <p>
                Now based in Antwerp, the world’s leading diamond hub, he has been instrumental in driving polished diamond sales across Europe. His expertise in fostering strong, long-term partnerships with renowned mining companies has further solidified KGK’s reputation as a trusted leader in the global diamond trade.
              </p>
            </>
          }
        />
      </div>

    </>
  );
}
