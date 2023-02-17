import React from 'react'
import AddPost from './components/AddPost/AddPost';
import EditPost from './components/EditPost/EditPost';
import PostList from './components/PostList/PostList';
import Details from './components/Details/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PostsContextProvider from './postContext';


const MainRoutes = () => {
  return (
    <PostsContextProvider>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<PostList /> }/>
                <Route path='/add' element={<AddPost /> }/>
                <Route path='/edit/:id' element={<EditPost/> }/>
                <Route path='/details/:id' element={<Details/> }/>
                
            </Routes>
        </BrowserRouter>
    </PostsContextProvider>

  )
}

export default MainRoutes