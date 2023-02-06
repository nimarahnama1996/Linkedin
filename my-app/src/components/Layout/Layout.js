import React, { Fragment } from 'react'



import Header from '../Header/Header'
import Routes from "../../routes/Routers";



const Layout = () => {
  return (
    <Fragment>

        <Header/>

        <div>
        <Routes />
      </div>
    </Fragment>
  )
}

export default Layout