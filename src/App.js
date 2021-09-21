import React from 'react';
import './App.css';
import Nav from './Components/Navbar/nav'
import Campaign from './Components/Campaign/campaign'
import Footer from "./Components/Footer/footer";
import Product from "./Components/Product/product";

function App() {
    return (
        <div>
            <Nav/>
            <div className="contentStyle">
            <Product/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
