import { useState,useRef } from "react";
import suhas from "../../assets/suhasnagLogo.svg";
import underLine from "../../assets/nav_underline.svg";
import menuOpen from "../../assets/menu_open.svg";
import menuClose from "../../assets/menu_close.svg";
import "./NavBar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {

const [menu,setMenu] = useState("home");
const menuRef = useRef();

const openMenu=()=>{
  menuRef.current.style.right="0";
}

const closeMenu=()=>{
  menuRef.current.style.right="-350px";
}

  return (
    <div className="navBar">
      <img src={suhas} alt="logo image" />
      <img src={menuOpen} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menuClose} onClick={closeMenu}  alt="" className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink>{menu === "home"?<img src={underLine}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>{setMenu("about")}}>About Me</p></AnchorLink>{menu === "about"?<img src={underLine}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>{setMenu("services")}}>Services</p></AnchorLink>{menu === "services"?<img src={underLine}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>{setMenu("work")}}>Portfolio</p></AnchorLink>{menu === "work"?<img src={underLine}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>{setMenu("contact")}}>Contact</p></AnchorLink>{menu === "contact"?<img src={underLine}/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>{setMenu("contact")}}>Connect with me</p></AnchorLink></div>
    </div>
  );
};

export default NavBar;
