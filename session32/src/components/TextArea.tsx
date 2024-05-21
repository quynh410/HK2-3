import React, { useState } from 'react'

export default function TextArea() {
    const [feedback,setFeedback]=useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setFeedback(e.target.value)
    }
  return (
    <div>
      <h1>Text Area</h1>
      <textarea onChange={handleChange} name="" id="">

      </textarea>
    </div>
  )
}
