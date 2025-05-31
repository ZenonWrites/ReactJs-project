import React from 'react'
import { useState } from 'react'
import Products from './Products'
import Header from './Header'


function App() {
  for (let i = 0; i < 25; i++){
    var [song1,b] =  useState("AIAIAIYAAH")
    var [song2,b] =  useState("dadadadadadadada")
    return (
      <>
        <h1>This is Home Page</h1>
        <a href='/About'>About</a>
        <a href="/Blog">Blog</a>
        <a href="/Profile">Profile</a>
        <a href="/Courses">Courses</a>
      </>
    )
  }
}

export default App