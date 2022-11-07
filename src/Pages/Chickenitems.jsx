import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Chickenitems = () => {
  const [item, setItem] = useState([]);
    console.log(item)
  useEffect(() => {
    axios.get("https://uat.ordering-farmshop.ekbana.net/api/v4/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        "Warehouse-Id": "1",
      },
    }).then(res=>{
        setItem(res.data.data)
       
    })
  }, []);
  



  return <div>Chickenitems</div>;
};

export default Chickenitems;
