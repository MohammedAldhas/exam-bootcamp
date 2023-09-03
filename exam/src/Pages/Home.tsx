import React from 'react'
import Nav from "../components/Nav"
import Cards from "../components/Cards"
import Footer from './Footer'
export default function Home() {
  return (
    <>
    <Nav></Nav>
    <div className="flex justify-center mt-4">
      <Cards></Cards>
    </div>
    <Footer></Footer>

    </>
  )
}
