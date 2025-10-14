import About from "./sections/About";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Work from "./sections/Work";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto bg-gradient-to-b bg-gradient-to-gray-50 from-gray-100 to-gray-100/0">
      <Navbar />
      <Home />
      <About />
      <Work />
    </main>
  );
};

export default App;
