import React from 'react'

const Pagination = ({productPerPage, totalProducts, paginate}) => {

    const pageNumbers=[];
    for (let i=1; i<=Math.ceil(totalProducts/productPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav className='d-flex mt-5 justify-content-center px-5'>
        <ul className="pagination text-end">
            {
                pageNumbers.map(number=>{
                    return(
                        <li key={number} className="page-item" >
                            <a href='#' className='page-link' onClick={()=>paginate(number)} style={{color:"#fe9126", outline:"#fe9126",borderRadius:"0"}}>
                                {
                                    number
                                }
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default Pagination