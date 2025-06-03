
import HeroSlider from "@/components/HeroSlider";
import Legacy from "@/components/Legacy";
import OurBusiness from "@/components/OurBusiness";
import OurPresence from "@/components/OurPresence";
import LifeAtKGK from "@/components/LifeAtKGK";
import BrandSlide from "@/components/BrandSlide";
import EventsMedia from "@/components/EventsMedia";
import Awards from "@/components/Awards";
import UpcomingEvents from "@/components/UpcomingEvents";
import Blogs from "@/components/Blogs";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Legacy />
      <OurBusiness />
      <OurPresence />
      <LifeAtKGK />
      <BrandSlide />
      <EventsMedia />
      <Awards />
      <UpcomingEvents />
      <Blogs />
      <Newsletter />
    </>
  );
}
