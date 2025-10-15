import { Toaster } from "react-hot-toast";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Study from "./sections/Study";
import Work from "./sections/Work";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto bg-gradient-to-b bg-gradient-to-gray-50 from-gray-100 to-gray-100/0">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Study />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
};

export default App;
