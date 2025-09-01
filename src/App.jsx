import { Outlet } from "react-router-dom";
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import ScrollToTop from "./component/ScrollToTop";


const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

