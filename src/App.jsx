
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AppLayout from './components/layouts/AppLayout'
import PostsLayout from './components/layouts/PostsLayout'
import Home from './components/Home'
import About from './components/About'
import Posts from './components/Posts'
import PostDetails from './components/PostDetails'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'


import { postAction } from './actions/posts'


function App() {

  return (
    <>
      <BrowserRouter>
      

  <Routes>
    <Route path="/" element={<AppLayout />}>

      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

     <Route path="posts" element={<PostsLayout />} >
        <Route index element={<Posts />} />
      <Route path=":id" element={<PostDetails />} />
      <Route path="new" element={<NewPost />} action={postAction} />
      <Route path="edit/:id" element={<EditPost />} />
     </Route>
    </Route>
  </Routes>

</BrowserRouter>
    </>
  )
}

export default App
