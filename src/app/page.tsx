import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import HomeProjects from "@/components/HomeProjects";
import LampContainer from "@/components/lamp"
import BackgroundBeams from "@/components/Beams"


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0.2]">
      <BackgroundBeams/>
      <LampContainer/>
      <HomeProjects />
      <Instructors />
      <Footer /> 
    </main>
  );
}
