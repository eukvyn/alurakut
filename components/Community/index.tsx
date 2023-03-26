import React from 'react'
import { ProfileRelationsBoxWrapper } from '../'

function CommunityBox({ category, title, list }) {
    
    let reduceList = list.slice(0, 6)

    return (
        <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
            { title } ({list.length})
            </h2>

            <ul>
            {reduceList.map((itemAtual) => {
                return (
                <li key={itemAtual.id}>
                    <a href={`/${category}/${itemAtual.id}`}>
                    <img src={itemAtual.imageUrl} />
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