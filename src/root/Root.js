import React, { useState ,useEffect} from 'react'
import { Routes, Route } from "react-router-dom"

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import Create from '../pages/Create';
import Profile from '../pages/Profile';
import Nav from '../components/Nav';
import Edit from '../pages/Edit';
import Post from '../pages/Post';
import Editprofile from '../pages/Editprofile';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Del from '../pages/Del';
import Create2 from '../pages/Create2';

function Root() {
const [auth, setAuth] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('token')
// we can only get token on successful login
if(token){
    setAuth(true);
}
}, [])


  return (
   <>
             <Routes>
         
            {auth ? (<>
            <Route path="/" element={<Nav setAuth={setAuth} />} >
            <Route index element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/create2" element={<Create2 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/editprofile" element={<Editprofile/>}/>
            <Route path="/post/:id" element={<Post />} />
            </Route>
            </>):(
                 <>
                 <Route path="/login" element={<Login setAuth={setAuth} />} />
                 <Route path="/signup" element={<SignUp setAuth={setAuth}  />} />
                 {/*  redirect to login if no matching route */}
                 <Route path="*" element={<Login setAuth={setAuth}  />} />
                 <Route path ="/delete" element={<Del />} />

               </>
            )}
           
          
          </Routes>
   </>
  )
}

export default Root