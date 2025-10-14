import Home from "./sections/Home";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto bg-zinc-200/60">
      <Navbar />
      <Home />
    </main>
  );
};

export default App;
