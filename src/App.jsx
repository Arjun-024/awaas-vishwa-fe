import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFound404'
import WishlistPage from './pages/WishlistPage'
import EditAdPage from './pages/EditAdPage'
import CreateAdPage from './pages/CreateAdPage'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} > 
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
