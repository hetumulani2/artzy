import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Editor from './Pages/Editor/Editor';
import Footer from './Components/Footer/Footer';
import ContactUs from './Pages/ContactUs/ContactUs';
import Topbar from './Components/Topbar/Topbar';
import { NavbarComponent } from './Components/Header';
import SubCategory from './Pages/SubCategory/SubCategory';

function App() {
  return (
   <>
   <Topbar />
   <NavbarComponent    />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product' element={<Products />} />
    <Route path='/editor' element={<Editor/>} />
    <Route path='/subcategory' element={<SubCategory/>} />
    <Route path='/contact' element={<ContactUs/>} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
