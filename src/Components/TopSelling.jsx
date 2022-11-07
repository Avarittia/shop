import React from 'react'
import { Container } from 'react-bootstrap'

import TabView from './TabView'

const TopSelling = () => {
  return (
    <Container className='px-5'>
        <h1 className='text-center my-5 pt-3 pb-5'>TOP SELLING OFFERS</h1>
        <TabView/>
    </Container>
  )
}

export default TopSelling