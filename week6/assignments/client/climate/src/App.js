import './App.css';
import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js';
import ProtectedRoute from './components/ProtectedRoute.js'

export default function App(){
    const { token } = useContext(UserContext)
    return (
        <div className="app">
            <h1 className="header">Climate Issues App</h1>
            <Navbar />
            <Switch>
                <Route 
                    exact path="/" 
                    render={()=> token ? <Redirect to="/profile"/> : <Auth />}
                />
                <ProtectedRoute 
                    path="/profile"
                    component={Profile}
                    redirectTo='/'
                    token={ token }
                />
                <Route 
                    path="/public"
                    component={Public}
                    redirectTo='/public'
                    token={ token }
                />
          </Switch>
      </div>
  )
} 