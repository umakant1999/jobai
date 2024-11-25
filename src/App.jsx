import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ChatBot from './componets/Chatbot.jsx';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const App = () => {
  return (
    <div className="App flex flex-col gradient-bg">
   

      <Navbar/>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer/>
    </div>
  )
};

export default App;

