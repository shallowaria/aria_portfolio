import About from "./sections/About";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto ">
      <Navbar />
      <Home />
      <About />
    </main>
  );
};

export default App;
