import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { Founder } from "@/components/sections/Founder";
import { WhyAlTina } from "@/components/sections/WhyAlTina";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Confidentiality } from "@/components/sections/Confidentiality";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Problems />
      <Services />
      <Approach />
      <Founder />
      <WhyAlTina />
      <WhoWeServe />
      <Confidentiality />
      <Contact />
    </>
  );
}
