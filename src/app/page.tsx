import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Industries from "@/components/Industries";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SocialProof />
      <WhyChooseUs />
      <CaseStudies />
      <Technologies />
      <Testimonials />
      <Industries />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
