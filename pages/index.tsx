import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelations'

function ProfileSidebar(propriedades) {
  console.log(propriedades)
  return (
    <Box
      className='profileArea'
      style={{ gridArea: 'profileArea' }}>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: '8px' }}
      />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'eukvyn'
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'wesleyaju']

  return (
    <>
      <AlurakutMenu githubUser={undefined} />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div>
          <Box
            className='welcomeArea'
            style={{ gridArea: 'welcomeArea' }}>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className='profileRelationsArea'
          style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className ="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  )
}
