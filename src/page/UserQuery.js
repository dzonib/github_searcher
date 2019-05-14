import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Users() {

    const [user, setUser] = useState('')

    async function handleQuery(e) {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${e.target.value}`)
            setUser(data)
        } catch(e) {
            console.log(e.message)
        }
    }

    const {
        avatar_url,
        login,
        html_url
    } = user
    console.log(user)
    return (
        <>
                <h1>Search for user</h1>

            <input type="text" onChange={handleQuery}/>
            <div>
                {login && <h2>{login}</h2>}
                {avatar_url && <img src={avatar_url} alt="" style={{width: "200px", height: "200px"}}/>}
                <a href={html_url} target="_blank" rel="noopener noreferrer"><p>Visit {login} on github.com:</p></a>

                
            </div>
        </>
    )
}