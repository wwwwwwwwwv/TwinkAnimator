
import Hero from "./components/Hero";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";


// import TodoList from "./components/TodoList"


const App = () => {




  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/hero" element={<Hero />} />
        
      </Routes>
    </>
  );
};

export default App

