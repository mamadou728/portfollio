import Hero from "@/components/sections/Hero";
import ProjectGallery from "@/components/sections/ProjectGallery";
import AreaOfFocus from "@/components/sections/AreaOfFocus";
import JourneyPath from "@/components/sections/JourneyPath";
import TheOrbit from "@/components/sections/TheOrbit";
import Footer from "@/components/sections/Footer";
import Header from "@/components/ui/Header";
import PageWrapper from "@/components/ui/PageWrapper";

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <Header />
        <Hero />
      </PageWrapper>
      <ProjectGallery />
      <AreaOfFocus />
      <JourneyPath />
      {/* <TheOrbit /> */}
      <Footer />
    </main>
  );
}
