import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

let history = useHistory();

export default function Register() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const register = () => {
        axios.post('https://react-authenticated-backbone.herokuapp.com/register', {
            username,
            password
        }, {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            // console.log(res.data);
            if (res.data === "registered") {
                setUsername("");
                setPassword("");
                // window.location.href = "/login"
                
                history.push('/login');
        }
        })
    }
    
    return (
        <div>
            <h1>Register</h1>
            <input type="text" value={username} placeholder="username" onChange={e => setUsername(e.target.value)} />
            <input type="text" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={register}>Register</button>
        </div>
    )
}