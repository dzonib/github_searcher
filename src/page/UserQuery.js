import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Users() {

    const [query, setQuery] = useState('')
    const [user, setUser] = useState('')

    async function handleQuery(e) {
        e.preventDefault()
        try {
            const {data} = await axios.get(`https://api.github.com/users/${query}`)
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
            <form onSubmit={handleQuery}>
                <input type="text" onChange={(e) => setQuery(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <div>
                {login && <h2>{login}</h2>}
                {avatar_url && <img src={avatar_url} alt="" style={{width: "200px", height: "200px"}}/>}
                {login &&  <a href={html_url} target="_blank" rel="noopener noreferrer"><p>Visit {login} on github.com</p></a>}
                {login && <Link></Link>}
                
            </div>
        </>
    )
}