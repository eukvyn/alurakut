export type ListCommunity = {
    title: string
    id: string
    imageUrl: string
    creatorSlug: string
}

export type ListCommunitiesProps = {
    category: string
    title: string
    list: ListCommunity[]
}
