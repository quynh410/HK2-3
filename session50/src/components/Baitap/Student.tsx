import React from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
    const {name} = useParams();
  return (
    <div>
      <h2>Bài 2</h2>
        <p>Name: {name}</p>
    </div>
  )
}
