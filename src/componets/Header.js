import React, {useState} from "react";
import logo from "../images/superhero.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenSearch = () => {
  setIsOpen(true)
  }
  const handleCloseSearch = () => {
    setIsOpen(false)
    }
  return (
    <div className="container">
      <nav className="main-nav">
        <div className="logo-container">
          <img src={logo} alt="Heroe" className="logo" />
          <p>SuperHero</p>
        </div>

        <div className="right-menu">
          <BsSearch onClick={handleOpenSearch} size="2rem" style={{ color: "#bdbdbd", cursor: "pointer" }} />
          {isOpen && (
            <div id="myOverlay" className="overlay">
            <AiOutlineClose className="closebtn" onClick={handleCloseSearch}
              size="2rem"
              style={{ color: "#bdbdbd;", cursor: "pointer" }}
            />
            <div className="overlay-content">
                <input type="text" placeholder="Search.." name="search" />
                <button className="search-btn">
                Search
                </button>
            </div>
          </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
