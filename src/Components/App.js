import { Route, Routes } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Email from "./Email";
import Error from './Error';
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav></Nav>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
            {/* <Route path="about/email" element={<Email></Email>}></Route> */}
            <Route path="about" element={<About></About>}>
              <Route path="email" element={<Protected Component={Email}></Protected>}></Route>
              <Route path="email/:param" element={<Email></Email>}></Route>
            </Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
