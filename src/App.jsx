import Header from "./components/Header";
import Body from "./components/Body";
import { data } from "./constant.js";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const d= window.location.pathname;
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
