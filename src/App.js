import "./App.css";
import Comments from "./components/Comments";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Morefeatures from "./components/Morefeatures";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="mx-[135px] mt-[50px] flex flex-col space-y-[200px]">
        <Hero />
        <Stats />
        <Features />
        <Services />

        <Morefeatures />

        <Comments />
      </div>
    </div>
  );
}

export default App;
