import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container className="px-0 mt-5" style={{ border: "1px solid #999999" }}>
      <h2
        className="px-0 text-center py-3"
        style={{ backgroundColor: "#F5f5f5" }}
      >
        C A T E G O R I E S
      </h2>
      <Container>
        <ul style={{listStyle:"none"}} className="py-2">
           <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
           
            <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Fruits and Vegetables</Link>
          </li>
          <ul style={{listStyle:"none"}}>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
              <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Cuts & Sprouts</Link>
            </li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
              <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Flowers</Link>
            </li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
              <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Fresh Herbs & Seasonings</Link>
            </li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
              <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Fresh Vegetables</Link>
            </li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
              <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> International Vegetables</Link>
            </li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
              <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> International Vegetables</Link>
            </li>
          </ul>
           <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
            <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Grocery and Staples</Link>
          </li>
          <ul style={{listStyle:"none"}} className="py-2">
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Dal & Pulses </Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Dry Fruits</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Edible Oil and Ghee</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Flours and Sooji</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Masalas & Spices</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Organic Staples</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Rice & Rice Products</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Salt Sugar & Jelly</Link></li>
          </ul>
           <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> 
            <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Personal Care</Link>
          </li>
          <ul style={{listStyle:"none"}} className="py-2">
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Baby Care</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Cosmetics</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Deos & Perfumes</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Skin Care</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Sanitary Needs</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Oral Care</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Personal Hygiene</Link></li>
             <li className="py-1" style={{color:"#fe9126"}} ><FaArrowRight/> <Link to="/products" style={{color:"#999999", textDecoration:"none", fontWeight:"500"}} className="sidebar-link"> Shaving Needs</Link></li>
          </ul>
        </ul>
      </Container>
    </Container>
  );
};

export default Sidebar;
