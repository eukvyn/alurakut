import React from 'react'
import { Text, UnorderedList, ListItem, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import { ListCommunitiesProps } from './types'

const ListCommunities: React.FC<ListCommunitiesProps> = ({ category, title, list}) => {

    let reduceList = list.slice(0, 6)

    return (
        <UnorderedList 
            maxH="220px"
            p={0}
            m={0}
            styleType={'none'}>
            <Grid 
            templateColumns='repeat(3, 1fr)' 
            gap="8px"
            >
                {reduceList.map((item) => {
                    return (
                        <GridItem>
                            <ListItem key={item.id}>
                                <Link
                                    href={`/${category}/${item.id}`}
                                    display={'inline-block'}
                                    h="102px"
                                    pos={'relative'}
                                    overflow={'hidden'}
                                    borderRadius="8px"
                                    _after={{
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0,
                                        zIndex: 1,
                                        backgroundImage: 'linear-gradient(0deg,#00000073,transparent)'
                                    }}
                                    >
                                    <Image
                                        src={item.imageUrl}
                                        alt='Dan Abramov'
                                        w="100%"
                                        h="100%"
                                        objectFit='cover' />
                                    <Text
                                        color={'#FFFFFF'}
                                        fontSize={10}
                                        pos={'absolute'}
                                        bottom="10px"
                                        zIndex={2}
                                        px="4px"
                                        py="0px">
                                        {item.title}
                                    </Text>
                                </Link>
                            </ListItem>
                        </GridItem>
                    )
                })}
            </Grid>
        </UnorderedList>
    )
}

export default ListCommunities
