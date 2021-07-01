import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = () => {
        axios.post('https://react-authenticated-backbone.herokuapp.com/login', {
            username,
            password
        }, {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            // console.log(res.data);
            if (res.data === "logged in") {
                window.location.href = "/"
            }
        }, () => {
            console.log("Failure");
        })
    }

    // const getUser = () => {
    //     axios.get("http://localhost:4000/user", {
    //         withCredentials: true
    //     }).then(res => {
    //         console.log(res.data);
    //     })
    // }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
            {/* <button onClick={getUser}>Get User that's logged in</button> */}
        </div>
    )
}
