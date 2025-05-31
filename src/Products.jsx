import React, { useState } from 'react'

function Products({lmao, data}) {
  const [a,b] = useState(false)
  return (
    <div className="text-orange-400 bg-zinc-800">
      <h1>{lmao}</h1>
      <h2>{data.age}</h2>
      <h2>{data.name}</h2>
      <h4>{a}</h4>
    </div>
  )
}

export default Products