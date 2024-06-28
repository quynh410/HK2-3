import React from 'react'
import ArticleManagement from './components/ArticleManagement'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';import AddArticle from './components/AddArticle'

export default function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<ArticleManagement></ArticleManagement>}></Route>
      <Route path='/add' element={<AddArticle></AddArticle>}></Route>
    </Routes>
    </div>
  )
}
