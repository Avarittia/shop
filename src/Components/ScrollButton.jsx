import React, {useState} from 'react';
import { FaArrowUp} from 'react-icons/fa';

  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className='top-btn' onClick={scrollToTop} style={{display: visible ? 'block' : 'none'}}>
     <FaArrowUp />
    </button>
  );
}
  
export default ScrollButton;