import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen p-5 bg-[#020617] text-white">
            <Header />
            <main className="flex-1 p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
