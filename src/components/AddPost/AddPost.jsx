import React, {useContext, useState} from 'react'
import { postsContext } from '../../postContext';

const AddPost = () => {
    const {createPost} = useContext(postsContext);
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    

    function addPostFunc () {
        let newPost = {
            body,
            author,
            image,
            // like
        }
        for (let key in newPost){
            if(!newPost[key]){
                alert('Some inputs are empty!')
                return
            }
          }

          createPost(newPost)
          setAuthor('')
          setBody('')
          setImage('')
    }

  return (
    <>
    <input type="text" placeholder='Author' value={author} onChange={e => setAuthor(e.target.value)}/>
    <input type="text" placeholder='Body' value={body} onChange={e => setBody(e.target.value)}/>
    <input type="text" placeholder='Image' value={image} onChange={e => setImage(e.target.value)}/>
    
    <button onClick={addPostFunc}>add post</button>
    </>
  )
}

export default AddPost