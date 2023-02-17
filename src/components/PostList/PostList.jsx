import React, {useContext, useEffect} from 'react'
import PostCard from '../PostCard/PostCard'
import { postsContext } from '../../postContext'

const PostList = () => {
    const {posts, getPosts} = useContext(postsContext);

    useEffect(() => {
      getPosts();
    }, [])

    
  return (
    <>
        <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
            {posts?.map(item => (
               <PostCard key={item.id} item={item}/> 
                ))}
        </div>
    </>
  )
}

export default PostList