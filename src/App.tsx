import './index.css'
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";
import {Outlet} from "react-router-dom";

function App() {
  return (
      <div className="w-full h-full">
        <Navigation/>
        <Outlet/>
        <Footer/>
      </div>
  );
}

export default App;
