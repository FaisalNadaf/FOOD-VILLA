import Header from "./components/Header";
import Body from "./components/Body";
import Buy from "./components/Buy";

import { data } from "./constant.js";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const d = window.location.pathname;
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        {data.map((_, i) => (
          <Route key={i} path={`/buy/${i+1}`} element={<Buy id={`${i+1}`} />} />
        ))}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
