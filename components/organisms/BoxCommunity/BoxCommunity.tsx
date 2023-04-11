import React from 'react'
import { SmallTitle, Box } from '../../atoms'
import { ListCommunities } from '../../molecules'
import { BoxCommunityProps } from './types'

const BoxCommunity: React.FC<BoxCommunityProps> = ({ category, title, list}) => {
    return (
        <Box>
            <SmallTitle>
            { title } ({list.length})
            </SmallTitle>

            <ListCommunities category={category} title={title} list={list}/>
        </Box>
    )
}

export default BoxCommunity
