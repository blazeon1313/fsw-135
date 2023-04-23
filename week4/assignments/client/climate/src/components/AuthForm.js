import React from 'react'

export default function AuthForm(props){
    const{
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            username, 
            password
        }
    } = props

    return (
        <form className="login-signup" onSubmit={handleSubmit}>
            Username: <input
               type='text'
               value={username}
               name="username"
               onChange={handleChange}
               placeholder='Username'
            /><br />
            Password: <input
               type= 'text'
               value={password}
               name="password"
               onChange={handleChange} 
               placeholder="Password"
            /> <br />
            <button>{ btnText }</button>   
        </form>
    )
}

// Exported to Auth.js