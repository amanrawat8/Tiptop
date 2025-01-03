import React from 'react'
import parse from 'html-react-parser'

export const ShowPost = ({content}) => {
  return (
    <div className='tiptap m-4 p-4 bg-gray-200'>
      <div>
        {parse(content)}
      </div>
    </div>
  )
}
