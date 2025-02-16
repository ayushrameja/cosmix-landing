import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RootLayout = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<ComingSoon />} />
    </Routes>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <RootLayout />
    </Router>
  );
}

export default App;
