import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from './Components/Account'
import { Footer } from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound'
import Photo from './Components/User/Photo'
import UserProfile from './Components/User/UserProfile'
import ProtectedRouter from './Helper/ProtectedRouter'
import { Container, AppContainer} from './Style/GlobalStyle'
import { UserStorage } from './UserContext'

export default function App(){
  return(
    <AppContainer>
      <BrowserRouter>
        <UserStorage>
          <Header/>
            <Container>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login/*" element={<Login/>}/>
                <ProtectedRouter path="/conta/*" element={<Account/>}/>
                <Route path="foto/:id" element={<Photo/>} />
                <Route path="perfil/:user" element={<UserProfile/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </Container>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </AppContainer>
  )
}