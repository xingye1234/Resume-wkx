import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
function App() {
  return (
    <div className="[background:radial-gradient(125%_125%_at_50%_10%, #000_40%, #63e_100%)] min-h-screen w-full bg-black font-fredoka">
      <main className="mx-auto flex max-w-screen-lg flex-col items-center px-4 pt-16 text-white lg:px-16">
        <NavBar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
