import React from 'react'
import { Banner } from '../Banner'
import { Types } from '../filtering/Types'
import { Movies } from '../Movies'

const Home = () => {
  return (
    <>
    <Banner/>
    <Types/>
    <Movies/>
    </>
  )
}

export default Home