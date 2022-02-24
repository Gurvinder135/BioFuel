import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Main from "./components/Main";
import Product from "./components/Product";

import Advantages from "./components/Advantages";
import Industry from "./components/Industry";
import Specs from "./components/Specs";

function App() {
  return (
    <div className="app">
      <Home />
      <Main />
      <Product />
      <hr />
      <Specs />
      <Advantages />

      <Industry />
      <About />

      <Contact />
    </div>
  );
}

export default App;
