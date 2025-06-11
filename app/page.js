
import HeroSlider from "@/components/Home/HeroSlider";
import Legacy from "@/components/Home/Legacy";
import OurBusiness from "@/components/Home/OurBusiness";
import OurPresence from "@/components/Home/OurPresence";
import LifeAtKGK from "@/components/Home/LifeAtKGK";
import BrandSlide from "@/components/Home/BrandSlide";
import EventsMedia from "@/components/Home/EventsMedia";
import Awards from "@/components/Home/Awards";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import Blogs from "@/components/Home/Blogs";
import Newsletter from "@/components/Home/Newsletter";

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
