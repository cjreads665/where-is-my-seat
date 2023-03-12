import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
   <ToastContainer
position="top-center"
/>
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
