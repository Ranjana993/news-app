import Header from "./components/Navbar";
import Detailed from "./components/Detailed";
import Wrapper from "./components/Wrapper";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/details/:name" element={<Detailed />} />
      </Routes>
      <Footer />
    </>
  );
}
