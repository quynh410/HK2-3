import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Article from './Article'
import ListCart from './ListCart'
import Menu from './Menu'

export default function Index() {
  return (
    <div className="container">
        <Header></Header>
        <Navbar></Navbar>
        <main className='main'>
          <Menu></Menu>
          <ListCart></ListCart>
        <Article></Article>
        </main>
    </div>
  )
}
