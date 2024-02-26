import Iam from "./components/Iam";
import Known from "./components/Known";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './App.css';
import './Navbar.css'
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"

function App(){
  return (
    <>
    <BrowserRouter>
      <nav className="navbar1" id="#nav">
          <div className="nav-container">
            <Link to='#nav' className="link-id">
              <img 
                className='iam' 
                src= '/iam.svg'
                alt='Logo de brand' 
              />
            </Link>
            <ul className="list">
              <li className="list-item">
                <Link to="#projects" className="link-id">
                  Projects
                </Link>
              </li>
              <li className="list-item">
                <Link to="#contact" className="link-id">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      <div><Iam/></div>
      <div><Known/></div>
      <div><Skills/></div>
      <div><Education/></div>
      <div><Projects/></div>
      <div><Contact/></div>
    </BrowserRouter>
    </>
  );
}

export default App;