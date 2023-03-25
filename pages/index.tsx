import React from 'react'
import { Box, CommunityBox, MainGrid } from '../components'
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from '../lib/AlurakutCommons'

function ProfileSidebar(propriedades) {
  return (
    <Box as='aside'>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: '8px' }}
      />

      <p>
        <a
          className='boxLink'
          href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'eukvyn'
  const [communities, setCommunities] = React.useState([])
  const [followers, setFollowers] = React.useState([])
  const [followersAlura, setFollowersAlura] = React.useState([])

  React.useEffect(() => {
    // GET followers githubUser
    fetch(`https://api.github.com/users/${githubUser}/followers`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        let _followers = []
        response.map((follower) => {
          _followers.push({
            id: follower.id,
            title: follower.login,
            imageUrl: follower.avatar_url,
          })
        })
        setFollowers(_followers)
      })

    // GET followers Alura Community
    fetch(
      'https://api.github.com/users/alura-challenges/followers?since=70335282'
    )
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        let _followers = []
        response.map((follower) => {
          _followers.push({
            id: follower.id,
            title: follower.login,
            imageUrl: follower.avatar_url,
          })
        })
        setFollowersAlura(_followers)
      })

    //? API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '50b5fd0560cbd22ceff514f545e116',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `# GraphQl - Qraph Query Lancguage
        query {
          allCommunities {
            title
            id
            imageUrl
            creatorSlug
          }
        }`,
      }),
    }).then((response) => response.json()).then((response) => {
      const communitiesDato = response.data.allCommunities
      setCommunities(communitiesDato)
    })
  }, [])

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div>
          <Box
            className='welcomeArea'
            style={{ gridArea: 'welcomeArea' }}>
            <h1 className='title'>Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className='subTitle'>O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault()
                const dadosDoForm = new FormData(e.currentTarget)

                const communityInput = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  imageUrl: dadosDoForm.get('image'),
                }

                const communitiesUpdate = [...communities, communityInput]
                setCommunities(communitiesUpdate)
              }}>
              <div>
                <input
                  placeholder='Qual vai ser o nome da sua comunidade?'
                  name='title'
                  aria-label='Qual vai ser o nome da sua comunidade?'
                />
              </div>
              <div>
                <input
                  placeholder='Coloque uma URL para usarmos de capa'
                  name='image'
                  aria-label='Coloque uma URL para usarmos de capa'
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className='profileRelationsArea'
          style={{ gridArea: 'profileRelationsArea' }}>
          <CommunityBox
          category="users"
            title='Seguidores'
            list={followers}
          />
          <CommunityBox
            category="communities"
            title='Comunidades'
            list={communities}
          />
          <CommunityBox
            category="communities"
            title='Seguidores da Comunidade Alura'
            list={followersAlura}
          />
        </div>
      </MainGrid>
    </>
  )
}
