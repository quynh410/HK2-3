import React from 'react'
import Profile from './components/baitap/Profile'
import ListUser from './components/baitap/ListUser'
import ListProduct from './components/baitap/ListProduct'
import Count from './components/baitap/Count'
import RandomNumber from './components/baitap/RandomNumber'
import ChangeStage from './components/baitap/ChangeStage'
// import Job from './components/Job'

export default function App() {
  return (
    <>
      {/* <Job></Job> */}
      <Profile></Profile>
      <ListUser></ListUser>
      <ListProduct></ListProduct>
      <Count></Count>
      <RandomNumber></RandomNumber>
      <ChangeStage></ChangeStage>
    </>
  )
}
