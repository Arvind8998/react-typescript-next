import React from 'react'
import PostCard from './PostCard'
import { PostProps } from '@/types/types';

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!res.ok){
            throw new Error('Network response was not ok');
        }
    return res.json();

}
const PostList = async () => {
    const data: PostProps[] = await getData();
  return (
    <div className='postList'>
        <PostCard title="post title" desc="post desc" />
    </div>
  )
}

export default PostList