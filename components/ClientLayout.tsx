'use client'

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Snowflakes from './Snowflakes'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Snowflakes />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

