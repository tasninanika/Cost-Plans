import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
// import Navbar from './Components/Navbar/Navbar'
import Navbar2 from "./Components/Navbar2/Navbar2";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar2></Navbar2>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;
