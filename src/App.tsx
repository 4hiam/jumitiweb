import { Hero } from "./components/Hero";
import { Experience, Skills, Specializations } from "./components/Sections";
import { ContactBar } from "./components/ContactBar";

export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Specializations />
      </main>
      <ContactBar />
    </div>
  );
}

