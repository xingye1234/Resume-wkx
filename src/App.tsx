import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
function App() {
  return (
    <div className="w-full font-fredoka min-h-screen bg-black [background:radial-gradient(125%_125%_at_50%_10%, #000_40%, #63e_100%)]">
      <main className="flex flex-col items-center px-4 max-w-screen-lg mx-auto lg:px-16 pt-16 text-white">
        <NavBar />
        <Hero/>
        <Tech/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
