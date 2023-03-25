import React from 'react'
import { ProfileRelationsBoxWrapper } from '../'

function CommunityBox({ title, list }) {
    
    const reduceList = list.slice(0, 6)

    return (
        <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
            { title } ({list.length})
            </h2>

            <ul>
            {reduceList.map((itemAtual) => {
                return (
                <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                    </a>
                </li>
                )
            })}
            </ul>
      </ProfileRelationsBoxWrapper>
    )
}

export default CommunityBox