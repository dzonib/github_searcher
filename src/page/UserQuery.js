import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { StyledSearch } from '../styles/StyledSearch';
import User from '../components/User';

export default function Users() {

    const [query, setQuery] = useState('')
    const [user, setUser] = useState('')
    const [error, setError] = useState('')

    async function handleQuery(e) {
        e.preventDefault()
        try {
            const {data} = await axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
        } catch(e) {
            console.log(e.message)
            setError(e.message)
        }
    }


    //TODO: LINK NOT WORKING FIX IT
    if (error) {
        return (
            <>
                <Link to="/" style={{fontSize: '4rem'}}>back</Link>
                <h1>User not found</h1>
            </>
        )
    }
    return (
        <StyledSearch>
            <User {...user}/>

            <h1>Please enter github username of the person you want to find in the input field</h1>
            <form onSubmit={handleQuery}>
                <input type="text" placeholder="Username" onChange={(e) => setQuery(e.target.value)}/>
                <button type="submit">Search</button>
            </form>

        </StyledSearch>
    )
}