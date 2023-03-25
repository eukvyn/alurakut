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
  interface Community {
    id: string
    title: string | File
    image: string | File
  }

  const communityDefault: Community = {
    id: 'ad210837120376120g',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  }

  const [comunidades, setComunidades] = React.useState<Community[] | null>([communityDefault])

  const pessoasFavoritas = [
    {
      id: new Date().toISOString(),
      title: 'juunegreiros',
      image: `https://github.com/juunegreiros.png`,
    },
    {
      id: new Date().toISOString(),
      title: 'omariosouto',
      image: `https://github.com/omariosouto.png`,
    },
    {
      id: new Date().toISOString(),
      title: 'peas',
      image: `https://github.com/peas.png`,
    },
    {
      id: new Date().toISOString(),
      title: 'rafaballerini',
      image: `https://github.com/rafaballerini.png`,
    },
    {
      id: new Date().toISOString(),
      title: 'marcobrunodev',
      image: `https://github.com/marcobrunodev.png`,
    },
    {
      id: new Date().toISOString(),
      title: 'wesleyaju',
      image: `https://github.com/wesleyaju.png`,
    }
  ]

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

                const communityInput: Community = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }

                const comunidadesAtualizadas = [...comunidades, communityInput]
                setComunidades(comunidadesAtualizadas)
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
            title='Comunidades'
            list={comunidades}
          />
          <CommunityBox
            title='Pessoas da comunidade'
            list={pessoasFavoritas}
          />
        </div>
      </MainGrid>
    </>
  )
}
