import "./App.css";
import Slide from "./components/ShowSlide/ShowSlideAuto";
import Header from "./layout/defaultLayout/Header/Header";
import Navbar from "./layout/defaultLayout/Nav/Navbar";
import Footer from "./layout/defaultLayout/Footer/Footer";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Page5 from "./pages/Page5/Page5";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Header />
        <Navbar />
      </div>
      <Slide />
      <Page2 />
      <Page3 />
      <Page5/>
      <Footer />
    </div>
  );
}

export default App;
