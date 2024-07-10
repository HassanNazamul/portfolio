import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (

        <>
            <Header />
            <div id='child'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout