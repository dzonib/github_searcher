import React from 'react'

export default function User({login, avatar_url, html_url}) {
    return (
        <div>
            {login && <h2>{login}</h2>}
            {avatar_url && <img src={avatar_url} alt="" style={{width: "200px", height: "200px"}}/>}
            {login &&  <a href={html_url} target="_blank" rel="noopener noreferrer"><p>Visit {login} on github.com</p></a>}

        </div>
    )
}