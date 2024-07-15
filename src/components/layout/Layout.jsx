import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (

        <>
            {/* header compo will be visible  */}
            <Header />

            {/* this child component only change */}
            <div id='child'>
                {children}
            </div>

            <Footer />
        </>
    )
}

export default Layout
