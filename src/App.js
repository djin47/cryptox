import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import Header from "./Components/Header";
import CoinDetails from "./Components/CoinDetails";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
//https://cryptox-on9pxjgv5-dhruvimpex47-gmailcom.vercel.app/
export default App;
