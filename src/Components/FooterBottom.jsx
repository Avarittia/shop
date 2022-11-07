import React from 'react'
import { Container } from 'react-bootstrap'
import {RiFacebookCircleLine} from "react-icons/ri"
import {AiOutlineDribbble} from "react-icons/ai"
import {TiSocialVimeoCircular, TiSocialTwitterCircular} from "react-icons/ti"
import card from "../Assets/images/card.png"
import { Link } from 'react-router-dom'

const FooterBottom = () => {
  return (
    <Container fluid className='d-flex justify-content-between align-items-center py-2 px-5 footer-bottom' style={{backgroundColor:"#333333"}}>
    <div style={{fontSize:'2rem'}} className="d-flex justify-content-evenly align-items-center">
        <Link style={{fontSize:"41px", color:"white"}}><RiFacebookCircleLine/></Link>
        <Link style={{fontSize:"47px", color:"white"}}><TiSocialTwitterCircular/></Link>
        <Link style={{fontSize:"41px", color:"white"}}><AiOutlineDribbble/></Link>
        <Link style={{fontSize:"47px", color:"white"}}><TiSocialVimeoCircular/></Link>
    </div>
    <div>
      <img src={card} alt="/" />
    </div>
</Container>
  )
}

export default FooterBottom