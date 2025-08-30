import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import About from "@/utils/home/About";
import Advertise from "@/utils/home/Advertise";
import Headline from "@/utils/home/Headline";
import Hero from "@/utils/home/Hero";
import Pricing from "@/utils/home/Pricing";
import Projects from "@/utils/home/Projects";
import Service from "@/utils/home/Service";
import Skills from "@/utils/home/Skills";
import Testimonial from "@/utils/home/Testimonial";
import WhyUs from "@/utils/home/WhyUs";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const fistHeadlines = [

  
  {
    title: "Web Design",
  },
  {
    title: "Product Design",
  },
  {
    title: "Web Development",
  },
  {
    title: "SEO Optimization",
  },
  {
    title: "UX/UI Strategy",
  },
  {
    title: "Graphics",
  },
];

const secondHeadlines = [
  {
    title: "Clients Say Us",
  },
  {
    title: "Global Clients",
  },
  {
    title: "Awards Winning",
  },
  {
    title: "Clients Say Us",
  },
  {
    title: "Global Clients",
  },
  {
    title: "Awards Winning",
  },
];

const Index = () => {
  return (
    <Layout footer={2} dark>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* Advertise Area Start */}
      <Advertise />
      {/* Advertise Area End */}
      {/* Skills Area Start */}
      <Skills />
      {/* Skills Area End */}
      {/* About Us Area start */}
      <About />
      {/* About Us Area end */}
      {/* Service Style Four start */}
      <Service />
      {/* Service Style Four end */}
      {/* Headline area start */}
      <Headline headlines={fistHeadlines} />
      {/* Headline Area end */}
      {/* Project Timeline-two Area start */}
      <Projects />
      {/* Project Timeline Two Area end */}
      {/* Why Choose Us start */}
      <WhyUs />
      {/* Why Choose Us end */}
      {/* Pricing style three start */}
      <Pricing />
      {/* Pricing style three end */}
      {/* Headline area start */}
      <Headline headlines={secondHeadlines} />
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      <Testimonial />
      {/* Testimonial Area end */}
    </Layout>
  );
};
export default Index;
