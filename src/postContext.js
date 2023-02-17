import axios from 'axios';
import React, { useState} from 'react';

export const postsContext =React.createContext();

const PostsContextProvider = ({children}) =>{
    const API = ('http://localhost:8000/posts');
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        let res = await axios(API);
        setPosts(res.data);
    }

    async function createPost(newPost) {
        await axios.post(API, newPost);
        getPosts();
    }

    async function deletePost(id){
        await axios.delete(`${API}/${id}`)
        getPosts()
    }

   return (
    <postsContext.Provider value={{
        posts,

        getPosts,
        createPost,
        deletePost

    }}>
        {children}

    </postsContext.Provider>
   )

}

export default PostsContextProvider;