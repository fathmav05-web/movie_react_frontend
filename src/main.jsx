import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Home from './Home'
import Movies from './Movies'
import WacthList from './WatchList'



import { BrowserRouter,Route,Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Movies' element={<Movies/>}/>
      <Route path='/WatchList' element={<WacthList/>}/>
   </Routes>
  </BrowserRouter>
</StrictMode>,
)