import React from 'react'

export default function AuthForm(props){
    const{
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
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
               name={"username"}
               onChange={handleChange}
               placeholder='Username'
            /><br />
            Password: <input
               type= 'text'
               value={password}
               name={"password"}
               onChange={handleChange} 
               placeholder="Password"
            /> <br />
            <button>{ btnText }</button>
            <p style={{backgrounColor: "#c00000", color: "#ffffff", textAlign: "center"}}>{ errMsg }</p>   
        </form>
    )
}