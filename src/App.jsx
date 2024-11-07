import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from "./pages/ProductDetails.jsx"
import MainPage from "./pages/MainPage.jsx"
import Aboutus from "./pages/Aboutus.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import Signin from "./pages/Auth/Signin.jsx"
import Signup from "./pages/Auth/Signup.jsx"
import Cart from "./pages/Cart.jsx"
import Navbar from "./components/Navbar.jsx";




function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
