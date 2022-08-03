import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Home from "./Pages/Home"
import Tourism from "./Pages/Tourism"
import Movies from "./Pages/Movies"
import Technology from "./Pages/Technology"
import Fitness from "./Pages/Fitness"
import Food from "./Pages/Food"
import SingleBlogPage from "./Pages/SingleBlogPage";
import './style.css'
// import Details from "./Pages/Details";

function App() {
  return (
    <div className="App">
  
      <Header />
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Movies" element = {<Movies />} />
        <Route path="/Tourism" element = {<Tourism />} />
        <Route path="/technology" element = {<Technology />} />
        <Route path="/fitness" element = {<Fitness />} />
        <Route path="/food" element = {<Food />} />
        <Route path=":category/:articleid" element = {<SingleBlogPage/>}/>
      </Routes>
      </BrowserRouter>
  


    </div>
  );
}

export default App;