import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { BeforeAfter } from "@/components/before-after";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Process } from "@/components/process";
import { Realizations } from "@/components/realizations";
import { Testimonials } from "@/components/testimonials";
import { Loyalty } from "@/components/loyalty";
import { ServiceArea } from "@/components/service-area";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BeforeAfter />
        <Services />
        <WhyUs />
        <Process />
        <Realizations />
        <Testimonials />
        <Loyalty />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
