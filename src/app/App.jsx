import Sale from "../components/sale/Sale.jsx";
import '../style/index.css'
import {Routes, Route} from "react-router";
const App = () => {

  return <div>
    <Routes>
      <Route path="/" element={<Sale/>} />
      <Route path="contact" element={<Sale /> } />
      <Route path="page" element={<Sale />} />
    </Routes>
  </div>;
};

export default App;
