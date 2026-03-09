import Hero from "./components/sections/Hero";
import UniversitiesSection from "./components/sections/UniversitiesSection";
import StudyDestinations from "./components/sections/StudyDestinations";

export default function Home() {
  return (
    <main>
      <Hero />
      <StudyDestinations/>
      <UniversitiesSection />
    </main>
  );
}