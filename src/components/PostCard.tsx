import React from 'react'

const PostCard =  (props : {title: string, desc: string}) => {
  return (
    <div className='postCard'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default PostCard